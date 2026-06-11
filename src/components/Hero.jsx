import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, Button, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { ContactMail, Terminal as TerminalIcon, CheckCircle } from '@mui/icons-material';
import { portfolioData } from '../data';

// Framer motion variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100, damping: 15 }
  }
};

const photoVariants = {
  hidden: { scale: 0.9, opacity: 0, rotate: -2 },
  visible: {
    scale: 1,
    opacity: 1,
    rotate: 2,
    transition: { type: 'spring', stiffness: 60, damping: 12 }
  }
};

export default function Hero({ mode }) {
  const theme = useTheme();
  const { personalInfo, systemStats } = portfolioData;

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <Box 
      component="section" 
      sx={{ 
        pt: { xs: 6, md: 10 }, 
        pb: { xs: 8, md: 12 },
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 6, md: 8 }} alignItems="center">
          {/* Left Column: Hero Content */}
          <Grid item xs={12} md={7}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Online system banner */}
              <motion.div variants={itemVariants}>
                <Box 
                  sx={{ 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    gap: 1.5,
                    px: 2,
                    py: 0.75,
                    mb: 4,
                    borderRadius: '20px',
                    backgroundColor: mode === 'dark' ? 'rgba(52, 211, 153, 0.08)' : 'rgba(5, 150, 105, 0.08)',
                    border: '1px solid',
                    borderColor: mode === 'dark' ? 'rgba(52, 211, 153, 0.2)' : 'rgba(5, 150, 105, 0.2)',
                  }}
                >
                  <Box 
                    component={motion.div}
                    animate={{ opacity: [1, 0.4, 1] }}
                    transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
                    sx={{ 
                      width: 8, 
                      height: 8, 
                      borderRadius: '50%', 
                      backgroundColor: mode === 'dark' ? '#34d399' : '#059669' 
                    }}
                  />
                  <Typography 
                    variant="caption" 
                    sx={{ 
                      fontFamily: "'JetBrains Mono', monospace", 
                      fontWeight: 600,
                      color: mode === 'dark' ? '#34d399' : '#059669',
                      letterSpacing: '0.05em'
                    }}
                  >
                    SYSTEM STATUS: ACTIVE // NODE: GOOGLE_SEARCH
                  </Typography>
                </Box>
              </motion.div>

              {/* Headings */}
              <motion.div variants={itemVariants}>
                <Typography 
                  variant="h1" 
                  sx={{ 
                    fontSize: { xs: '2.75rem', sm: '3.75rem', md: '4.5rem' },
                    lineHeight: 1.1,
                    letterSpacing: '-0.03em',
                    fontWeight: 800,
                    color: 'text.primary',
                    mb: 1
                  }}
                >
                  {personalInfo.name}
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography 
                  variant="h4" 
                  sx={{ 
                    fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' },
                    color: 'primary.main',
                    fontWeight: 600,
                    mb: 3,
                    fontFamily: "'Outfit', sans-serif"
                  }}
                >
                  {personalInfo.subtitle}
                </Typography>
              </motion.div>

              {/* Tagline */}
              <motion.div variants={itemVariants}>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    fontSize: { xs: '1rem', sm: '1.15rem' },
                    color: 'text.secondary',
                    mb: 4,
                    maxWidth: '600px',
                    fontWeight: 400
                  }}
                >
                  {personalInfo.tagline} Currently a <strong>Senior Software Engineer at Google</strong> in Bangalore, focusing on high-throughput distributed search infrastructure. Previously deployed stateful streaming security data pipelines at <strong>Booking.com</strong> and led cloud migration tools at <strong>Atlassian</strong>.
                </Typography>
              </motion.div>

              {/* Actions */}
              <motion.div variants={itemVariants}>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 6 }}>
                  <Button 
                    variant="contained" 
                    color="primary"
                    size="large"
                    startIcon={<TerminalIcon />}
                    onClick={() => scrollToSection('terminal')}
                    sx={{ 
                      px: 3.5, 
                      py: 1.5,
                      boxShadow: 'none',
                      fontSize: '0.95rem'
                    }}
                  >
                    Run Terminal Console
                  </Button>
                  <Button 
                    variant="outlined" 
                    color="inherit"
                    size="large"
                    startIcon={<ContactMail />}
                    onClick={() => scrollToSection('contact')}
                    sx={{ 
                      px: 3.5, 
                      py: 1.5,
                      borderColor: mode === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)',
                      fontSize: '0.95rem',
                      '&:hover': {
                        borderColor: 'text.primary',
                        backgroundColor: 'action.hover'
                      }
                    }}
                  >
                    Contact Hemant
                  </Button>
                </Box>
              </motion.div>
            </motion.div>
          </Grid>

          {/* Right Column: Headshot Photo with custom frames */}
          <Grid item xs={12} md={5} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box 
              component={motion.div}
              variants={photoVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ rotate: 0, scale: 1.02 }}
              sx={{ 
                position: 'relative',
                width: { xs: '260px', sm: '300px' },
                height: { xs: '300px', sm: '340px' },
                cursor: 'pointer',
                // Accent offset background frame
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  inset: '-10px',
                  border: '1.5px solid',
                  borderColor: mode === 'dark' ? 'rgba(129, 140, 248, 0.3)' : 'rgba(79, 70, 229, 0.3)',
                  borderRadius: '24px',
                  transform: 'rotate(-4deg)',
                  zIndex: -1,
                  transition: 'transform 0.4s ease',
                },
                '&:hover::before': {
                  transform: 'rotate(0deg)'
                }
              }}
            >
              <Box
                component="img"
                src={personalInfo.avatarUrl}
                alt={personalInfo.name}
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '20px',
                  filter: mode === 'dark' ? 'grayscale(20%) contrast(1.1)' : 'grayscale(10%) contrast(1.05)',
                  border: '2px solid',
                  borderColor: 'background.paper',
                  boxShadow: '0 20px 40px -15px rgba(0,0,0,0.3)',
                }}
              />
              
              {/* Tech Spec Tag */}
              <Box 
                sx={{ 
                  position: 'absolute',
                  bottom: -15,
                  right: -15,
                  backgroundColor: 'background.paper',
                  border: '1px solid',
                  borderColor: mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
                  borderRadius: '12px',
                  p: 1.5,
                  boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1
                }}
              >
                <CheckCircle sx={{ color: 'secondary.main', fontSize: 18 }} />
                <Typography variant="caption" sx={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 600 }}>
                  SECURE BUILD v10.4
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Stats Grid */}
        <Box sx={{ mt: { xs: 8, md: 12 } }}>
          <Grid container spacing={3}>
            {systemStats.map((stat, index) => (
              <Grid item xs={6} md={3} key={index}>
                <Card 
                  component={motion.div}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  sx={{ 
                    height: '100%',
                    backgroundColor: mode === 'dark' ? 'rgba(17, 24, 39, 0.5)' : 'rgba(255, 255, 255, 0.7)',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <CardContent sx={{ p: 3, '&:last-child': { pb: 3 } }}>
                    <Typography 
                      variant="h3" 
                      sx={{ 
                        fontFamily: "'JetBrains Mono', monospace", 
                        fontSize: { xs: '1.75rem', md: '2.5rem' },
                        fontWeight: 700, 
                        color: 'primary.main',
                        mb: 0.5
                      }}
                    >
                      {stat.value}
                    </Typography>
                    <Typography 
                      variant="subtitle2" 
                      sx={{ 
                        fontWeight: 700,
                        color: 'text.primary',
                        mb: 0.5,
                        fontFamily: "'Outfit', sans-serif"
                      }}
                    >
                      {stat.label}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.8rem' }}>
                      {stat.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
