<template>
  <div class="counter">{{ count }}</div>
</template>

<script>
export default {
  name: "CounterComponent",
  props: {
    count: Number
  }
};
</script>

<style scoped>
counter {
  font-size: 40px;
  color: black;
  margin-top: 16px;
  margin-bottom: 16px;
}
</style>
