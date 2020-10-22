import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    events: [
      { onClick: 'alert(`você clicou no botão!!!`)' }
    ]
  }
})