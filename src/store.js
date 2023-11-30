import { reactive } from "vue";

export const store = reactive({
  movies: [],
  tvSeries: [],
  apiUrl: "https://developer.themoviedb.org/reference/search",
  apiKey: "c7f4ff45e6d6228ced413c8e6959ea3f",
  searchMovie: '/movie',
  searchTv:'/tv',
  searchText: ""
});
