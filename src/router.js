import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/Home.vue';
Vue.use(VueRouter);

export default function () {
    return new VueRouter({
        mode: 'history',
        routes: [
            {
                path: '/',
                name: 'home',
                component: Home
            },
            {
                path: '/about',
                name: 'about',
                component: () => import('./components/About.vue')
            },
            {
                path: '*',
                redirect: '/'
            }
        ]
    })
}
