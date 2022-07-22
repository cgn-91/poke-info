<template>
  <q-layout view="lHh Lpr lFf">
    <div class="mainHeader">
      <q-header elevated>
        <q-toolbar>
            <q-btn href="#/home" outline rounded color="black" label="Home" icon="home" class="mainBTN"/>
            <q-btn href="#/generations" outline rounded color="black" label="Generations" icon="spa" class="mainBTN"/>
        </q-toolbar>
      </q-header>
    </div>
    <div class="mainHeaderMobile">
      <div>
        <q-header elevated>
          <q-toolbar>
            <q-btn
              flat
              dense
              round
              icon="menu"
              aria-label="Menu"
              @click="toggleLeftDrawer"
              class="mainBTN"
            />

            <q-toolbar-title class="mainToolbar">
              Menu
            </q-toolbar-title>
          </q-toolbar>
        </q-header>
      </div>
      <q-drawer
        v-model="leftDrawerOpen"
        show-if-above
        bordered
        class="bg-primary-1"
      >
        <q-list>
          <q-item-label
            header
            class="text-grey-8"
          >
            Essential Links
          </q-item-label>

          <Menu
            v-for="link in menu"
            :key="link.title"
            v-bind="link"
          />
        </q-list>
      </q-drawer>
    </div>
    <q-page class="main">
      <router-view />
    </q-page>
  </q-layout>
</template>

<script>
import Menu from 'components/Menu.vue'

const linksList = [
  {
    title: 'Home',
    caption: 'Home',
    icon: 'home',
    link: '#/home'
  },
  {
    title: 'Generations',
    caption: 'Generations',
    icon: 'spa',
    link: '#/Generations'
  }
]

import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
    Menu
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      menu: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
