<template>
  <div>
    <h3>{{ poem.title }}</h3>
    <h5>{{ poem.author }}</h5>
    <p v-for="(line, index) in poem.lines" :key="index">{{ line }}</p>
  </div>
</template>

<script>
export default {
  name: "PoemItem",
  props: ["poem"]
};
</script>