<template>
  <div>
    <div v-if="!getLoading">
      <PoemItem
        class="poem-container"
        v-for="poem in getSearchPoems"
        :poem="poem"
        :key="poem.title"
        :style="poem.linecount > 50 ? {columnCount: 3} : {columnCount: 1}"
      ></PoemItem>
    </div>
    <div v-else class="ui active centered inline loader"></div>
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
      searchFilter: 'lines',
      poems: [],
      loading: true
    };
  },
  created() {
    this.loadPoems({search: this.getDay, filter: this.searchFilter})
    this.poems = this.getSearchPoems
    this.loading = this.getLoading
  },
  methods: mapActions(["loadPoems"]),
  computed: mapGetters(["getDay", "getSearchPoems", "getLoading"])
};
</script>

<style scoped>
div {
  margin: 50px;
}
.poem-container {
  background-color: #eee;
  padding: 50px;
  column-gap: 2;
  margin-top: 80px;
}
</style>