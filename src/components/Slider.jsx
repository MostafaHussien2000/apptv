import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import banner from "../assets/banner.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/effect-cards";

function Slider({ movies, setActiveBackDrop }) {
  return (
    <Swiper
      spaceBetween={40}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      loop={true}
      loopAddBlankSlides
      slideToClickedSlide={true}
      width={500}
      centeredSlides={true}
    >
      {movies.map((movie) => {
        return (
          <SwiperSlide key={movie.id}>
            {({ isActive }) => {
              if (isActive) {
                setActiveBackDrop(movie.backdrop_path);
                console.log("Active Slide is: " + movie.title);
              }
              return (
                <>
                  <img
                    className={isActive ? "active_poster" : null}
                    src={"https://image.tmdb.org/t/p/w185" + movie.poster_path}
                    alt=""
                  />
                  <div
                    className={`swiper__slide__actions ${
                      isActive ? "active" : null
                    }`}
                  >
                    <h2 className="swiper__slide__movie-name">{movie.title}</h2>
                    <button className="swiper__slide__movie-book-btn">
                      Book Now
                    </button>
                  </div>
                </>
              );
            }}
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default Slider;
