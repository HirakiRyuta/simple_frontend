<template>
  <div>
    <form @submit.prevent="getItems">
      <inputForm placeholder="height" v-model="height" type="number" />
      <inputForm placeholder="weight" v-model="weight" type="number" />
      <input type="submit" value="submit" />
    </form>
    <div>
      <Pannels />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Watch, Vue } from 'vue-property-decorator'
import InputForm from '@/components/InputForm.vue'
import Pannels from '@/components/Pannels.vue'

@Component({
  components: {
    InputForm,
    Pannels
  }
})
export default class Home extends Vue {
  //v-modelは@inputでfunc()がstateに値をセットするのを一括してやってくれる
  height: number = 0
  weight: number = 0

  private getItems(): void {
    const height = this.height
    const weight = this.weight
    this.$store.dispatch('getItemsAction', { height: height, weight: weight })
    console.log(this.$store.getters.items)
  }
}
</script>
