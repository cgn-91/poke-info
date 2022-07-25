<template>
    <q-item-section class="section">
        <div class="contenedor">
            <div class="row generations">
                <ul v-for="(item, index) in this.generations" :key="index" class="listGenerations">
                    <q-btn outline rounded color="black" :label="item.name" :id="index" class="btnGenerations" @click="doClick(index)"/>
                </ul>
            </div>
        </div>
        <div class="contenedor generationsContent">
            <div class="row">
                <div class="pokeLeft">
                        <div class="sphere"></div>
                        <div class="circulo" style="background: red;"></div>
                        <div class="circulo" style="background: yellow"></div>
                        <div class="circulo" style="background: green"></div>
                </div>
                <div class="pokeRight">
                    hola
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
    },
    doClick (id) {
      document.getElementById(id).click()
      console.log(id)
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
