<template>
  <input :type="type" :name="name" :value="value" :placeholder="placeholder" @input="input" />
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator'

@Component
export default class InputForm extends Vue {
  prev: string = ''

  @Prop() public value!: string

  @Prop() public type!: string

  @Prop() public name!: string

  @Prop() public placeholder?: string

  public input(event: object) {
    this.fixInvalidInput(event, this.prev)
  }

  /**
   * `type=number`では一部記号などが入力できるため、
   * それらの入力があった場合に、入力前の状態に戻す。
   */
  fixInvalidInput(event: any, prev: string) {
    if (event.inputType === 'deleteContentBackward') {
      return
    }
    // 'e' '+' '-'などの入力値は '' と判定される
    if (event.target.value === '') {
      event.target.value = prev
    } else {
      // '.'入力対策
      // TODO: 他に何かいい方法がないか検討
      const v = event.target.value
      event.target.value = ''
      event.target.value = v
    }
    this.prev = event.target.value
  }
}
</script>

<style scoped lang="scss"></style>
