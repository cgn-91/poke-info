<template>
    <ul>
        <li> Game index: {{ id }}</li>
        <li> Name: {{ name }}</li>
        <li> Type: {{ type }}</li>
        <li> HP: {{ hp }}</li>
        <li> Attack: {{ attack }}</li>
        <li> Defense: {{ defense }}</li>
        <li> Special attack: {{ special_attack }}</li>
        <li> Special defense: {{ special_defense }}</li>
        <li> Speed: {{ speed }}</li>
        <li> Weight: {{ weight }}</li>
    </ul>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Pokemon',

  props: {
    id: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    hp: {
      type: Number,
      required: true
    },

    attack: {
      type: Number,
      required: true
    },

    defense: {
      type: Number,
      required: true
    },
    special_attack: {
      type: Number,
      required: true
    },
    special_defense: {
      type: Number,
      required: true
    },
    speed: {
      type: Number,
      required: true
    },
    weight: {
      type: Number,
      required: true
    }
  },

  watch: {
  },

  setup () {
    return {
    }
  },

  methods: {

  }
})
</script>

<style lang="sass">

</style>
