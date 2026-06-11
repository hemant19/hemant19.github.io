import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box, Container, Tooltip } from '@mui/material';
import { LightMode, DarkMode, Description } from '@mui/icons-material';

const NAV_ITEMS = [
  { label: 'Experience', id: 'experience' },
  { label: 'Skills', id: 'skills' },
  { label: 'System Terminal', id: 'terminal' },
  { label: 'Education', id: 'education' },
  { label: 'Contact', id: 'contact' },
];

export default function Navbar({ mode, toggleTheme }) {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar + spacing
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <AppBar position="sticky" sx={{ top: 0, zIndex: 1100 }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between', height: 70 }}>
          {/* Logo */}
          <Box 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
            sx={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
          >
            <Typography 
              variant="h6" 
              sx={{ 
                fontFamily: "'Outfit', sans-serif", 
                fontWeight: 800,
                letterSpacing: '-0.02em',
                background: mode === 'dark' 
                  ? 'linear-gradient(90deg, #818cf8 0%, #34d399 100%)' 
                  : 'linear-gradient(90deg, #4f46e5 0%, #059669 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              hemant.dev
            </Typography>
          </Box>

          {/* Nav Links */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
            {NAV_ITEMS.map((item) => (
              <Button
                key={item.id}
                onClick={() => handleScroll(item.id)}
                sx={{
                  color: 'text.secondary',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  '&:hover': {
                    color: 'primary.main',
                    backgroundColor: 'action.hover',
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* Right Action Buttons */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Tooltip title={`Switch to ${mode === 'dark' ? 'light' : 'dark'} mode`}>
              <IconButton onClick={toggleTheme} color="inherit" sx={{ color: 'text.secondary' }}>
                {mode === 'dark' ? <LightMode /> : <DarkMode />}
              </IconButton>
            </Tooltip>
            
            <Button
              variant="contained"
              color="primary"
              startIcon={<Description />}
              component="a"
              href="/resume.pdf"
              download="Resume_Hemant_Bhoyar.pdf"
              sx={{
                fontSize: '0.85rem',
                py: 1,
                px: 2,
                borderRadius: '8px',
                background: mode === 'dark'
                  ? 'linear-gradient(135deg, #4f46e5 0%, #4338ca 100%)'
                  : 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
                color: '#ffffff',
                fontWeight: 600,
                '&:hover': {
                  background: mode === 'dark'
                    ? 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)'
                    : 'linear-gradient(135deg, #818cf8 0%, #6366f1 100%)',
                }
              }}
            >
              Export CV
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
