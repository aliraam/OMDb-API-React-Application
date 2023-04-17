import "./styles.scss";

const Header = () => {
  return (
    <div className="row items-center">
      <div className="col">
        <p className="title">Welcome</p>
      </div>
      <div className="col">
        <div className="avatar text-right">
          <img src="media/avatar/300-1.jpg" alt="avatar" loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default Header;
