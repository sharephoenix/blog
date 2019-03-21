<template>
  <div class="body">
    <div>{{event}}</div>
    <div>{{log}}</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      event: ''
    }
  },
  methods: {
    setStorage ({key, value}) {

    }
  }
}
</script>

<style scoped>
.body {
  background-color: white;
}
</style>
