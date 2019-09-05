<template>
  <div>
    <inputForm placeholder="height" name="height" type="number" />
    <inputForm placeholder="weight" name="weight" type="number" />
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
export default class Home extends Vue {}
</script>
