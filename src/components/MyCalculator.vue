<template>
  <div class="myCalculator">

    <!--  display interface  -->
    <div class="displayInterface">
      <p>{{currentEntry}}</p><br>
      <p>{{entryStack}}</p><br>
      <p>current entry is an operator: {{currentIsOperator}}</p>
    </div>
    
    <!--  button interface  -->
    <div class="buttonInterface">
      <button value="+" @click="operatorButton">+</button>
      <button value="*" @click="operatorButton">*</button>
      <button value="-" @click="operatorButton">-</button>
      <button value="/" @click="operatorButton">/</button>
      <button value="7" @click="digitButton">7</button>
      <button value="8" @click="digitButton">8</button>
      <button value="9" @click="digitButton">9</button>
      <button value="clear" @click="allClear">AC</button>
      <button value="4" @click="digitButton">4</button>
      <button value="5" @click="digitButton">5</button>
      <button value="6" @click="digitButton">6</button>
      <button value="delete" @click="clearEntry">CE</button>
      <button value="1" @click="digitButton">1</button>
      <button value="3" @click="digitButton">3</button>
      <button value="2" @click="digitButton">2</button>
      <button class="button enter" @click="enterButton">=</button>
      <button value="0"
              class="button zero" @click="digitButton">0</button>
      <button value=".">.</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyCalculator',
  data() {
    return {
      currentEntry: '',
      entryStack: [],
      currentIsOperator: false
    }
  },
  methods: {
    digitButton(e) {
      if (this.currentIsOperator) {
        this.pushCurrentEntry()
        this.currentEntry = e.target.value
        this.currentIsOperator = false
      } else {
        this.currentEntry += e.target.value
      }
    },
    allClear() {
      this.currentEntry = ''
      this.entryStack = []
    },
    clearEntry() {
      this.currentEntry = ''
    },
    operatorButton(e) {
      if (this.currentIsOperator) {
        this.currentEntry = e.target.value
      } else {
        this.pushCurrentEntry()
        this.calculateValue()
        this.pushCurrentEntry()
        this.currentEntry = e.target.value
        this.currentIsOperator = true 
      }
    },
    calculateValue() {
      if (this.entryStack.length < 3) {
        return
      }
      const B = parseFloat(this.entryStack.pop())
      const OPER = this.entryStack.pop()
      const A = parseFloat(this.entryStack.pop())
      switch(OPER) {
        case '+' :
          this.currentEntry = A+B
          break;
        case '*' :
          this.currentEntry = A*B
          break;
        case '/' :
          this.currentEntry = A/B
          break;
        case '-' :
          this.currentEntry = A-B
          break;
      }
    },
    enterButton() {
      this.pushCurrentEntry()
      this.calculateValue()
    },
    pushCurrentEntry() {
      if (this.currentEntry) {
        this.entryStack.push(this.currentEntry)
        this.clearEntry()
      }
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

  .displayInterface p{
    display: inline-block;
    height: 3rem;
  }
</style>
  