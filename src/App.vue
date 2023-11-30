<script>
import axios from "axios";
import { store } from "./store.js";
import AppHeader from "./components/AppHeader.vue";
export default {
  data() {
    return {
      store,
    };
  },
  components: { AppHeader },


  methods: {
    handleSearch() {
      console.log("Cerca");
      axios
        .get(this.store.apiUrl + this.store.searchMovie, {
          params: {
            query: this.store.searchText,
            api_key: this.store.apiKey,
          },
        })
        .then((resp) => {
          this.store.movies = resp.data.results;
        });
    },


  },
}


</script>

<template>
  <AppHeader @btnSearch="handleSearch" />
</template>

<style lang="scss">
@use "./style/general.scss";
@import "@fortawesome/fontawesome-free/css/all.css";
</style>
