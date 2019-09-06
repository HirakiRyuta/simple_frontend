<template>
  <div>
    <ItemPannel />
    <MyButton greet="hello" />
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'
import ItemPannel from '@/components/ItemPannel.vue'
import MyButton from '@/components/MyButton.vue'

@Component({
  components: {
    ItemPannel,
    MyButton
  }
})
export default class Pannels extends Vue {}
</script>

<style scoped lang="scss"></style>
