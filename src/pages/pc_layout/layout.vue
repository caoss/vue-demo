<template>
  <div class="app-wrapper">
    <header2></header2>
    <div class="main-container">
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
