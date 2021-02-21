<template>
  <div class="center">
    <PrimaryButton label="サインアウト" :event="signout" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { PrimaryButton } from "../components/UIkit/index";

export default Vue.extend({
  components: {
    PrimaryButton,
  },
  methods: {
    async signout() {
      await this.$accessor.user.signout();
    },
  },
});
</script>
