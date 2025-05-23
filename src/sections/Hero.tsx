import { useRef, useEffect } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { gsap } from "gsap";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SectionWrapper from "../components/SectionWrapper";
import { portfolioData } from "../data/content";

const Hero = () => {
  const { hero } = portfolioData;
  const nameRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Set initial states
    gsap.set([nameRef.current, taglineRef.current, arrowRef.current], {
      opacity: 0,
      y: 30,
    });

    // Animate elements in sequence
    tl.to(nameRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
    })
      .to(
        taglineRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.4"
      )
      .to(
        arrowRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.4"
      );

    // Bounce animation for arrow
    gsap.to(arrowRef.current, {
      y: -10,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
      delay: 1.5,
    });
  }, []);

  const scrollToNext = () => {
    const nextSection = document.getElementById("tech-stack");
    nextSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <SectionWrapper id="hero" fullHeight>
      {" "}
      <Box
        sx={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          position: "relative",
        }}
      >
        {/* Name and Introduction */}
        <div ref={nameRef}>
          <Typography
            variant="h4"
            sx={(theme) => ({
              mb: 2,
              fontWeight: 400,
              color:
                theme.palette.mode === "dark"
                  ? "text.secondary"
                  : "primary.main",
              zIndex: 1,
              position: "relative",
            })}
          >
            {" "}
            {hero.greeting}
          </Typography>
          <Typography
            variant="h1"
            sx={(theme) => ({
              mb: 4,
              fontWeight: 700,
              background:
                theme.palette.mode === "dark"
                  ? "linear-gradient(135deg, #ffffff 0%, #64b5f6 100%)"
                  : "linear-gradient(135deg, #1e88e5 0%, #0d47a1 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            })}
          >
            {hero.name}{" "}
          </Typography>
        </div>
        {/* Tagline */}
        <div ref={taglineRef}>
          <Typography
            variant="h3"
            sx={(theme) => ({
              mb: 8,
              fontWeight: 400,
              color: theme.palette.mode === "dark" ? "text.primary" : "#102a43",
              maxWidth: "800px",
              lineHeight: 1.4,
              px: { xs: 2, md: 0 },
              zIndex: 1,
              position: "relative",
            })}
          >
            {hero.tagline}
          </Typography>
        </div>
        {/* Scroll Arrow */}
        <div
          ref={arrowRef}
          style={{
            position: "absolute",
            bottom: "40px",
          }}
        >
          <IconButton
            onClick={scrollToNext}
            sx={(theme) => ({
              color:
                theme.palette.mode === "dark"
                  ? "text.secondary"
                  : "primary.dark",
              fontSize: "2rem",
              zIndex: 1,
              position: "relative",
              "&:hover": {
                color:
                  theme.palette.mode === "dark"
                    ? "secondary.main"
                    : "primary.main",
                backgroundColor:
                  theme.palette.mode === "dark"
                    ? "rgba(100, 181, 246, 0.1)"
                    : "rgba(25, 118, 210, 0.08)",
              },
            })}
            aria-label={hero.scrollPrompt}
          >
            <KeyboardArrowDownIcon fontSize="inherit" />
          </IconButton>
          <Typography
            variant="body2"
            sx={(theme) => ({
              mt: 1,
              color:
                theme.palette.mode === "dark"
                  ? "text.secondary"
                  : "primary.dark",
              fontSize: "0.875rem",
            })}
          >
            {hero.scrollPrompt}
          </Typography>
        </div>
      </Box>
    </SectionWrapper>
  );
};

export default Hero;
