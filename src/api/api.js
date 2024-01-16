const BASE_URL = "https://api.themoviedb.org/3";

/* Get Featured Movies URL
==================================== */
export const featuredMoviesURL = () => `${BASE_URL}/movie/top_rated`;

/* Get Upcoming Movies URL
==================================== */
export const upcomingMoviesURL = (page) =>
  `${BASE_URL}/upcoming?language=%20en-US&page=1`;

/* Get Currently Playing Movies URL
  ==================================== */
export const nowplayingMoviesURL = (page) =>
  `${BASE_URL}/trending/now_playing?language=%20en-US&page=${page}`;
