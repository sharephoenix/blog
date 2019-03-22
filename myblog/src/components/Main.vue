
<template>
  <div class="body">
    <el-tabs class="body" type="border-card">
    <el-tab-pane label="javascript">
      <JavaScript></JavaScript>
    </el-tab-pane>
    <el-tab-pane label="Swift">Swift</el-tab-pane>
    <el-tab-pane label="Objective-C">Objective-C</el-tab-pane>
    <el-tab-pane label="Kotlin">Kotlin</el-tab-pane>
    <el-tab-pane label="Java">Java</el-tab-pane>
    <el-tab-pane label="Golang">Golang</el-tab-pane>
    <el-tab-pane label="Weex">Weex</el-tab-pane>
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
