<script>
import { store } from "../store"
import AppCard from "./AppCard.vue"
export default {
    data(){
        return{
            store,
        }
    },
    components: {AppCard},
}
</script>

<template>
    <section>
        <div v-for="movie in store.movies">
            <appCard :movieObject="movie"/>
        </div>
    </section>

</template>

<style lang="scss" scoped>

</style>