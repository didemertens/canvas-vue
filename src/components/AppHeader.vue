<template>
  <div class="ui tabular menu">
    <router-link to="/" class="item" :class="{ active: isHomeActive }" @click.native="switchTabs('home')">
      Home
    </router-link>
      <router-link to="/poemofday" class="ui item" :class="{ active: isDayActive }" @click.native="switchTabs('day')">
        Poems about {{ getDay }}
      </router-link>
      <a class="ui item">
        Random poem
      </a>
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
      isDayActive: false
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
      } else {
        this.isHomeActive = false;
        this.isDayActive = true;
      }
    } 
  },
  computed: mapGetters(['getDay'])
}
</script>