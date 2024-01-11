<script>
import AppHeader from './components/header.vue';
import AppMain from './components/main/main.vue';

export default{
    components:{
        AppHeader,
        AppMain,
    },
}

</script>

<template>

    <AppHeader />
    <AppMain />

</template>

<style>
@import './style/general.scss';

</style>
