<template>
    <div id="app">
        <!-- <img alt="Vue logo" src="./assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App" /> -->
        <router-view/>
    </div>
</template>

<script>
    // import HelloWorld from './components/HelloWorld.vue'
    
    export default {
        name: 'app',
        // components: {
        //     HelloWorld
        // }
    }
</script>

<style>
  @import './style/index.css';
  @import './style/custom.css';
</style>