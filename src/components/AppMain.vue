<script>
import { store } from "../store"
import AppCard from "./AppCard.vue"
export default {
    data() {
        return {
            store,
        }
    },
    components: { AppCard },
}
</script>

<template>
    <div class="container">
        <h2>Movie</h2>
        <div class="row align-items-center justify-content-around gap-5 flex-wrap">
            <div class="col d-flex">
                <div v-for="movie in store.movies">
                    <appCard :movieObject="movie" :imgUrl="store.baseImgUrl" />
                </div>
            </div>
        </div>
        <h2>Tv series</h2>
        <div class="row g-2  align-items-center justify-content-around flex-wrap">
            <div class="col d-flex ">
                <div v-for="serie in store.tvSeries">
                    <appCard :movieObject="serie" :imgUrl="store.baseImgUrl" />
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
h2{
    color: white;
}
.col {
    width: 342px;
    overflow-y: auto;
}
</style>