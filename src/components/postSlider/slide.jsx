const Slide = ({ posterSrc, title }) => {
    return (
      <div className="poster">
        <img className="poster-img" src={posterSrc} alt={title} loading="lazy" />
        <div className="poster-overlay">
          <div className="poster-header">
            <p>Trending</p>
            <h2 className="poster-title">{title}</h2>
          </div>
          <div className="poster-footer">
            <p>24 stories</p>
          </div>
        </div>
      </div>
    );
  };

  export { Slide };
