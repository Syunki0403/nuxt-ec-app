<template>
  <div class="c-section-container">
    <h2 class="u-text__headline u-text-center">商品の登録・編集</h2>
    <div class="module-spacer--medium"></div>
    <div class="p-grid__list-images">
      <ImagePreview
        v-for="image in images"
        :key="image.id"
        :path="image.path"
        @click.native="deleteImage(image.id)"
      />
    </div>
    <ImageArea @set-image="images = $event" />
    <TextInput
      :fullWidth="true"
      label="商品名"
      :required="true"
      :rows="1"
      type="text"
      v-model="name"
    />
    <TextInput
      :fullWidth="true"
      label="商品説明"
      :required="true"
      :rows="5"
      type="text"
      v-model="description"
    />
    <SelectBox label="カテゴリー" :items="categoryBox" v-model="category" />
    <SelectBox label="性別" :items="genderBox" v-model="gender" />
    <TextInput
      :fullWidth="true"
      label="価格"
      :required="true"
      :rows="1"
      type="number"
      v-model="price"
    />
    <SetSizeArea :sizes="sizes" v-model="sizes" />
    <div class="module-spacer--medium"></div>
    <div class="center">
      <PrimaryButton label="商品情報を保存" :event="saveProduct" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { TextInput, SelectBox, PrimaryButton } from "@/components/UIkit/index";
import {
  ImageArea,
  ImagePreview,
  SetSizeArea,
} from "@/components/Products/index";
import { storage, db } from "@/plugins/firebase";

export default Vue.extend({
  components: {
    TextInput,
    SelectBox,
    PrimaryButton,
    ImageArea,
    ImagePreview,
    SetSizeArea
  },
  data() {
    return {
      images: [],
      name: "",
      description: "",
      category: "",
      gender: "",
      price: "",
      sizes: [],
      categoryBox: [
        { id: "tops", name: "トップス" },
        { id: "shirts", name: "シャツ" },
        { id: "pants", name: "パンツ" },
      ],
      genderBox: [
        { id: "all", name: "全て" },
        { id: "male", name: "メンズ" },
        { id: "female", name: "レディース" },
      ],
      id: window.location.pathname.split("/product/edit")[1],
    };
  },
  methods: {
    async saveProduct(): Promise<void> {
      await this.$accessor.product.saveProduct({
        id: this.id,
        images: this.images,
        name: this.name,
        description: this.description,
        category: this.category,
        gender: this.gender,
        price: this.price,
        sizes: this.sizes
      });
    },
    async deleteImage(id: string) {
      const ref = window.confirm("この画像を削除しますか？");
      if (!ref) {
        return false;
      } else {
        const newImages = this.images.filter((image) => image.id !== id);
        this.images = newImages;
        return storage.ref("image").child(id).delete();
      }
    },
  },
  mounted() {
    if (this.id !== "") {
      this.id = this.id.split("/")[1];

      db.collection("products")
        .doc(this.id)
        .get()
        .then((snapshot) => {
          const data = snapshot.data();

          this.images = data.images;
          this.name = data.name;
          this.description = data.description;
          this.category = data.category;
          this.gender = data.gender;
          this.price = data.price.toString();
          this.sizes = data.sizes;
        });
    }
  },
});
</script>
