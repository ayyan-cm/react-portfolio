import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import About from "./Components/About";

function App() {
  return (
    <div className=" h-full w-full text-white font-thin">
      <div className="fixed top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <header>
        <Header />
      </header>
      <main className="">
        <Home />
        <About />
      </main>
      <footer className="w-full bottom-5 flex justify-center">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
