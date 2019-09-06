<template>
  <div>
    <ItemPannel />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ItemPannel from '@/components/ItemPannel.vue'

@Component({
  components: {
    ItemPannel
  }
})
export default class Pannels extends Vue {}
</script>

<style scoped lang="scss"></style>
