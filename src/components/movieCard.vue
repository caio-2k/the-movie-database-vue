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
        <p class="text-sm text-gray-400 -mt-1"> {{ relaseDate }} </p>

        <!-- Genre Tags -->
        <!-- <div class="flex flex-row flex-wrap gap-2">
            <a v-for="item in genre" :key="item.id" href="#"
                class="hover:bg-gray-600 text-gray-300 text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full">
                Shooter </a>
        </div> -->
    </div>
</template>

<script setup>
import fallBackImage from '../assets/images/fallback-image.png'

defineProps({
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
</script>

<style lang="scss" scoped>
</style>