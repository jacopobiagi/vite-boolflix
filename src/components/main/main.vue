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
    },
}

</script>
<template>
    <main>
        <div class="container w-100 d-flex flex-wrap">
            <h2 v-if="store.movieList.length == 0">Inserisci film</h2>
            <div v-else v-for="element in store.movieList">
                <Card 
                :title = 'element.title'
                :img = 'element.poster_path'
                :desc = 'element.overview'/>
            </div>
            
        </div>
    </main>

</template>
<style>
    main{
        width: 100vw;
    }
</style>