<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col>
          <v-select v-model="internalValue" :items="items" item-value="id" item-text="name" :label="label"></v-select>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    value: String,
    label: String,
    items: Array,
  },
  data() {
    return {
      internalValue: "",
    };
  },
  updated: function () {
    this.$emit("input", this.internalValue);
  },
  watch: {
    value: {
      immediate: true,
      handler(value) {
        this.internalValue = value;
      },
    },
  },
});
</script>