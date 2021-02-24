<template>
  <div class="c-section-container">
    <h2 class="u-text__headline u-text-center">商品の登録・編集</h2>
    <div class="module-spacer--medium"></div>
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
    <div class="center">
      <PrimaryButton label="商品情報を保存" :event="saveProduct" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { TextInput, SelectBox, PrimaryButton } from "@/components/UIkit/index";

export default Vue.extend({
  components: {
    TextInput,
    SelectBox,
    PrimaryButton,
  },
  data() {
    return {
      name: "",
      description: "",
      category: "",
      gender: "",
      price: "",
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
    };
  },
  methods: {
    async saveProduct(): Promise<void> {
      await this.$accessor.product.saveProduct({
        name: this.name,
        description: this.description,
        category: this.category,
        gender: this.gender,
        price: this.price,
      });
    },
  },
});
</script>
