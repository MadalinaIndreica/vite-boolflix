<script>
import { store } from "../store";
export default {
  emits: ["btn-Search"],
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="container d-flex h-100 justify-content-between align-items-center">
    
    <div class="navbar-nav d-flex flex-row align-items-baseline gap-4">
      <h1>BOOLFLIX</h1>
        <a class="nav-link active text-white" aria-current="page" href="#">Home</a>
        <a class="nav-link" href="#">tv Series</a>
        <a class="nav-link" href="#">Films</a>
        <a class="nav-link disabled" aria-disabled="true">Aggiunti di recente</a>
      </div>
    <div class="d-flex">
    <input type="search" class="form-control" placeholder="inizia la ricerca" v-model.trim="store.searchText" />
    <button @click="$emit('btn-Search')" class="btn btn-danger">Cerca</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
h1{
  color: red;
}
</style>