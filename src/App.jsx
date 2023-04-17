import { useState } from "react";
import { Header, PostSlider, ThumbSlider } from "./components";
import "./App.scss";

function App() {
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
