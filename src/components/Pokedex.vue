<template>
  <div class="pokedex">
    <div class="circulo">

    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CardPokemon',

  props: {
    name: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    hp: {
      type: Int32Array,
      required: true
    },

    attack: {
      type: Int32Array,
      required: true
    },

    defense: {
      type: Int32Array,
      required: true
    },
    special_attack: {
      type: Int32Array,
      required: true
    },
    special_defense: {
      type: Int32Array,
      required: true
    },
    speed: {
      type: Int32Array,
      required: true
    },
    weight: {
      type: Int32Array,
      required: true
    }
  },

  watch: {
  },

  setup () {
    return {}
  },

  methods: {
  }
})
</script>

<style lang="sass">

</style>
