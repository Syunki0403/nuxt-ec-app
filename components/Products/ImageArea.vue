<template>
  <div>
    <div class="u-text-right">
      <span>商品画像を登録する</span>
      <label>
        <v-icon>mdi-image-plus</v-icon>
        <input
          id="image"
          class="u-display-none"
          type="file"
          @change="uploadImage"
        />
      </label>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { storage } from "@/plugins/firebase";

export default Vue.extend({
  components: {},
  data() {
    return {
      images: [],
    };
  },
  methods: {
    setImage(newImage: Object): void {
      this.images = [...this.images, newImage];
    },
    uploadImage(event: { target: HTMLInputElement }): void {
      const file = event.target.files[0];
      let blob = new Blob([file], { type: "image/jpeg" });

      const S =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      const N = 16;
      const fileName = Array.from(crypto.getRandomValues(new Uint32Array(N)))
        .map((n) => S[n % S.length])
        .join("");

      const uploadRef = storage.ref("image").child(fileName);
      const uploadTask = uploadRef.put(blob);

      uploadTask.then(() => {
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          const newImage = { id: fileName, path: downloadURL };
          this.setImage(newImage);
          this.$emit("set-image", this.images);
        });
      });
    },
  },
});
</script>

<style scoped>
.u-text-right span {
  vertical-align: text-top;
}

label i {
  cursor: pointer;
}
</style>