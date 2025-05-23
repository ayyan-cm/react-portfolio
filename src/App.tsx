import { Box } from "@mui/material";
import Hero from "./sections/Hero";
import Stack from "./sections/Stack";
import Philosophy from "./sections/Philosophy";
import Contact from "./sections/Contact";
import ThemeToggle from "./components/ThemeToggle";

function App() {
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
