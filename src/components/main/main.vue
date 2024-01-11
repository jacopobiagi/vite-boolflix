<script>
import {store} from '../../store';
import Card from './card/cardFilm.vue';

export default{
    components:{
        Card,
    },
    data(){
        return{
            store,
        }
    }
}

</script>
<template>
    <main>
        <div class="container">
            <div v-for="element in store.movieList">
                <Card 
                :title = 'element.title'
                :img = 'element.backdrop_path'
                :desc = 'element.overview'/>
            </div>
        </div>
    </main>

</template>
<style>

</style>