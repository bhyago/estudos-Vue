import '@babel/polyfill'
import Vue from 'vue'
import App from './App.vue'
import Exibir from './components/Exibir.vue'
import router from './router'

import './plugins/bootstrap-vue'
import './plugins/axios'
// import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = false

new Vue({
  router,

  render: h => h(App)
}).$mount('#app')
