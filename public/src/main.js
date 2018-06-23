import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import Home from './components/Home'
import Orders from './components/Orders'
import Products from './components/Products'
import checkbox from './components/common/Checkbox'
import dropdownList from './components/common/DropdownList'
window.axios = require('axios');

Vue.use(Vuex);
Vue.use(VueRouter);

Vue.component('checkbox', checkbox);
Vue.component('dropdownList', dropdownList);

const store = new Vuex.Store({
    state: {
        loading : true,
        showPeriodList : false,
        showFilterList : false,
    },
    getters: {
    },
    mutations: {
        hideDropdownList(state) {
            state.showPeriodList = false;
            state.showFilterList = false;
        }
    }
})

const router = new VueRouter({
    routes : [
        { path : '/Home' , component : Home , name : 'Home' },
        { path: '/Orders', component: Orders, name: 'Orders' },
        { path: '/Products', component: Products, name: 'Products' },
    ]
})


new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
