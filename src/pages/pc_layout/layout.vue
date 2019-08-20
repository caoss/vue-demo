<template>
  <div class="app-wrapper">
    <header2  :title="title" ></header2>
    1211323233113{{title}}
    <div class="main-container"  @click="doSomething" >
      <main2></main2>
    </div>
    <footer2></footer2>
  </div>
</template>
<script>
import header2 from "./header";
import footer2 from "./footer";
import main2 from "./main2";
export default {
  components: {
      header2,
      footer2,
      main2
  },
   data() {
    return {
        title:{
            header:'headerrrrrr'
        }
    };
  },
  methods:{
      doSomething:function(){
          this.title = {
            header:'headerrrrrr222'
        };
      }
  }
};
</script>
<style scoped lang="stylus">
.app-wrapper {
  position: absolute;
  width: 100%;
  height: 100%;

  .main-container {
  }
}
</style>
