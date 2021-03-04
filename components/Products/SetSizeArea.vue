<template>
  <div class="sizearea-bg">
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left" style="width: 50%">サイズ</th>
            <th class="text-left" style="width: 30%">数量</th>
            <th class=""></th>
            <th class=""></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, i) in internalSizes" :key="i">
            <td>{{ item.size }}</td>
            <td>{{ item.quantity }}</td>
            <td>
              <v-btn icon @click="editSize(i, item.size, item.quantity)">
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
            </td>
            <td>
              <v-btn icon @click="deleteSize(i)">
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <div class="d-flex">
      <TextInput
        :fullWidth="false"
        label="サイズ"
        :required="true"
        :rows="1"
        type="text"
        v-model="size"
      />
      <TextInput
        :fullWidth="false"
        label="数量"
        :required="true"
        :rows="1"
        type="number"
        v-model="quantity"
      />
      <div class="align-self-center">
        <v-btn icon @click="addSize()">
          <v-icon>mdi-check-circle</v-icon>
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { TextInput } from "@/components/UIkit/index";
import { Size } from "@/types/product";

export default Vue.extend({
  components: {
    TextInput,
  },
  props: {
    sizes: Array,
  },
  data() {
    return {
      internalSizes: this.sizes as Array<Size>,
      index: 0,
      size: "",
      quantity: 0,
    };
  },
  methods: {
    addSize(): void {
      if (this.size !== "" && this.quantity >= 0) {
        if (this.internalSizes.length === this.index) {
          this.internalSizes.push({ size: this.size, quantity: this.quantity });
          this.$emit("input", this.internalSizes);
          this.index = this.index + 1;
          this.size = "";
          this.quantity = 0;
        } else {
          this.$set(this.internalSizes, this.index, {
            size: this.size,
            quantity: this.quantity,
          });
          this.$emit("input", this.internalSizes);
          this.index = this.internalSizes.length;
          this.size = "";
          this.quantity = 0;
        }
      }
    },
    editSize(index: number, size: string, quantity: number): void {
      this.index = index;
      this.size = size;
      this.quantity = quantity;
    },
    deleteSize(index: number) {
      this.internalSizes.splice(index, 1);
      this.$emit("input", this.internalSizes);
      this.index = this.index - 1;
    },
  },
  watch: {
    sizes: {
      immediate: true,
      handler(sizes) {
        this.internalSizes = sizes;
        this.index = sizes.length;
      },
    },
  },
});
</script>

<style scoped>
.sizearea-bg {
  box-shadow: 1px 2px 4px gray;
}
.icon-cell {
  width: 48px;
  height: 48px;
}
.check-circle {
  text-align: right;
}
</style>