<template>
  <div class="ui tabular menu">
    <a href="/" class="item active">
      Home
    </a>
      <a class="ui item">
        Poems about {{ getDay }}
      </a>
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