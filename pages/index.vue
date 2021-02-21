<template>
  <div>
    Home
    <div>
      <router-link to="/signin">サインイン</router-link>
      <router-link to="/signup">サインアップ</router-link>
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
