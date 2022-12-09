import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import routes from './router';
import $ from "jquery";

Vue.config.productionTip = false;
Vue.use(VueRouter);

const router = new VueRouter(
    {
        routes,
        scrollBehavior() {
            $('html,body').stop().animate({
                scrollTop: 0
            }, 'slow', 'swing');
        }
    }
);

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
