<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col>
          <v-text-field
            v-if="rows === 1"
            v-model="internalValue"
            :label="label"
            :required="required"
            :type="type"
          ></v-text-field>
          <v-textarea
            v-else
            v-model="internalValue"
            :label="label"
            :type="type"
            :rows="rows"
          ></v-textarea>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    fullWidth: Boolean,
    label: String,
    required: Boolean,
    rows: Number,
    value: String,
    type: String,
  },
  data() {
    return {
      internalValue: "",
    };
  },
  updated: function () {
    this.$emit("input", this.internalValue);
  },
  // watch: {
  //   value: {
  //     immediate: true,
  //     handler(value) {
  //       this.internalValue = value;
  //     },
  //   },
  // },
});
</script>