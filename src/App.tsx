import { Box } from "@mui/material";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "./sections/Hero";
import Stack from "./sections/Stack";
import Philosophy from "./sections/Philosophy";
import Contact from "./sections/Contact";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  useEffect(() => {
    // Add loaded class after initial render
    const root = document.getElementById("root");
    if (root) {
      root.classList.add("loaded");
    }

    // Initialize GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Reset scroll position
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box sx={{ backgroundColor: "background.default" }}>
      <ThemeToggle />
      <Hero />
      <Stack />
      <Philosophy />
      <Contact />
    </Box>
  );
}

export default App;
