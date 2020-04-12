<template>
  <div v-if="poems">
    <h1>Poems about {{ getDay }}</h1>
    <PoemItem v-for="poem in getSearchPoems" :poem="poem" :key="poem.title"></PoemItem>
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