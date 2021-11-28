<template>
    <div class="main">
        <div
            id="nav"
            class="nav">
            <router-link to="/">
                Home
            </router-link> |
            <router-link to="/about">
                About
            </router-link>
        </div>
        <router-view />
    </div>
</template>

<script>
import AwesomeComponent from '@/components/AwesomeComponent.vue';
export default {
    name: 'App',
    components: {
        AwesomeComponent,
    },
};
</script>

<style lang="scss">
.nav {
    text-align: center;
}
</style>
