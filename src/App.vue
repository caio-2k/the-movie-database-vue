<template>
  <section class="m-5">
    <h1 class="text-3xl text-brand-main">Movies:</h1>
    <h2 v-for="item in state.popularMovies.results" :key="item.id">{{ item.title }}</h2>
    <!-- <h3>Page: </h3> -->
    </section>
</template>

<script setup>
import { onMounted, reactive } from 'vue';
import services from './services/index'

onMounted(() => {
  getMovies()
})

const state = reactive({
  popularMovies: [],
})

const getMovies = async () => {
  const { data } = await services.movies.getPopularMovie({
    api_key: '7b92ce4b29c2f82ac344afe3aece56f1',
  })

  state.popularMovies = data
  console.log(data);
}
</script>

<style>
</style>
