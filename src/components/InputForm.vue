<template>
  <input :type="type" :name="name" :value="value" :placeholder="placeholder" />
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator'

@Component
export default class InputForm extends Vue {
  @Prop() public value!: string

  @Prop() public type!: string

  @Prop() public name!: string

  @Prop() public placeholder?: string

  @Emit()
  public input(value: number) {}

  /**
   * `type=number`では一部記号などが入力できるため、
   * それらの入力があった場合に、入力前の状態に戻す。
   */
  // fixInvalidInput(event, prev) {
  //   if (event.inputType === 'deleteContentBackward') {
  //     return;
  //   }
  //   if (event.target.value === '') {
  //     event.target.value = prev;
  //   } else {
  //     // '.'入力対策
  //     // TODO: 他に何かいい方法がないか検討
  //     const v = event.target.value;
  //     event.target.value = '';
  //     event.target.value = v;
  //   }
  // }
}
</script>

<style scoped lang="scss"></style>
