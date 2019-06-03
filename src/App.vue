<template>
  <div id="app">
    <button v-on:click="increase()">+</button>
    <div>
      <input placeholder="0" v-model="count">
    </div>
    <CounterComponent v-bind:count="formatCount"></CounterComponent>
    <button v-on:click="decrease()">-</button>
  </div>
</template>

<script>
import CounterComponent from "./components/CounterComponent.vue";
import { parse } from "@babel/parser";

export default {
  name: "app",
  data() {
    return {
      count: 0
    };
  },
  computed: {
    formatCount: function() {
      return parseInt(this.count);
    }
  },
  components: {
    CounterComponent
  },
  methods: {
    increase: function() {
      return (this.count = parseInt(this.count) + 1);
    },
    decrease: function() {
      return (this.count = parseInt(this.count) - 1);
    }
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
