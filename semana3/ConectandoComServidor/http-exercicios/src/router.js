import Vue from 'vue';
import Router from 'vue-router';

import FormCreate from './components/FormCreate.vue';
import Exibir from './components/Exibir.vue';

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        component: FormCreate
    }, {
        path: '/exibir',
        component: Exibir
    }]
})