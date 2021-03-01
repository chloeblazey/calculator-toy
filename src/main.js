import Vue from 'vue'
import App from './App.vue'
import lzCalc from 'vue-lazy-calc'

Vue.config.productionTip = false
Vue.use(lzCalc)

new Vue({
  render: h => h(App),
}).$mount('#app')
