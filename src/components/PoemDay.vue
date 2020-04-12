<template>
  <div>
    <div v-if="poems.length > 0">
      <PoemItem
        class="poem-container"
        v-for="poem in getSearchPoems"
        :poem="poem"
        :key="poem.title"
        :style="poem.linecount > 50 ? {columnCount: 3} : {columnCount: 1}"
      ></PoemItem>
    </div>
    <div v-else>Loading..</div>
  </div>
</template>

<script>
import PoemItem from "./PoemItem";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "PoemDay",
  components: {
    PoemItem
  },
  data() {
    return {
      poems: []
    };
  },
  beforeMount() {
    this.loadPoems(this.getDay);
    this.poems = this.getSearchPoems;
  },
  methods: mapActions(["loadPoems"]),
  computed: mapGetters(["getDay", "getSearchPoems"])
};
</script>

<style scoped>
div {
  margin: 50px;
}
.poem-container {
  background-color: #eee;
  padding: 50px;
  column-gap: 0;
  margin-top: 80px;
}
</style>