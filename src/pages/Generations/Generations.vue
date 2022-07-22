<template>
    <q-item-section class="section">
        <div class="contenedor">
            <div class="row generations">
                <ul v-for="(item, index) in this.generations" :key="index" class="listGenerations">
                    <q-btn outline rounded color="black" :label="item.name" :id="index" class="btnGenerations"/>
                </ul>
            </div>
        </div>
        <div class="contenedor generationsContent">
            <div class="row">
                <div class="generationsRight">
                    Abajo
                </div>
            </div>
        </div>
    </q-item-section>
</template>

<script>
import { defineComponent, ref } from 'vue'
import PetitionsResource from 'src/api/resources/Petitions'

export default defineComponent({
  name: 'Generations',

  setup () {
    return {
      generations: ref([]),
      totalGenerations: ref(null)
    }
  },

  methods: {
    async getGenerations () {
      this.totalGenerations = await PetitionsResource.getGenerations()
      this.generations = this.totalGenerations.results
    }
  },
  created () {
    this.getGenerations()
  }
})
</script>
