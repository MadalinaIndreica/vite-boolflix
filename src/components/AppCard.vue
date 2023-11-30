<script>
export default {
    props:{
        movieObject: Object,
    }
}
</script>

<template>
    <div class="card">
        <h2>{{ movieObject.title }}</h2>
        <h3>{{ movieObject.original_title }}</h3>
        <p>{{ movieObject.original_lenguage }}</p>
        <p>{{ movieObject.vote_average }}</p>
    </div>
</template>

<style lang="scss" scoped>

</style>