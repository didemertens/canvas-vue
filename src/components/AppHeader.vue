<template>
  <div class="ui tabular menu">
    <router-link to="/" class="item active">
      Home
    </router-link>
      <router-link to="/poemofday" class="ui item">
        Poems about {{ getDay }}
      </router-link>
      <a class="ui item">
        Random poem
      </a>
      <a class="ui item">
        My favourite poems
      </a>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'AppHeader',
  beforeMount() {
    this.setDay()
  },
  methods: mapActions(['setDay']),
  computed: mapGetters(['getDay'])
}
</script>