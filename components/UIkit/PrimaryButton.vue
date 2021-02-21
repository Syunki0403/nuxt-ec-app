<template>
  <v-btn color="primary" elevation="2" @click="event">{{ label }}</v-btn>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    label: String,
    event: Function,
  },
});
</script>

<style scoped>
</style>