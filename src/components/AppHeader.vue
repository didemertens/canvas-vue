<template>
  <div class="ui tabular menu">
    <router-link to="/" class="item" :class="{ active: isHomeActive }" @click.native="switchTabs('home')">
      Home
    </router-link>
      <router-link to="/poemsoftheday" class="ui item" :class="{ active: isDayActive }" @click.native="switchTabs('day')">
        Poems about {{ getDay }}
      </router-link>
      <router-link to="/randompoem" class="ui item" :class="{ active: isRandomActive }" @click.native="switchTabs('random')">
        Random poem
      </router-link>
      <router-link to="/favourites" class="ui item" :class="{ active: isFavouritesActive }" @click.native="switchTabs('favourites')">
        Your favourites
      </router-link>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'AppHeader',
  data() {
    return {
      isHomeActive: true,
      isDayActive: false,
      isRandomActive: false,
      isFavouritesActive: false
    }
  },
  beforeMount() {
    this.setDay()
  },
  methods: {
    ...mapActions(['setDay']),
    switchTabs(tab) {
      if (tab === 'home') {
        this.isHomeActive = true;
        this.isDayActive = false;
        this.isRandomActive = false;
        this.isFavouritesActive = false;
      } else if (tab==='day') {
        this.isHomeActive = false;
        this.isDayActive = true;
        this.isRandomActive = false;
        this.isFavouritesActive = false;
      } else if (tab==='random') {
        this.isHomeActive = false;
        this.isDayActive = false;
        this.isRandomActive = true;
        this.isFavouritesActive = false;
      } else {
        this.isHomeActive = false;
        this.isDayActive = false;
        this.isRandomActive = false;
        this.isFavouritesActive = true;
      }
    } 
  },
  computed: mapGetters(['getDay', 'getSavedPoems'])
}
</script>