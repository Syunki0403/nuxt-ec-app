<template>
  <div class="p-media__thumb">
    <img :src="path" alt="プレビュー画像" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    path: String,
  },
});
</script>