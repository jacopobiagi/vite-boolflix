import { reactive } from 'vue';

export const store = reactive({
    movieList:[],
    searchBar:"",
    apiUrl:`https://api.themoviedb.org/3/search/movie?api_key=f52803056a1c0722cda15196ab670203&`,
})