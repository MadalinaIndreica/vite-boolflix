<script>
export default {
    props: {
        movieObject: Object,
        imgUrl: String
    },
    data() {
        return {
            flags: ["en", "it", "fr", "es"],
        }

    },
    methods: {
        getImagePath(img) {

            return new URL(`../assets/images/${img}.png`, import.meta.url).href;
        },
        getRoundedVote() {
            return Math.ceil(this.movieObject.vote_average / 2)
        }

    }
}
</script>

<template>
    <div class="card h-100">
        <img v-if="movieObject.poster_path" class="poster" :src="`${imgUrl}${movieObject.poster_path}`" alt="">
        <!-- <img v-else src="../assets/ima" -->
        <div v-else class="no-img">
            <p>nessuna immagine trovata</p>
        </div>
        <div class="text-content">
            <h3>{{ movieObject.title ? movieObject.title : movieObject.name }}</h3>
            <h4>{{ movieObject.original_title ? movieObject.original_title : movieObject.original_name }}</h4>
            <img class="flag-img" v-if="flags.includes(movieObject.original_language)"
                :src="getImagePath(movieObject.original_language)" />
            <p v-else>{{ movieObject.original_language }}</p>
            <p><i v-for="i in 5" class="fa-star " :class="i <= getRoundedVote() ? 'fa-solid' : 'fa-regular'"></i></p>
            <p class="overview">Overview: {{ movieObject.overview }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card {
    width: 100%;
    border-radius: 10px;
    position: relative;
    overflow-x: hidden;
    background-color: black;

    .no-img {
        width: 300px;
        text-align: center;
        padding-top: 150px;
    }



    .flag-img {
        width: 30px;

    }

    img {
        width: 300px;

    }


    .text-content {
        position: absolute;
        left: 20px;
        top: 60px;
        color: white;
        display: none;


    }

    &:hover {
        .flag-img {
            opacity: 100%;

        }

        img {
            opacity: 0;
        }
        

        .text-content {
            display: block;
            overflow-y: hidden;
        }
    }
}</style>