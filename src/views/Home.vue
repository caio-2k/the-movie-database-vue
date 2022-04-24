<template>
    <section class="m-10">
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <movie-card v-for="item in state.popularMovies.results" :key="item.id" :imageUrl="item.poster_path"
                :movieTitle="item.title" :genre="item.genre_ids" />
        </div>
    </section>
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
    console.log(state.popularMovies.results);
}
</script>

<style>
</style>
