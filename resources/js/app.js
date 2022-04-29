/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

// window.Vue = require('vue').default;
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
// window.Fire = new Vue();

import routes from './routes';

const router = createRouter({
    history: createWebHistory(), // <-- this is a new property and it is mandatory!
    routes, // short for `routes: routes`
    linkActiveClass: 'active'
})

import Swal from 'sweetalert2';
window.Swal = Swal;
const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})

window.toast = Toast;
// end sweetalert

import Gate from "./Gate";
window.gate = new Gate(window.user);
// Vue.prototype.$gate = new Gate(window.user);


import moment from 'moment';
window.moment = moment;

import VueCtkDateTimePicker from "vue-ctk-date-time-picker";

const app = createApp({
    // options object
    data() {
        return {
            message: 'hi there',
            search: ''
        }
    },

    methods: {
        searchit: _.debounce(() => {
            Fire.$emit('searching');
        }, 1000)
    },
})
app.use(router)
app.component('sidebar', require('./components/backend/Sidebar.vue').default)
app.component('not-found', require('./components/NotFound.vue').default)
app.component('common-form', require('./components/backend/CommonMessageForm.vue').default);
app.component("VueCtkDateTimePicker", VueCtkDateTimePicker)
app.mount('#app');
