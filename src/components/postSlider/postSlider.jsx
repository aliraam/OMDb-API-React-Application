import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Slide } from "./slide";
import { getTopMovieAPI } from "../../API";
import "swiper/scss";
import "swiper/scss/navigation";
import "./styles.scss";

const PostSlider = () => {
  const [movies, setMovies] = useState([]);
  const getMovies = () => {
    getTopMovieAPI("a2557d25", "Inception")
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
    <section className="poster-slider">
      <Swiper>
        {movies.map((movie) => (
          <SwiperSlide key={movie.imdbID}>
            <Slide posterSrc={movie.Poster} title={movie.Title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default PostSlider;
