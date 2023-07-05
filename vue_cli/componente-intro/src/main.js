import Vue from 'vue'
import App from './App.vue'
import Contador from './Contador.vue'

Vue.config.productionTip = false

//Registrar o componente de modo global de modo global
Vue.component('app-contador', Contador)

new Vue({
  render: h => h(App),
}).$mount('#app')
