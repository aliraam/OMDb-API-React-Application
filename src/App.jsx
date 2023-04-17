import { useState } from "react";
import { Header, PostSlider, ThumbSlider } from "./components";
import "./App.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <header>
          <Header />
        </header>
        <main>
          <PostSlider />
        </main>
        <footer>
          <ThumbSlider />
        </footer>
      </div>
    </>
  );
}

export default App;
