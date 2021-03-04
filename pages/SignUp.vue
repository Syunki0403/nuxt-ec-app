<template>
  <div class="c-section-container">
    <h2 class="u-text__headline u-text-center">アカウント登録</h2>
    <div class="module-spacer--medium"></div>
    <TextInput
      :fullWidth="true"
      label="ユーザー名"
      :required="true"
      :rows="1"
      type="text"
      v-model="username"
    />
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
    <TextInput
      :fullWidth="true"
      label="パスワード（再確認）"
      :required="true"
      :rows="1"
      type="password"
      v-model="confirmPassword"
    />
    <div class="center">
      <PrimaryButton label="アカウントを登録する" :event="signup" />
    </div>
    <div class="module-spacer--small"></div>
    <div class="center">
      <NuxtLink to="/signin">サインイン</NuxtLink>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { TextInput, PrimaryButton } from "../components/UIkit/index";
import { auth, db, FirebaseTimeStamp } from "@/plugins/firebase";

export default Vue.extend({
  components: {
    TextInput,
    PrimaryButton,
  },
  data() {
    return {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  },
  methods: {
    async signup() {
      // バリデーション
      if (
        this.username === "" ||
        this.email === "" ||
        this.password === "" ||
        this.confirmPassword === ""
      ) {
        alert("必須項目が未入力です。");
        return false;
      }
      if (this.confirmPassword !== this.password) {
        alert("パスワードが一致しません。もう一度お試しください。");
        return false;
      }

      auth
        .createUserWithEmailAndPassword(this.email, this.password)
        .then((result) => {
          const user = result.user;

          if (user) {
            const uid = user.uid;
            const timestamp = FirebaseTimeStamp.now();

            const userInitialData = {
              created_at: timestamp,
              email: this.email,
              role: "customer",
              uid: uid,
              updated: timestamp,
              username: this.username,
            };

            db.collection("users")
              .doc(uid)
              .set(userInitialData)
              .then(() => {
                console.log("signUp complete");
                this.$router.push("/signin");
              });
          }
        });
    },
  },
});
</script>
