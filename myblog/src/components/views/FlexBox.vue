<template>
  <div class="body">
    <div class="item-cls">aaa</div>
    <div class="item-cls">bbb</div>
    <div class="item-cls">ccc</div>
    <div class="item-cls special">llll</div>
    <div class="item-cls">bbb</div>
    <div class="item-cls">ccc</div>
    <div class="item-cls">bbb</div>
    <div class="item-cls">ccc</div>
    <div class="item-cls">ccc</div>
    <div class="item-cls">bbb</div>
    <div class="item-cls">ccc</div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
  }
}
</script>

<style lang='scss' scoped>
$background: #FFcccc;
  .body {
    user-select: none;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    // align-content: flex-start;
    // justify-items: center;
    background-color: $background;
    height: 300px;
    overflow: scroll;
    flex-wrap: wrap;
  }
  .item-cls {
    display: inline-block;
    width: 55px;
    // height: 55px;
    text-align: center;
    background-color: gray;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 10px;
    margin-bottom: 0px;
    text-align: center;
    line-height: 55px;
  }
  .special {
    align-self: flex-end;
  }
</style>
