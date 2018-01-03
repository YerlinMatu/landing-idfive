import Vue from 'vue'
import App from './App.vue'
import Navbar from './Navbar.vue'
import SectionOne from './SectionOne.vue'

Vue.component('navbar', Navbar);
Vue.component('SectionOne', SectionOne);
new Vue({
  el: '#app',
  render: h => h(App)
})
