import { useRef, useEffect } from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import { gsap } from "gsap";
import SectionWrapper from "../components/SectionWrapper";
import { portfolioData } from "../data/content";

const Philosophy = () => {
  const { philosophy } = portfolioData;
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = cardsRef.current?.children;
    if (!cards) return;

    // Set initial state
    gsap.set(cards, {
      opacity: 0,
      y: 50,
      scale: 0.95,
    });

    // Create staggered animation
    gsap.to(cards, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.7,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: cardsRef.current,
        start: "top 80%",
        once: true,
      },
    });
  }, []);

  return (
    <SectionWrapper id="philosophy" py={12}>
      <Box sx={{ textAlign: "center" }}>
        <Typography
          variant="h2"
          sx={{
            mb: 8,
            fontWeight: 600,
            color: "text.primary",
          }}
        >
          {philosophy.title}
        </Typography>

        <Box
          ref={cardsRef}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
            justifyContent: "center",
          }}
        >
          {philosophy.principles.map((principle) => (
            <Box
              key={principle.id}
              sx={{
                flex: { xs: "none", md: "1" },
                maxWidth: { xs: "100%", md: "350px" },
              }}
            >
              <Card
                sx={(theme) => ({
                  height: "100%",
                  backgroundColor:
                    theme.palette.mode === "dark"
                      ? "rgba(18, 18, 18, 0.6)"
                      : "rgba(248, 250, 252, 0.8)", // Light blue-grey background
                  backdropFilter: "blur(10px)",
                  border: "1px solid",
                  borderColor:
                    theme.palette.mode === "dark"
                      ? "rgba(255, 255, 255, 0.1)"
                      : "rgba(226, 232, 240, 0.6)", // Subtle border for light mode
                  borderRadius: 3,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    backgroundColor:
                      theme.palette.mode === "dark"
                        ? "rgba(18, 18, 18, 0.8)"
                        : "rgba(255, 255, 255, 0.95)", // Slightly whiter on hover
                    boxShadow:
                      theme.palette.mode === "dark"
                        ? "0 20px 40px rgba(100, 181, 246, 0.15)"
                        : "0 20px 40px rgba(148, 163, 184, 0.15)", // Softer shadow for light mode
                    borderColor:
                      theme.palette.mode === "dark"
                        ? "rgba(100, 181, 246, 0.3)"
                        : "rgba(37, 99, 235, 0.2)", // Blue tinted border on hover
                  },
                })}
              >
                <CardContent sx={{ p: 4, textAlign: "left" }}>
                  <Typography
                    variant="h4"
                    sx={(theme) => ({
                      mb: 3,
                      fontWeight: 600,
                      color:
                        theme.palette.mode === "dark"
                          ? "text.primary"
                          : "primary.dark", // Darker blue for better contrast
                      lineHeight: 1.3,
                    })}
                  >
                    {principle.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={(theme) => ({
                      color:
                        theme.palette.mode === "dark"
                          ? "text.secondary"
                          : "text.primary", // Better contrast for description
                      lineHeight: 1.7,
                      fontSize: "1.1rem",
                    })}
                  >
                    {principle.description}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
      </Box>
    </SectionWrapper>
  );
};

export default Philosophy;
