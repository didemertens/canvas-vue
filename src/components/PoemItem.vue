<template>
  <div>
    <div class="header">
      <h3>{{ poem.title }}</h3>
      <i @click="clickPoem" class="heart icon"></i>
    </div>
    <h5>{{ poem.author }}</h5>
    <p v-for="(line, index) in poem.lines" :key="index">{{ line }}</p>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "PoemItem",
  props: ["poem"],
  methods: {
    clickPoem() {
      this.savePoem(this.poem)
      this.$toasted.show('Poem saved to Your favourites!', { position: 'top-center', duration: 2000, type: 'success'})
    },
    ...mapActions(['savePoem'])
  }
};
</script>

<style scoped>
.header {
  display: flex;
}
i {
  margin-left: 15px;
  color: #eb8034;
  font-size: 1.5rem;
  cursor: pointer;
}
i:hover {
  color: #eb5f34;
}
</style>