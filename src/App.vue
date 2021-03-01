<template>
  <div id="app">
    <my-calculator></my-calculator>
  </div>
</template>

<script>
import MyCalculator from './components/MyCalculator.vue'

export default {
  name: 'App',
  components: {
    MyCalculator
  }
}
</script>

<style>
  #app {
    margin: none;
  }
</style>
