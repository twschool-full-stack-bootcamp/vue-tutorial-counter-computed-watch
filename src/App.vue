<template>
  <div id="app">
    <button v-on:click="count += 1">+</button>
    <CounterComponent v-bind:count="count"></CounterComponent>
    <button v-on:click="count -= 1">-</button>
  </div>
</template>

<script>
import CounterComponent from "./components/CounterComponent.vue";

export default {
  name: "app",
  data() {
    return {
      count: 0
    };
  },
  components: {
    CounterComponent
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>
