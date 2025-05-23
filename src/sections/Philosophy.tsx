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
                sx={{
                  height: "100%",
                  backgroundColor: "rgba(18, 18, 18, 0.6)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: 3,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 20px 40px rgba(100, 181, 246, 0.15)",
                    borderColor: "rgba(100, 181, 246, 0.3)",
                  },
                }}
              >
                <CardContent sx={{ p: 4, textAlign: "left" }}>
                  <Typography
                    variant="h4"
                    sx={{
                      mb: 3,
                      fontWeight: 600,
                      color: "text.primary",
                      lineHeight: 1.3,
                    }}
                  >
                    {principle.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "text.secondary",
                      lineHeight: 1.7,
                      fontSize: "1.1rem",
                    }}
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
