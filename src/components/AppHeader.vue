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
      <a class="ui item">
        Your favourites
      </a>
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
      isRandomActive: false
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
      } else if (tab==='day') {
        this.isHomeActive = false;
        this.isDayActive = true;
        this.isRandomActive = false;
      }else if (tab==='random') {
        this.isHomeActive = false;
        this.isDayActive = false;
        this.isRandomActive = true;
      }
    } 
  },
  computed: mapGetters(['getDay'])
}
</script>