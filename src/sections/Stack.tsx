import { useRef, useEffect } from "react";
import { Box, Typography, Paper } from "@mui/material";
import { gsap } from "gsap";
import SectionWrapper from "../components/SectionWrapper";
import TechIcon from "../components/TechIcon";
import { portfolioData } from "../data/content";

const Stack = () => {
  const { techStack } = portfolioData;
  const iconsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const icons = iconsRef.current?.children;
    if (!icons) return;

    // Set initial state
    gsap.set(icons, {
      opacity: 0,
      y: 30,
      scale: 0.8,
    });

    // Create staggered animation
    gsap.to(icons, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: iconsRef.current,
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
            mb: 2,
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
          ref={iconsRef}
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(2, 1fr)",
              sm: "repeat(3, 1fr)",
              md: "repeat(5, 1fr)",
            },
            gap: 4,
            maxWidth: "1000px",
            mx: "auto",
            px: 2,
          }}
        >
          {techStack.technologies.map((tech, index) => (
            <Paper
              key={index}
              elevation={0}
              sx={(theme) => ({
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
                p: 3,
                backgroundColor:
                  theme.palette.mode === "dark"
                    ? "rgba(100, 181, 246, 0.05)"
                    : "rgba(37, 99, 235, 0.02)",
                borderRadius: 2,
                border: "1px solid",
                borderColor: "divider",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-8px)",
                  backgroundColor:
                    theme.palette.mode === "dark"
                      ? "rgba(100, 181, 246, 0.1)"
                      : "rgba(37, 99, 235, 0.05)",
                  borderColor: "secondary.main",
                  boxShadow:
                    theme.palette.mode === "dark"
                      ? "0 8px 24px rgba(100, 181, 246, 0.15)"
                      : "0 8px 24px rgba(37, 99, 235, 0.08)",
                  "& .icon": {
                    color: "secondary.main",
                    transform: "scale(1.1)",
                  },
                  "& .text": {
                    color: "primary.main",
                  },
                },
              })}
            >
              <Box
                className="icon"
                sx={{
                  color: "text.primary",
                  transition: "all 0.3s ease",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <TechIcon iconName={tech.icon} size="large" />
              </Box>
              <Typography
                className="text"
                variant="h6"
                sx={{
                  color: "text.primary",
                  fontWeight: 500,
                  transition: "all 0.3s ease",
                }}
              >
                {tech.name}
              </Typography>
            </Paper>
          ))}
        </Box>
      </Box>
    </SectionWrapper>
  );
};

export default Stack;
