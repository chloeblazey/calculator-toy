<template>
  <div class="myCalculator">

    <!--  display interface  -->
    <h1>{{lastEntry}}</h1>
    <h2>{{entryLog}}</h2>
    <!--  button interface  -->
    <div class="buttonInterface">
      <button value="+" @click="handleButton">+</button>
      <button value="*" @click="handleButton">*</button>
      <button value="-" @click="handleButton">-</button>
      <button value="/" @click="handleButton">/</button>
      <button value="7" @click="handleButton">7</button>
      <button value="8" @click="handleButton">8</button>
      <button value="9" @click="handleButton">9</button>
      <button value="clear" @click="allClear">AC</button>
      <button value="4" @click="handleButton">4</button>
      <button value="5" @click="handleButton">5</button>
      <button value="6" @click="handleButton">6</button>
      <button value="delete" @click="clearEntry">CE</button>
      <button value="1" @click="handleButton">1</button>
      <button value="3" @click="handleButton">3</button>
      <button value="2" @click="handleButton">2</button>
      <button class="button enter">=</button>
      <button value="0"
              class="button zero" @click="handleButton">0</button>
      <button value=".">.</button>
    </div>
  </div>
</template>

<script>
// Main calculator controller

export default {
  name: 'MyCalculator',
  data() {
    return {
      lastEntry: '',
      entryLog: ''
    }
  },
  methods: {
    handleButton(e) {
      this.lastEntry = e.target.value
      this.entryLog += e.target.value
    },
    allClear() {
      this.entryLog = ''
      this.lastEntry = ''
    },
    clearEntry() {
      this.lastEntry = ''
    }
  }
}
</script>

<style scoped>

  .myCalculator {
    width: 50%
  }

  .buttonInterface {
    display: grid;
    grid-template-columns: repeat(4, minmax(7rem, auto));
    grid-template-rows: repeat(5, minmax(7rem, auto));
    margin: auto;
    width: 100%;
  }
</style>
  