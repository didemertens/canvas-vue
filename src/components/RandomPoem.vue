<template>
  <div class="main-container">
    <div class="header">
      <h2>Random poem about '{{ randomWord }}'</h2>
      <button @click="handleReset" class="ui button">Again</button>
    </div>
    <div v-if="!getLoading">
        <PoemItem
          class="poem-container"
          :poem="getSearchPoems"
          :key="getSearchPoems.title"
          :style="getSearchPoems.linecount > 50 ? {columnCount: 3} : {columnCount: 1}"
        ></PoemItem>
    </div>
    <div v-else class="ui active centered inline loader"></div>
  </div>
</template>

<script>
import randomWords from 'random-words'
import PoemItem from "./PoemItem"
import { mapActions, mapGetters } from "vuex"

export default {
  name: 'RandomPoem',
  components: { PoemItem},
  data() {
    return {
      randomWord: randomWords(),
      reset: false
    }
  },
  beforeMount() {
    this.loadRandomPoem({search: this.randomWord, filter: 'lines'})
  },
  methods: {
    handleReset() {
      this.changeLoading()
      this.randomWord = randomWords()
      this.loadRandomPoem({search: this.randomWord, filter: 'lines'})
    },
    ...mapActions(["loadRandomPoem", "changeLoading"])
    },
  computed: mapGetters(["getSearchPoems", "getLoading"])
}
</script>

<style scoped>
.main-container {
  margin: 80px 100px;
  display: flex;
  flex-direction: column;
}
.header {
  display: flex;
  justify-content: space-between;
}
.poem-container {
  background-color: #eee;
  padding: 50px;
  column-gap: 2;
  margin: 80px 0;
}
.ui.button {
  background-color: #eb8034;
  color: white;
}
.ui.button:hover {
  background-color: #eee;
  color: #eb8034;
}
</style>