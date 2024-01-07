import "./App.css";
import About from "./components/about/About.jsx";
import Hero from "./components/hero/Hero.jsx";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <About />
      </div>
    </>
  );
}

export default App;
