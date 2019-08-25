<template>
  <button @click="onClick">
    <slot>遊ぼう</slot>
  </button>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from "vue-property-decorator";

@Component
export default class MyButton extends Vue {
  private count: number = 0;

  @Prop()
  public greet?: string;

  @Emit()
  public clicked(count: number) {}

  public onClick() {
    this.count++;
    this.clicked(this.count);
  }
}
</script>
