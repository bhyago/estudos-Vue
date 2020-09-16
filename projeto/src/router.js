import Vue from 'vue';
import Router from 'vue-router';

import SignIn from './components/SignIn';
// import Home from './components/Home';

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        { path: '/', component: SignIn }
    ]
})