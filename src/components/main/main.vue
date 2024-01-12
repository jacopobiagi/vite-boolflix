<script>
import { store } from '../../store';
import Card from './card/cardFilm.vue';

export default {
    components: {
        Card,
    },
    data() {
        return {
            store,
        }
    },
}

</script>
<template>
    <main>
        <div class="container w-100 d-flex flex-wrap justify-content-center">
            <h2 v-if="store.movieList.length == 0">Inserisci film</h2>
            <div v-else v-for="element in store.movieList" class="container-card">
                <Card :title='element.title ? element.title : element.name' :img='element.poster_path'
                    :desc='element.overview' :lang='element.original_language' :vote="element.vote_average" />
            </div>
        </div>
    </main>
</template>
<style lang="scss" scoped>
main {
    h2 {
        padding-top: 10px;
    }

    .container-card {
        padding: 5px;
    }
}
</style>