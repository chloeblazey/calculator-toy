<template>
  <div class="myCalculator">

    <!--  display interface  -->
    <div>{{log}}</div>

    <!--  button interface  -->
    <div class="buttonInterface">
      <button value="add">+</button>
      <button value="multiply">*</button>
      <button value="subtract">-</button>
      <button value="divide">/</button>
      <button value="7" @click="handleDigitButton">7</button>
      <button value="8" @click="handleDigitButton">8</button>
      <button value="9" @click="handleDigitButton">9</button>
      <button value="clear">AC</button>
      <button value="4" @click="handleDigitButton">4</button>
      <button value="5" @click="handleDigitButton">5</button>
      <button value="6" @click="handleDigitButton">6</button>
      <button value="delete">CE</button>
      <button value="1" @click="handleDigitButton">1</button>
      <button value="2" @click="handleDigitButton">2</button>
      <button value="3" @click="handleDigitButton">3</button>
      <button class="button enter">=</button>
      <button value="0"
              class="button zero" @click="handleDigitButton">0</button>
      <button value=".">.</button>
    </div>
  </div>
</template>

<script>
// Main calculator controller

export default {
  name: 'MyCalculator',
  calculated: {
    displayLog(e) {
      return this.log += e.target.value
    },
    currentEntry(e){
      return this.currentEntry += e.target.value
    },
    handleDigitButton(e) {
      return this.log = `${this.log}, ${e.event.value}`
    }
  },
  data() {
    return {
      log: '',
      currentEntry: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
  