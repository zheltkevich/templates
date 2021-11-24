import '@js/main.js';
import '@css/main.css';
import '@scss/main.scss';
import _ from 'lodash';


import Vue from 'vue';
import App from '@/App';

// import store from './store';

Vue.config.productionTip =false;

new Vue({
  el: '#app',
  render: h =>h(App),
});
