import '@babel/polyfill'
import Vue from 'vue'
import App from './App.vue'
import Dados from './dados.vue'

import './plugins/bootstrap-vue'
import './plugins/axios'

Vue.config.productionTip = false

new Vue({
  render: h => h(Dados),
  
}).$mount('#app')
