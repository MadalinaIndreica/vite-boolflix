<script>
import { store } from "../store";
export default {
    emits:["btnSearch"],
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
     <div class="d-flex w-25 px-4">
    <input
      type="search"
      class="form-control"
      placeholder="inizia la ricerca"
      v-model.trim="store.searchText"
    />
    <button @click="$emit('btnSearch')" class="btn btn-primary">Cerca</button>
  </div>

</template>

<style lang="scss" scoped>


</style>