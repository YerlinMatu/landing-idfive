import Vue from 'vue'
import App from './App.vue'
import Navbar from './Navbar.vue'
import SectionOne from './SectionOne.vue'
import FirstContent from './FirstContent.vue'
import SecondContent from './SecondContent.vue'
import Resources from './Resources.vue'

Vue.component('navbar', Navbar);
Vue.component('SectionOne', SectionOne);
Vue.component('FirstContent', FirstContent);
Vue.component('SecondContent', SecondContent);
Vue.component('Resources', Resources);

new Vue({
  el: '#app',
  render: h => h(App)
})
