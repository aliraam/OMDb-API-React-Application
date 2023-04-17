import { Header, PosterSlider, ThumbSlider } from "./components";
import "./App.scss";

function App() {
  return (
    <>
      <div className="container">
        <header>
          <Header />
        </header>
        <main>
          <PosterSlider />
        </main>
        <footer>
          <ThumbSlider />
        </footer>
      </div>
    </>
  );
}

export default App;
