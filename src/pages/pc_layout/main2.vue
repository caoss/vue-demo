<template>
  <div class="main-app2">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  export default {
    name: 'main2',
    data() {
      return {
      }
    }
  }
</script>

<style scoped lang="stylus">
  .main-app2
    padding 50px
    background yellow
    width 100%
</style>