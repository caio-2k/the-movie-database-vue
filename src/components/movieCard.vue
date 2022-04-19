<template>
    <div class="flex flex-col gap-1">
        <!-- Image -->
        <a href="#" class="bg-brand-main">
            <img :src="imageUrl ? 'https://image.tmdb.org/t/p/original' + imageUrl : fallBackImage"
                class="hover:translate-x-1 hover:-translate-y-1 delay-50 duration-100" />
        </a>

        <!-- Movie Title -->
        <p class="text-gray-200 font-semibold"> {{ movieTitle }} </p>

        <!-- Viewers -->
        <!-- <p class="text-sm text-gray-400 -mt-1"> {{ relaseDate }} </p> -->

        <!-- Genre Tags -->
        <div class="flex flex-row flex-wrap gap-2">
            <p class="w-full text-xs text-gray-400 font-bold subpixel-antialiased">Genres:</p>
            <a v-for="item in state.movieGenres" :key="item.id" href="#"
                class="hover:bg-gray-600 text-gray-300 text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full">
                {{ item.name }} </a>
        </div>
    </div>
</template>

<script setup>
import { onMounted, reactive } from 'vue';
import fallBackImage from '../assets/images/fallback-image.png'
import service from '../services'

const props = defineProps({
    imageUrl: {
        type: String,

    },
    movieTitle: {
        type: String,

    },
    genre: {
        type: [Array, Object],

    },
    popularity: {
        type: [String, Number],

    },
    relaseDate: {
        type: String,

    },
    voteAverage: {
        type: [Number, String],

    }
})

onMounted(() => {
    getGenres()
})

const state = reactive({
    movieGenres: [],
})

const getGenres = async () => {
    const { data } = await service.movies.getMovieGenres()
    state.movieGenres = data.genres.filter((item1) => props.genre.some((item2) => item1.id == item2))
}
</script>

<style lang="scss" scoped>
</style>