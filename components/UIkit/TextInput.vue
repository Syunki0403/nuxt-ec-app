<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col>
          <v-text-field
            v-model="value"
            :label="label"
            :required="required"
            :type="type"
          ></v-text-field>
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
    multiline: Boolean,
    required: Boolean,
    rows: Number,
    value: String,
    type: String,
  },
  updated: function () {
    this.$emit("input", this.value);
  },
});
</script>

<style scoped>
</style>