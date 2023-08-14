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
    <h1>globalSecondsPassed: {{this.timerStore.count}}</h1>
  </div>
</template>

<script>
import { mapStores } from "pinia";
import HelloWorld from "./components/HelloWorld.vue";
import useTimerStore from "./store/timer";

export default {
  name: "App",
  data: () => ({
    time: 0,
  }),
  components: {
    HelloWorld,
  },
  computed: {
  // 用id + store 组成的字符串来访问store
    ...mapStores(useTimerStore),
  },
  mounted() {
    console.log(
      "🚀 ~ file: App.vue:24 ~ useTimer:",
      this.$parent.$options?.superProps
    );
    // this.useTimerStore.setTime(this.$parent.$options?.superProps.timer.secondsPassed)
    // console.log(this.timerStore.setTime(this.$parent?.$options?.superProps?.timer?.secondsPassed || 0))
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
