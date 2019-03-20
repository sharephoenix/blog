<template>
  <div class="body" @onclick="testfuncion">

  </div>
</template>

<script>
export default {
  name: 'WeexBasic',
  data () {
    return {
    }
  },
  methods: {
    testfuncion: () => {
      console.log('testfunciontestfunciontestfuncion')
    }
  }
}
</script>

<style scoped>
.body {
  background-color: #f2f2f2;
}
</style>
