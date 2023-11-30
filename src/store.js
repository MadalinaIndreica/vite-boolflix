import { reactive } from "vue";

export const store = reactive({
  movies: [],
  tvSeries: [],
  apiUrl: "https://api.themoviedb.org/3/search",
  apiKey: "c7f4ff45e6d6228ced413c8e6959ea3f",
  searchMovie: '/movie',
  searchTv:'/tv',
  searchText: ""
});
