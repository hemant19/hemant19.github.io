import React, { useState, useEffect } from 'react';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { getTheme } from './theme';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Terminal from './components/Terminal';
import Education from './components/Education';
import Contact from './components/Contact';

export default function App() {
  // Prefer dark mode for high-tech console default look, but support light mode
  const [mode, setMode] = useState(() => {
    const saved = localStorage.getItem('theme-mode');
    return saved ? saved : 'light';
  });

  const toggleTheme = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    localStorage.setItem('theme-mode', mode);
    // Apply scroll class for styling custom scrollbars
    if (mode === 'dark') {
      document.documentElement.className = 'dark-scroll';
    } else {
      document.documentElement.className = 'light-scroll';
    }
  }, [mode]);

  const theme = getTheme(mode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      
      {/* Visual Blueprint Tech Grid */}
      <div className={`tech-grid-bg ${mode}`} />
      
      {/* Scanline CRT glass vibe in dark mode */}
      {mode === 'dark' && <div className="terminal-glow" />}

      {/* Page Content Shell */}
      <Box 
        sx={{ 
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Navbar mode={mode} toggleTheme={toggleTheme} />
        
        <Box component="main" sx={{ flexGrow: 1 }}>
          <Hero mode={mode} />
          <Experience mode={mode} />
          <Skills mode={mode} />
          <Terminal mode={mode} />
          <Education mode={mode} />
          <Contact mode={mode} />
        </Box>
      </Box>
    </ThemeProvider>
  );
}
