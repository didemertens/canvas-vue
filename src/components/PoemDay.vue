<template>
  <div v-if="poems">
    <PoemItem class="poem-container" v-for="poem in getSearchPoems" :poem="poem" :key="poem.title"></PoemItem>
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
.poem-container {
  column-count: 2;
  column-gap: 0;
  margin-top: 80px;
}
</style>