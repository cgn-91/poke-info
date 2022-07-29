<template>
    <div class="pokeLeft">
      <div class="sphere"></div>
      <div class="circulo" style="background: red;"></div>
      <div class="circulo" style="background: yellow"></div>
      <div class="circulo" style="background: green"></div>
      <div>
        <div class="row">
          <img :src="this.img" class="imgPokedex"/>
        </div>
        <q-btn outline rounded color="black" label="Back" class="btnPokedex" @click="back()"/>
        <q-btn outline rounded color="black" label="Next" id="next" class="btnPokedex" @click="next()"/>
      </div>
    </div>
    <div class="pokeRight">
      <Pokemon :id="this.id" :name="this.name" :type="this.type" :hp="this.hp" :attack="this.attack" :defense="this.defense" :special_attack="this.special_attack" :special_defense="this.special_defense" :speed="this.speed" :weight="this.weight"></Pokemon>
    </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import Pokemon from 'components/Pokemon'
import Petitions from 'src/api/resources/Petitions'

export default defineComponent({
  name: 'Pokedex',
  props: {
    generation: {
      type: String,
      required: true
    }
  },
  components: {
    Pokemon
  },
  watch: {
  },

  setup () {
    return {
      pokemon: ref({}),
      id: ref(1),
      totalPokemons: ref(null),
      name: ref(''),
      type: ref(''),
      hp: ref(0),
      attack: ref(0),
      defense: ref(0),
      special_attack: ref(0),
      special_defense: ref(0),
      speed: ref(0),
      weight: ref(0),
      img: ref('')
    }
  },

  methods: {
    back () {
      if (this.id <= 151 && this.id >= 2) {
        this.id = this.id - 1
        this.getPokemon(this.id)
      }
    },
    next () {
      if (this.id > 0 && this.id < 151) {
        this.id = this.id + 1
        this.getPokemon(this.id)
      }
    },
    // async getTotalPokemons () {
    //   const generation = await Petitions.getGeneration(1)
    //   this.totalPokemons = generation.pokemon_species.length
    // },
    async getPokemon (id) {
      const pokemon = await Petitions.getPokemon(id)
      this.name = pokemon.name
      this.type = this.getTypes(pokemon)
      this.hp = pokemon.stats[0].base_stat
      this.attack = pokemon.stats[1].base_stat
      this.defense = pokemon.stats[2].base_stat
      this.special_attack = pokemon.stats[3].base_stat
      this.special_defense = pokemon.stats[4].base_stat
      this.speed = pokemon.stats[5].base_stat
      this.weight = pokemon.weight
      console.log(this.generation)
      this.img = this.pokemon.sprites.versions[this.generation].yellow.front_transparent
    },
    getTypes (pokemon) {
      this.types = ''
      let types = ''
      let index = 1
      for (const type of pokemon.types) {
        const length = pokemon.types.length
        if (index !== length) {
          types = types + type.type.name + ', '
        } else {
          types = types + type.type.name
        }

        index++
      }

      return types
    }
  },
  async created () {
    this.pokemon = await Petitions.getPokemon(1)
    this.name = this.pokemon.name
    this.type = this.getTypes(this.pokemon)
    this.hp = this.pokemon.stats[0].base_stat
    this.attack = this.pokemon.stats[1].base_stat
    this.defense = this.pokemon.stats[2].base_stat
    this.special_attack = this.pokemon.stats[3].base_stat
    this.special_defense = this.pokemon.stats[4].base_stat
    this.speed = this.pokemon.stats[5].base_stat
    this.weight = this.pokemon.weight
    this.img = this.pokemon.sprites.versions[this.generation].yellow.front_transparent
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
