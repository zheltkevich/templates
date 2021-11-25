<template>
  <div class="home">
    <AwesomeComponent msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import AwesomeComponent from '@/components/AwesomeComponent.vue';

export default {
    name: 'Home',
    components: {
        AwesomeComponent,
    },
};
</script>
