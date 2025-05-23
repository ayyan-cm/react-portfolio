import { Box, Typography, Chip } from "@mui/material";
import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";
import { portfolioData } from "../data/content";

const Stack = () => {
  const { techStack } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const chipVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

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

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <Box
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
              <motion.div key={index} variants={chipVariants}>
                <Chip
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
                  }}
                />
              </motion.div>
            ))}
          </Box>
        </motion.div>
      </Box>
    </SectionWrapper>
  );
};

export default Stack;
