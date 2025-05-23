import { useRef, useEffect } from "react";
import { Box, Typography, Chip } from "@mui/material";
import { gsap } from "gsap";
import SectionWrapper from "../components/SectionWrapper";
import TechIcon from "../components/TechIcon";
import { portfolioData } from "../data/content";

const Stack = () => {
  const { techStack } = portfolioData;
  const chipsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const chips = chipsRef.current?.children;
    if (!chips) return;

    // Set initial state
    gsap.set(chips, {
      opacity: 0,
      y: 30,
      scale: 0.8,
    });

    // Create staggered animation
    gsap.to(chips, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: chipsRef.current,
        start: "top 80%",
        once: true,
      },
    });
  }, []);

  return (
    <SectionWrapper id="tech-stack" py={12}>
      <Box sx={{ textAlign: "center" }}>
        <Typography
          variant="h2"
          sx={{
            mb: 6,
            fontWeight: 600,
            color: "text.primary",
          }}
        >
          Tech Stack
        </Typography>
        <Typography
          variant="h5"
          sx={{
            mb: 8,
            fontWeight: 400,
            color: "text.secondary",
            maxWidth: "600px",
            mx: "auto",
            lineHeight: 1.6,
          }}
        >
          {techStack.title}
        </Typography>
        <Box
          ref={chipsRef}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            justifyContent: "center",
            maxWidth: "800px",
            mx: "auto",
          }}
        >
          {techStack.technologies.map((tech, index) => (
            <Chip
              key={index}
              icon={<TechIcon iconName={tech.icon} size="small" />}
              label={tech.name}
              variant="outlined"
              sx={{
                fontSize: "1rem",
                fontWeight: 500,
                px: 2,
                py: 1,
                height: "auto",
                color: "text.primary",
                borderColor: "text.secondary",
                backgroundColor: "rgba(100, 181, 246, 0.05)",
                "&:hover": {
                  borderColor: "secondary.main",
                  backgroundColor: "rgba(100, 181, 246, 0.15)",
                  transform: "translateY(-2px)",
                  boxShadow: "0 4px 20px rgba(100, 181, 246, 0.3)",
                },
                transition: "all 0.3s ease",
                "& .MuiChip-icon": {
                  color: "secondary.main",
                  marginLeft: "8px",
                },
              }}
            />
          ))}
        </Box>
      </Box>
    </SectionWrapper>
  );
};

export default Stack;
