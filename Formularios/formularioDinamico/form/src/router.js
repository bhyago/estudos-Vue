import Vue from 'vue';
import Router from 'vue-router';

import InputText from './components/Inputs/InputText.vue';
import RadioButtons from './components/Inputs/InputRadio';

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
        path: '/InputText',
        component: InputText
    }, {
        path: '/radio',
        component: RadioButtons
    }]
})