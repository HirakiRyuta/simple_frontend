<template>
  <div>
    <TopsCard />
    <BottomsCard />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import TopsCard from '@/components/TopsCard.vue'
import BottomsCard from '@/components/BottomsCard.vue'

@Component({
  components: {
    TopsCard,
    BottomsCard
  }
})
export default class ItemPannel extends Vue {
  isInCart: boolean = false
}
</script>

<style scoped lang="scss"></style>
