import { Box, Typography, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";
import { portfolioData } from "../data/content";

const Philosophy = () => {
  const { philosophy } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

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

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <Box
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
                <motion.div variants={cardVariants}>
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
                </motion.div>
              </Box>
            ))}
          </Box>
        </motion.div>
      </Box>
    </SectionWrapper>
  );
};

export default Philosophy;
