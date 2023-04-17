import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Slide } from "./slide";
import { getRecentMovieAPI } from "../../API";
import "swiper/scss";
import "swiper/scss/navigation";
import "./styles.scss";

const ThumbSlider = () => {
  const [movies, setMovies] = useState([]);
  const getMovies = () => {
    getRecentMovieAPI("a2557d25", "Batman")
      .then((res) => {
        setMovies(res.data.Search);
      })
      .catch((error) => {
        setMovies([]);
      });
  };

  useEffect(() => {
    getMovies();
  }, []);
  return (
    <section className="thumb-slider">
      <h2 className="title">Recent Movies</h2>
      <Swiper
        slidesPerView={6.2}
        spaceBetween={16}
        breakpoints={{
          320: {
            slidesPerView: 2.2,
          },
          576: {
            slidesPerView: 3.2,
          },
          768: {
            slidesPerView: 4.2,
          },
        }}
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.imdbID}>
            <Slide posterSrc={movie.Poster} title={movie.Title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ThumbSlider;
