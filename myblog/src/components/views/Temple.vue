<template>
<div>
  <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
  <el-radio-button :label="false">展开</el-radio-button>
  <el-radio-button :label="true">收起</el-radio-button>
</el-radio-group>
<div class="middle">
  <el-menu default-active="1-4-1" class="el-menu-vertical-demo left-float" @select="select" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
  <el-submenu index="1">
    <template slot="title">
      <!-- <i class="el-icon-location"></i> -->
      <div>布局</div>
      <span slot="title">导航一</span>
    </template>
    <el-menu-item-group>
      <span slot="title">分组一</span>
      <el-menu-item index="1-1">FlexBox 布局</el-menu-item>
      <el-menu-item index="1-2">选项2</el-menu-item>
    </el-menu-item-group>
  </el-submenu>
  <el-menu-item index="2" disabled>
    <!-- <i class="el-icon-menu"></i> -->
    <div>导航二</div>
    <span slot="title">导航二</span>
  </el-menu-item>
  <el-menu-item index="3" disabled>
    <!-- <i class="el-icon-document"></i> -->
    <div>导航三</div>
    <span slot="title">导航三</span>
  </el-menu-item>
  <el-menu-item index="4" disabled>
    <!-- <i class="el-icon-setting"></i> -->
    <div>导航四</div>
    <span slot="title">导航四</span>
  </el-menu-item>
</el-menu>
<div class="content">
  <FlexBox v-if="showIndex === '1-1'" />
</div>
</div>
</div>
</template>

<script>
import FlexBox from '@/components/views/FlexBox'

export default {
  data () {
    return {
      isCollapse: true,
      showIndex: -1
    }
  },
  methods: {
    alertg () {
      alert('ddddd')
    },
    select (params) {
      this.showIndex = params
      alert(JSON.stringify(params))
    },
    handleOpen (key, keyPath) {
      alert(key, keyPath)
    },
    handleClose (key, keyPath) {
      alert(key, keyPath)
    }
  },
  components: {
    FlexBox
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
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .middle {
    display: flex;
    flex-direction: row;
    height: 700px;
    background-color: #122cbd;
  }
  .left-float {
    height: 100%;
  }
  .content {
    display: inline-block;
    background-color: #FFcccc;
    align-content: stretch;
    widows: 200px;
    flex: 1;
  }
</style>
