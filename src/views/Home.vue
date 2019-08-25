<template>
  <div class="home">
    <p>{{ greetText }}</p>
    <p>挨拶した回数：{{ count }}回</p>
    <p v-if="isRegulars">いつもありがとうございます</p>
    <p>
      <MyButton :greet="greetText" @clicked="onMyButtonClicked"></MyButton>
    </p>
    <p>
      <ResetButton initialValue="Hello" v-model="greetText" />
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Watch, Vue } from 'vue-property-decorator'
import MyButton from '@/components/MyButton.vue'
import ResetButton from '@/components/ResetButton.vue'

@Component({
  components: {
    MyButton,
    ResetButton
  }
})
export default class Home extends Vue {
  private greetTextList: string[] = ['power', 'long', 'super', 'highper', 'rec']
  private count: number = 0
  public greetText: string = 'hahaha'

  public get isRegulars(): boolean {
    return this.count >= 5
  }

  @Watch('count')
  public countChanged() {
    if (this.count === 5) {
      alert('常連になりました。')
    }
  }

  public onMyButtonClicked(count: number) {
    this.count = count
    const random: number = Math.floor(Math.random() * this.greetTextList.length)
    this.greetText = this.greetTextList[random]
  }
}
</script>
