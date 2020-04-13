<template>
  <div>
    Random poem about '{{ randomWord }}'
    <div v-if="!this.getLoading">
      {{ this.getSearchPoems }}
    </div>
    <div v-else class="ui active centered inline loader"></div>
  </div>
</template>

<script>
import randomWords from 'random-words'
import { mapActions, mapGetters } from "vuex"

export default {
  name: 'RandomPoem',
  data() {
    return {
      randomWord: randomWords()
    }
  },
  beforeMount() {
    this.loadRandomPoem({search: this.randomWord, filter: 'lines'})
  },
  methods: mapActions(["loadRandomPoem"]),
  computed: mapGetters(["getSearchPoems", "getLoading"])
}
</script>

<style scoped>

</style>