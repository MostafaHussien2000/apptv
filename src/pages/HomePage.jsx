/* React Hooks
=========================================*/
import { useState, useEffect } from "react";

/* Images
=========================================*/
import banner from "../assets/banner.png";

/* React Components
=========================================*/
import NavBar from "../components/NavBar";
import Slider from "../components/Slider";

/* React Components
=========================================*/
import styled from "styled-components";

/* React Icons
=========================================*/
import { IoIosArrowRoundForward } from "react-icons/io";

/* API URLs
=========================================*/
import { featuredMoviesURL, upcomingMoviesURL } from "../api/api";

/* Axios
=========================================*/
import axios from "axios";

function HomePage() {
  const [activeBackDrop, setActiveBackDrop] = useState("");

  // Featured Movies
  const [featuredMovies, setFeaturedMovies] = useState([]);
  const [loadingFeaturedMovies, setLoadingFeaturedMovies] = useState(true);
  const [errorFeaturedMovies, setErrorFeaturedMovies] = useState(null);
  // Upcoming Movies
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [loadingUpcomingMovies, setLoadingUpcomingMovies] = useState(true);
  const [errorUpcomingMovies, setErrorUpcomingMovies] = useState(null);

  useEffect(() => {
    // Get featured movies
    axios({
      method: "GET",
      url: featuredMoviesURL(),
      params: { language: "en-US" },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
      },
    })
      .then((res) => {
        setFeaturedMovies(res.data.results);
      })
      .then((data) => {
        setLoadingFeaturedMovies(false);
      })
      .catch((err) => {
        setErrorFeaturedMovies(err);
        setLoadingFeaturedMovies(false);
      });
    //Get upcoming Movies
    axios({
      method: "GET",
      url: "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      params: { language: "en-US", page: 2 },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
      },
    })
      .then((res) => {
        setUpcomingMovies(res.data.results);
      })
      .then((data) => {
        console.log(upcomingMovies);
        setLoadingUpcomingMovies(false);
      })
      .catch((err) => {
        setErrorUpcomingMovies(err);
        setLoadingUpcomingMovies(false);
      });
  }, []);

  return (
    <StyledHomePage id="home-page">
      <NavBar />
      <section id="home-page__hero-section">
        <div id="home-page__hero-section__banner">
          <img
            src={"https://image.tmdb.org/t/p/original" + activeBackDrop}
            alt="banner"
          />
        </div>
        <div id="home-page__hero-section__slider">
          <Slider
            setActiveBackDrop={setActiveBackDrop}
            movies={featuredMovies}
          />
        </div>
      </section>
      <section className="home-page__movies-section">
        <div className="home-page__movies-section__section-header">
          <h2 className="home-page__movies-section__section-header__title">
            Currently Playing
          </h2>
          <div className="home-page__movies-section__section-header__action">
            <span>See more</span>
            <IoIosArrowRoundForward size={"30px"} />
          </div>
        </div>
        <div className="home-page__movies-section__section-header__movies">
          {upcomingMovies.length > 0 && !!loadingUpcomingMovies ? (
            upcomingMovies.map((movie) => (
              <>
                <div className="home-page__movies-section__section-header__movies__movie-card">
                  <h1>{movie.title}</h1>
                  <img
                    src={"https://image.tmdb.org/t/p/w185" + movie.poster_path}
                    alt=""
                    className="poster"
                  />
                  <div className="info"></div>
                </div>
              </>
            ))
          ) : (
            <></>
          )}
        </div>
      </section>
      <div id="home-page_upcoming"></div>
    </StyledHomePage>
  );
}

export default HomePage;

const StyledHomePage = styled.div`
  #home-page__hero-section {
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;

    *::selection {
      background: transparent;
      color: transparent;
      text-shadow: none;
      user-select: none;
    }

    #home-page__hero-section__banner {
      overflow: hidden;
      height: 100vh;
      width: 100vw;
      position: relative;

      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #1d1d1d;
        opacity: 0.5;
        z-index: 1;
        pointer-events: none;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        filter: blur(3px);
      }
    }

    #home-page__hero-section__slider {
      position: absolute;
      color: #000;
      bottom: 50px;
      left: 0px;
      width: 100vw;

      .swiper {
        overflow: visible;

        .swiper-slide {
          background: transparent;
          cursor: grab;
          width: fit-content !important;
          position: relative;

          img {
            width: 150px;
            filter: saturate(0.5);
            transition: transform 0.5s ease;
            display: block;
            transform-origin: 50% 100%;

            &.active_poster {
              filter: saturate(1.2);
              transform: scale(1.2);
            }
          }

          .swiper__slide__actions {
            position: absolute;
            bottom: 0px;
            left: 0px;
            right: 0px;
            top: 0px;
            padding: 10px;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            flex-direction: column;
            gap: 10px;
            overflow: hidden;
            background: rgb(0, 0, 0);
            background: linear-gradient(
              0deg,
              rgba(0, 0, 0, 1) 0%,
              rgba(255, 255, 255, 0) 100%
            );
            transform: scale(1.2);
            transition: transform 0.5s ease;

            h2 {
              font-size: 15px;
              font-weight: 500;
              margin: 0px;
              padding: 0px;
              color: #fff;
              transition: transfrom 0.3s ease;
            }
            button {
              background-color: #ab0a10;
              border: 0px;
              color: #fff;
              padding: 10px 20px;
              border-radius: 5px;
              cursor: pointer;
              transition: transfrom 0.3s ease;
              font-size: 12px;
            }

            &:not(.active) {
              transform: scale(1);

              button,
              h2 {
                transform: translateY(200px);
              }
            }
          }
        }
      }
    }
  }

  .home-page__movies-section {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    padding: 50px 80px;

    &__section-header {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      &__title {
        color: #383838;
      }

      &__action {
        display: flex;
        align-items: center;
        gap: 10px;
        cursor: pointer;
        opacity: 0.5;
        transition: opacity 0.2s ease;

        &:hover {
          opacity: 0.9;
        }
      }
    }
  }
`;
