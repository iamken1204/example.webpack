
import Vue from 'vue'
import App from './App.vue'

let vm = new Vue({
  which: './src/vue/main.js',
  el: '#vueuse',
  render: h => h(App)
})

console.log(vm.$options.which)
