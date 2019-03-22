<template>
  <div class="body">
    <div>Weex 组件 测试</div>
    <el-tabs type="border-card">
      <el-tab-pane @click="testfuncion" label="基础组件">
        <weex-basic></weex-basic>
        </el-tab-pane>
      <el-tab-pane label="Native组件">native组件</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>

import WeexBasic from '@/components/WeexBasic'

export default {
  data () {
    return {
      name: 'this is my name'
    }
  },
  methods: {
    testfuncion () {
      console.log('test')
    }
  },
  components: {
    'weex-basic': {
      render: h => h(WeexBasic)
    }
  }
}
</script>

<style scoped>
 .body {
   background-color: #f2f2f2;
 }
 .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  body > .el-container {
    margin-bottom: 40px;
  }
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
