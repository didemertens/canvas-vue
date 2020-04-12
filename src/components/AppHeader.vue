<template>
  <div class="ui tabular menu">
    <a href="/" class="item active">
      Home
    </a>
      <a class="ui item">
        Poems about {{ getDay }}
      </a>
      <a class="ui item">
        Poems by ...
      </a>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      todayDay: new Date().getDay()
    }
  },
  computed: {
    getDay() {
      const dayNumbers = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
      return dayNumbers[this.todayDay]
    }
  }
}
</script>