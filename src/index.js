import '@js/main.js';
import '@css/main.css';
import '@scss/main.scss';
import _ from 'lodash';

import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';

createApp(App).use(store).use(router).mount('#app');

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
            navigator.serviceWorker.register('/service-worker.js').then(registration => {
            console.log('SW registered: ', registration);
        }).catch(registrationError => {
            console.log('SW registration failed: ', registrationError);
        });
    });
}
