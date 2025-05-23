import { Box, Typography, IconButton, Link } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import SectionWrapper from '../components/SectionWrapper';
import { portfolioData } from '../data/content';

const Contact = () => {
  const { contact } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'GitHub':
        return <GitHubIcon fontSize="large" />;
      case 'LinkedIn':
        return <LinkedInIcon fontSize="large" />;
      default:
        return <EmailIcon fontSize="large" />;
    }
  };

  return (
    <SectionWrapper id="contact" py={12}>
      <Box sx={{ textAlign: 'center' }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <Typography
              variant="h2"
              sx={{
                mb: 4,
                fontWeight: 600,
                color: 'text.primary',
              }}
            >
              {contact.title}
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Typography
              variant="h5"
              sx={{
                mb: 6,
                fontWeight: 400,
                color: 'text.secondary',
                maxWidth: '500px',
                mx: 'auto',
              }}
            >
              {contact.subtitle}
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Box sx={{ mb: 6 }}>
              <Link
                href={`mailto:${contact.email}`}
                sx={{
                  color: 'primary.main',
                  textDecoration: 'none',
                  fontSize: '1.25rem',
                  fontWeight: 500,
                  '&:hover': {
                    color: 'secondary.main',
                    textDecoration: 'underline',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                {contact.email}
              </Link>
            </Box>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, mb: 8 }}>
              {contact.social.map((social, index) => (
                <IconButton
                  key={index}
                  component={Link}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: 'text.secondary',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: 2,
                    p: 2,
                    '&:hover': {
                      color: 'secondary.main',
                      backgroundColor: 'rgba(100, 181, 246, 0.1)',
                      borderColor: 'rgba(100, 181, 246, 0.3)',
                      transform: 'translateY(-4px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                  aria-label={`Visit ${social.platform} profile`}
                >
                  {getIcon(social.icon)}
                </IconButton>
              ))}
            </Box>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                fontStyle: 'italic',
                opacity: 0.7,
              }}
            >
              {contact.signature}
            </Typography>
          </motion.div>
        </motion.div>
      </Box>
    </SectionWrapper>
  );
};

export default Contact;
