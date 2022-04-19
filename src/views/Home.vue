<template>
    <!-- component -->
    <div class="h-full bg-black flex p-36">

        <div class="grid grid-cols-6 gap-4">
            <movie-card v-for="item in state.popularMovies.results" :key="item.id" 
                :imageUrl="item.poster_path"
                :movieTitle="item.title"
                :relaseDate="item.release_date"
            />
        </div>

    </div>
</template>

<script setup>
import { onMounted, reactive } from 'vue';
import services from '../services/index'
import movieCard from '../components/movieCard.vue'

onMounted(() => {
    getMovies()
})

const state = reactive({
    popularMovies: [],
})

const getMovies = async () => {
    const { data } = await services.movies.getPopularMovie()

    state.popularMovies = data
    console.log(data);
}
</script>

<style>
</style>
