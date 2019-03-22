<template>
  <div class="body">
    <div>{{log}}</div>
    <div class="content">
      <div class="content-div">
        stop
      </div>
      <div class="content-div">
        pause
      </div>
      <div class="content-div">
        start
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      log: 'AudioNatives'
    }
  }
}
</script>

<style scoped>
.body {
  background-color: #ffffff;
}
.content {
  height: 900px;
  background-color: bisque;
}
.content-div {
  display: inline-block;
  height: 44px;
  background-color: #f2f2f2;
  color: #000;
  border: 1px solid gray;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  line-height: 44px;
  border-radius: 3px;
}

.content-div:active {
  background-color: aqua;
}
</style>
