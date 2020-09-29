import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
// import app2 from './components/Form/CreateForm.vue';

import router from './router';

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
