<template>
  <div class="search-container">
    <h1>Search for a poem</h1>
    <div class="ui input">
      <input
        @input="getInput"
        type="text"
        placeholder="Type here..."
      />
      <div @click="searchPoems" class="ui animated button">
        <div class="visible content">Search</div>
        <div class="hidden content">
          <i class="search icon"></i>
        </div>
      </div>
    </div>
    <dropdown
      :options="searchOptions"
      :selected="defaultSearchFilter"
      v-on:updateOption="filterSearch"
    ></dropdown>
    <div v-if="getSearchPoems.length > 0 && searching">
      <PoemItem
        class="poem-container"
        v-for="poem in getSearchPoems"
        :poem="poem"
        :key="poem.title"
        :style="poem.linecount > 50 ? {columnCount: 3} : {columnCount: 1}"
      ></PoemItem>
    </div>
    <div v-else-if="searching">
      <h2>No results</h2>
    </div>
  </div>
</template>

<script>
import PoemItem from "./PoemItem";
import { mapActions, mapGetters } from "vuex";
import dropdown from "vue-dropdowns";

export default {
  name: "SearchBar",
  components: { PoemItem, dropdown },
  data() {
    return {
      poems: [],
      searchTerm: null,
      searchFilter: "title",
      searchOptions: [{ name: "Title" }, { name: "Author" }, { name: "Lines" }],
      defaultSearchFilter: {
        name: "Title"
      }
    };
  },
  created() {
    this.poems = [],
    this.searching = false
  },
  methods: {
    filterSearch(payload) {
      this.searchFilter = payload.name.toLowerCase();
    },
    searchPoems() {
      if (this.searchTerm) {
        this.searching = true
        this.loadPoems({ search: this.searchTerm, filter: this.searchFilter });
        this.poems = this.getSearchPoems;
      }
    },
    getInput(event) {
      this.searchTerm = event.target.value;
    },
    ...mapActions(["loadPoems"])
  },
  computed: mapGetters(["getSearchPoems", "getLoading"])
};
</script>

<style scoped>
.search-container {
  margin-top: 15vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 60vh;
  width: 100vw;
}
h1 {
  margin-bottom: 50px;
}
.input {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100vw;
}
.ui.input > input {
  max-width: 40%;
  margin-right: 20px;
}
.poem-container {
  background-color: #eee;
  padding: 50px;
  column-gap: 2;
  margin: 80px 50px;
}
.ui.animated.button {
  background-color: #eb8034;
  color: white;
}
h2 {
  margin-top: 10vh;
}
</style>