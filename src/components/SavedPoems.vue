<template>
  <div>
    Saved poems
    <PoemItem
        class="poem-container"
        v-for="poem in getSavedPoems"
        :poem="poem"
        :key="poem.title"
        :style="poem.linecount > 50 ? {columnCount: 3} : {columnCount: 1}"
      ></PoemItem>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import PoemItem from "./PoemItem";

export default {
  name: 'SavedPoems',
  components: { PoemItem },
  data() {
    return {
      savedPoems: []
    }
  },
  computed: mapGetters(['getSavedPoems'])
}
</script>

<style scoped>
.poem-container {
  background-color: #eee;
  padding: 50px;
  column-gap: 2;
  margin: 80px 50px;
}
</style>