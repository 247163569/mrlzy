<template>
  <div class="project-container">
    <navheader></navheader>
  </div>
</template>

<script>
import navHeader from './header/header'
export default {
  name: 'App',
  data() {
    return {}
  },
  components: {
    navheader: navHeader
  }
}
</script>

<!-- 添加 "scoped" 属性,样式只在当前组件生效 -->
<style scoped>
  .project-container{padding-top: .9rem;}
</style>
