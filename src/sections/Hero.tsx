import { Box, Typography, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SectionWrapper from '../components/SectionWrapper';
import { portfolioData } from '../data/content';

const Hero = () => {
  const { hero } = portfolioData;

  const nameVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const taglineVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.3,
        ease: "easeOut"
      }
    }
  };

  const arrowVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.6
      }
    },
    bounce: {
      y: [0, -10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const scrollToNext = () => {
    const nextSection = document.getElementById('tech-stack');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <SectionWrapper id="hero" fullHeight>
      <Box
        sx={{
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          position: 'relative',
        }}
      >
        {/* Name and Introduction */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={nameVariants}
        >
          <Typography
            variant="h4"
            sx={{
              mb: 2,
              fontWeight: 400,
              color: 'text.secondary',
            }}
          >
            {hero.greeting}
          </Typography>
          <Typography
            variant="h1"
            sx={{
              mb: 4,
              fontWeight: 700,
              background: 'linear-gradient(135deg, #ffffff 0%, #64b5f6 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {hero.name}
          </Typography>
        </motion.div>

        {/* Tagline */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={taglineVariants}
        >
          <Typography
            variant="h3"
            sx={{
              mb: 8,
              fontWeight: 400,
              color: 'text.primary',
              maxWidth: '800px',
              lineHeight: 1.4,
              px: { xs: 2, md: 0 },
            }}
          >
            {hero.tagline}
          </Typography>
        </motion.div>

        {/* Scroll Arrow */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={arrowVariants}
          style={{
            position: 'absolute',
            bottom: '40px',
          }}
        >
          <motion.div
            animate="bounce"
            variants={arrowVariants}
          >
            <IconButton
              onClick={scrollToNext}
              sx={{
                color: 'text.secondary',
                fontSize: '2rem',
                '&:hover': {
                  color: 'primary.main',
                  backgroundColor: 'rgba(100, 181, 246, 0.1)',
                },
              }}
              aria-label={hero.scrollPrompt}
            >
              <KeyboardArrowDownIcon fontSize="inherit" />
            </IconButton>
          </motion.div>
          <Typography
            variant="body2"
            sx={{
              mt: 1,
              color: 'text.secondary',
              fontSize: '0.875rem',
            }}
          >
            {hero.scrollPrompt}
          </Typography>
        </motion.div>
      </Box>
    </SectionWrapper>
  );
};

export default Hero;
