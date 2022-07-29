<template>
    <q-item-section class="section">
        <div class="contenedor">
            <div class="row generations">
                <ul v-for="(item, index) in this.generations" :key="index" class="listGenerations">
                    <q-btn outline rounded color="black" :label="item.name" :id="index" class="btnGenerations" @click="doClick(index)"/>
                </ul>
            </div>
        </div>
        <div class="row generationsContent">
            <Pokedex :generation="this.name"></Pokedex>
        </div>
    </q-item-section>
</template>

<script>
import { defineComponent, ref } from 'vue'
import Pokedex from 'components/Pokedex'
import Petitions from 'src/api/resources/Petitions'

export default defineComponent({
  name: 'Generations',

  components: {
    Pokedex
  },

  setup () {
    return {
      generations: ref([]),
      totalGenerations: ref(null),
      generation: ref({}),
      name: ref('')
    }
  },

  methods: {
    async getGenerations () {
      this.totalGenerations = await Petitions.getGenerations()
      this.generations = this.totalGenerations.results
    },
    async doClick (id) {
      this.generation = await Petitions.getGeneration(id + 1)
      this.name = this.generation.name
    }
  },
  created () {
    this.getGenerations()
  }
})
</script>

<style lang="sass">
    .sphere
        display: inline-block
        width: 60px
        height: 60px
        background-color: #23ADF5
        background: radial-gradient(at top left, white 20%, #23ADF5)
        -ms-border-radius: 150px
        -moz-border-radius: 150px
        -webkit-border-radius: 150px
        -o-border-radius: 150px
        border-radius: 150px
        position: relative
        top: 19px
        left: 20px

    .circulo
        display: inline-block
        width: 20px
        height: 20px
        -ms-border-radius: 50%
        -moz-border-radius: 50%
        -webkit-border-radius: 50%
        -o-border-radius: 50%
        border-radius: 50%
        margin-left: 5px
        top: -30px
        left: 10px
        position: relative

</style>
