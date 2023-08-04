<template>
  <div id="app">
    <div>
      <img alt="Vue logo" src="./assets/logo.png" />
    </div>
    <router-link to="/foo"
      ><el-button type="primary">Go to Foo</el-button></router-link
    >

    <router-link to="/bar"
      ><el-button type="primary">Go to Bar</el-button></router-link
    >

    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
