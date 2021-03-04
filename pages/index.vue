<template>
  <div>
    Home
    <div>
      <NuxtLink to="/signin">サインイン</NuxtLink>
      <NuxtLink to="/signup">サインアップ</NuxtLink>
      <NuxtLink to="/product/edit">商品追加</NuxtLink>
    </div>
    <div>
      {{ getUser }}
    </div>
    <SignOut />
  </div>
</template>

<script lang='ts'>
import Vue from "vue";
import SignOut from "../components/SignOut.vue";

export default Vue.extend({
  components: {
    SignOut,
  },
  computed: {
    getUser() {
      return this.$accessor.user.user
    },
  },
});
</script>
