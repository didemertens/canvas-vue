<template>
<div>
    <div v-if="poems">
      <h2>Your saved poems</h2>
      <PoemItem
          class="poem-container"
          v-for="poem in poems"
          :poem="poem"
          :key="poem.title"
          :style="poem.linecount > 50 ? {columnCount: 3} : {columnCount: 1}"
        ></PoemItem>
    </div>
    <div v-else>
      <h2>Click on the heart next to a poem to save it!</h2>
    </div>
  </div>
</template>

<script>
import PoemItem from "./PoemItem";

export default {
  name: 'SavedPoems',
  components: { PoemItem },
  data() {
    return {
      poems: []
    }
  },
  beforeMount() {
    this.poems = JSON.parse(localStorage.getItem('savedPoems'))
  }
}
</script>

<style scoped>
div {
  margin: 50px;
}
.poem-container {
  background-color: #eee;
  padding: 50px;
  column-gap: 2;
  margin: 80px 0;
}
</style>