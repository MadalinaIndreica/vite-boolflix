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
    <h1>BOOLFLIX</h1>
    <div class="d-flex">
    <input type="search" class="form-control" placeholder="inizia la ricerca" v-model.trim="store.searchText" />
    <button @click="$emit('btn-Search')" class="btn btn-primary">Cerca</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
h1{
  color: red;
}
</style>