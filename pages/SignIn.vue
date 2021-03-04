<template>
  <div class="c-section-container">
    <h2 class="u-text__headline u-text-center">サインイン</h2>
    <div class="module-spacer--medium"></div>
    <TextInput
      :fullWidth="true"
      label="メールアドレス"
      :required="true"
      :rows="1"
      type="email"
      v-model="email"
    />
    <TextInput
      :fullWidth="true"
      label="パスワード"
      :required="true"
      :rows="1"
      type="password"
      v-model="password"
    />
    <div class="center">
      <PrimaryButton label="サインイン" :event="signin" />
    </div>
    <div class="module-spacer--small"></div>
    <div class="center">
      <NuxtLink to="/signup">アカウント登録</NuxtLink>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { TextInput, PrimaryButton } from "../components/UIkit/index";

export default Vue.extend({
  components: {
    TextInput,
    PrimaryButton,
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async signin(): Promise<void> {
      if (this.email === "" || this.password === "") {
        alert("必須項目が未入力です。");
      } else {
        await this.$accessor.user.signin({
          email: this.email,
          password: this.password,
        });
      }
    },
  },
});
</script>
