import createApp from '../src/app';

const app = createApp();

window.onload = function () {
    app.$mount('#app');
}