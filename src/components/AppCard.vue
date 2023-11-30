<script>
export default {
    props: {
        movieObject: Object,
        imgUrl: String
    },
    data() {
        return {
            flags: ["en", "it", "fr", "sp"],
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
    <div class="card">
        <img class="poster" :src="`${imgUrl}${movieObject.poster_path}`" alt="">
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
    border: 1px solid white;
    border-radius: 10px;
    position: relative;


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
        color: black;
        display: none;

    }

    &:hover {
        .flag-img{
            opacity: 100%;
            filter: none;

        }
       

        img {

            opacity: 25%;
            color: black;
            filter: brightness(100%);
        }

        .text-content {
            display: block;
        }
    }
}</style>