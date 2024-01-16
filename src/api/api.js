const BASE_URL = "https://api.themoviedb.org/3";

/* Get Featured Movies URL
==================================== */
export const featuredMoviesURL = () => `${BASE_URL}/movie/top_rated`;

/* Get Upcoming Movies URL
==================================== */
export const upcomingMoviesURL = () => `${BASE_URL}/movie/upcoming`;

/* Get Currently Playing Movies URL
  ==================================== */
export const nowplayingMoviesURL = () => `${BASE_URL}/movie/now_playing`;
