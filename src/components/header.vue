<script>

import {store} from '../store';

export default{
    data(){
        return {
            store,
        }
    }
}

</script>
<template>

    <header class="d-flex justify-content-between align-items-center">
        <div class="logo">
            <h1 class="text-danger">BOOLFLIX</h1>
        </div>
        <nav>
            <input type="text" v-model="store.searchBar" @input="$emit('search')">
        </nav>
    </header>
</template>

<style lang="scss" scoped>

    header{
        height: 80px;
        padding: 0 20px;
        background-color: rgb(0, 0, 0);
    }
</style>