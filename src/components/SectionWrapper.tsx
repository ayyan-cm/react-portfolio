import { type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Container, Box } from '@mui/material';

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  fullHeight?: boolean;
  backgroundColor?: string;
  py?: number;
}

const SectionWrapper = ({ 
  children, 
  id, 
  fullHeight = false, 
  backgroundColor,
  py = 8 
}: SectionWrapperProps) => {
  const variants = {
    hidden: { 
      opacity: 0, 
      y: 50 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <Box
      id={id}
      component="section"
      sx={{
        minHeight: fullHeight ? '100vh' : 'auto',
        display: 'flex',
        alignItems: fullHeight ? 'center' : 'flex-start',
        py: fullHeight ? 0 : py,
        backgroundColor: backgroundColor || 'transparent',
        position: 'relative',
      }}
    >
      <Container maxWidth="lg" sx={{ width: '100%' }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ 
            once: true, 
            amount: 0.3 
          }}
          variants={variants}
        >
          {children}
        </motion.div>
      </Container>
    </Box>
  );
};

export default SectionWrapper;
