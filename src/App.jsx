import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
function App() {
  return (
    <div className=" w-screen h-screen bg-gradient-to-br from-neutral-900 to-neutral-800 fixed text-white">
      <header>
        <Header />
      </header>
      <main className="w-full m-10 ">
        <Home />
      </main>
      <footer className=" w-full flex justify-center bottom-5 absolute lg:justify-end lg:pr-10">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
