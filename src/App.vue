<script>
import {store} from './store'
import AppHeader from './components/header.vue';
import AppMain from './components/main/main.vue';
import axios from 'axios';

export default{
    components:{
        AppHeader,
        AppMain,
    },
    data(){
        return{
            store,
        }
    },
    methods:{
        modUrl(){
        
        },
        getMyFilms(){
            let myQuery = `query=${store.searchBar}`;
            let myUrl = store.apiUrl;
            myUrl += myQuery;

            axios
                .get(myUrl)
                .then(res => {
                    store.movieList = res.data.results;
                    console.log(store.movieList);
                })

            console.log(myUrl);
            myUrl = store.apiUrl;
            
        }
    },
    created(){
        this.getMyFilms()
    }
}

</script>

<template>

    <AppHeader @search="getMyFilms" />
    <AppMain />

</template>

<style>
@import './style/general.scss';

</style>
