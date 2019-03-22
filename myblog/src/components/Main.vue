
<template>
  <div class="body">
    <el-tabs class="body" type="border-card">
    <el-tab-pane label="javascript">
      <JavaScript></JavaScript>
    </el-tab-pane>
    <el-tab-pane label="Swift">角色管理d</el-tab-pane>
    <el-tab-pane label="Objective-C">定时任务补偿</el-tab-pane>
    <el-tab-pane label="Kotlin">定时任务补偿</el-tab-pane>
    <el-tab-pane label="Java">定时任务补偿</el-tab-pane>
    <el-tab-pane label="Golang">定时任务补偿</el-tab-pane>
    <el-tab-pane label="Weex">定时任务补偿</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import JavaScript from '@/components/views/JavaScript'

export default {
  data () {
    return {
      isCollapse: true
    }
  },
  methods: {
    handleOpen () {
    },
    handleClose () {
    }
  },
  components: {
    JavaScript
  }
}
</script>

<style lang="scss">
  .body {
    user-select: none;
    height: 900px;
    color: black;
  }
</style>
