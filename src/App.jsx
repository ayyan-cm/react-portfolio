import Header from "./Components/Header";
import Home from "./Components/Home";
import Project from "./Components/Project";
import About from "./Components/About";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <div className=" h-full w-full text-white font-thin">
      <div className="fixed top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <header>
        <Header />
      </header>
      <main>
        <Home />
        <Project />
        <About />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
