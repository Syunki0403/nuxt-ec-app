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
    <SelectBox
      label="性別"
      :items="['男性', '女性']"
      v-model="gender"
    />
    <TextInput
      :fullWidth="true"
      label="価格"
      :required="true"
      :rows="1"
      type="number"
      v-model="price"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { TextInput, SelectBox } from "@/components/UIkit/index";

export default Vue.extend({
  components: {
    TextInput,
    SelectBox,
  },
  data() {
    return {
      name: "",
      description: "",
      category: "",
      gender: "",
      price: "",
    };
  },
  methods: {},
});
</script>
