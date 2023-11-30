<script>
import axios from "axios";
import { store } from "./store.js";
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue"
export default {
  data() {
    return {
      store,
    };
  },
  components: { AppHeader, AppMain },


  methods: {
    handleSearch() {
      console.log("Cerca");
      // CHIAMATA MOVIES
      axios
        .get(this.store.apiUrl + this.store.searchMovie, {
          params: {
            query: this.store.searchText,
            api_key: this.store.apiKey,
          },
        })
        .then((resp) => {
          console.log(resp);
          this.store.movies = resp.data.results;
        });
      // CHIAMATA  SERIE TV
      axios
        .get(this.store.apiUrl + this.store.searchTv, {
          params: {
            query: this.store.searchText,
            api_key: this.store.apiKey,
          },
        })
        .then((resp) => {
          console.log(resp);
          this.store.tvSeries = resp.data.results;
        });

    },


  },
}


</script>

<template>
  <AppHeader @btn-Search="handleSearch" />,
  <AppMain/>
</template>

<style lang="scss">
@use "./style/general.scss";
@import "@fortawesome/fontawesome-free/css/all.css";
</style>
