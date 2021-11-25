import '@js/index.js';
import '@css/main.css';
import '@scss/main.scss';
import _ from 'lodash';

import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';

createApp(App).use(store).use(router).mount('#app');
