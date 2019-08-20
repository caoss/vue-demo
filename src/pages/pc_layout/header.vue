<template>
  <div class="header_app">
    {{title.header}}
    <router-link class="nav" :to="{ name: 'pc2' }">pc</router-link>
    <router-link class="nav" style="margin-left:30px" :to="{ name: 'pc' }">pc</router-link>
  </div>
</template>

<script>
export default {
  name: "header",
  data() {
    return {
        name:'header'
    };
  },
  props:['title'],
  beforeCreate(){

  },
  created(){

  },
  mounted(){

  },

};
</script>

<style scoped lang="stylus">
.header_app {
  padding: 5px;
  background: blue;

  .nav {
    padding: 0 20px;
    background: red;
    margin-right: 20px;
  }
}
</style>