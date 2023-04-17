import "./styles.scss";

const Slide = ({ posterSrc, title }) => {
  return (
    <div className="movie-box">
      <div className="movie-poster">
        <img src={posterSrc} alt={title} loading="lazy" />
      </div>
      <div className="movie-title">{title}</div>
    </div>
  );
};

export { Slide };
