import React, { useState } from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, Button, TextField, Stack, useTheme, Alert } from '@mui/material';
import { Send, Email, Phone, LinkedIn, GitHub, Loop } from '@mui/icons-material';
import { portfolioData } from '../data';
import { motion, AnimatePresence } from 'framer-motion';

export default function Contact({ mode }) {
  const theme = useTheme();
  const { personalInfo } = portfolioData;

  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, sending, success, error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleTransmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus('error');
      return;
    }

    setStatus('sending');

    // Simulate network latency / transmission packet
    setTimeout(() => {
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    }, 2000);
  };

  const contactLinks = [
    {
      label: "Send Email",
      value: personalInfo.email,
      icon: <Email sx={{ color: 'primary.main' }} />,
      href: `mailto:${personalInfo.email}`
    },
    {
      label: "Call Mobile",
      value: personalInfo.phone,
      icon: <Phone sx={{ color: 'secondary.main' }} />,
      href: `tel:${personalInfo.phone.replace(/\s+/g, '')}`
    },
    {
      label: "LinkedIn Portal",
      value: "linkedin.com/in/hemant-bhoyar",
      icon: <LinkedIn sx={{ color: 'primary.main' }} />,
      href: personalInfo.linkedin
    },
    {
      label: "GitHub Profile",
      value: "github.com/hemant19",
      icon: <GitHub sx={{ color: 'text.primary' }} />,
      href: personalInfo.github
    }
  ];

  return (
    <Box 
      component="section" 
      id="contact" 
      sx={{ 
        py: { xs: 8, md: 12 },
        scrollMarginTop: '80px',
        backgroundColor: mode === 'dark' ? 'rgba(17, 24, 39, 0.2)' : 'rgba(241, 245, 249, 0.4)',
        borderTop: '1px solid',
        borderColor: 'divider'
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box sx={{ mb: 8, textAlign: 'center' }}>
          <Typography 
            variant="overline" 
            sx={{ 
              fontFamily: "'JetBrains Mono', monospace", 
              color: 'primary.main', 
              fontWeight: 700,
              letterSpacing: '0.15em'
            }}
          >
            TRANSMIT PACKET
          </Typography>
          <Typography 
            variant="h2" 
            sx={{ 
              fontSize: { xs: '2.25rem', md: '3rem' }, 
              fontWeight: 800, 
              fontFamily: "'Outfit', sans-serif",
              mt: 0.5,
              mb: 1
            }}
          >
            Get In Touch
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Establish connection. Transmit a payload directly to Hemant's inbox.
          </Typography>
        </Box>

        <Grid container spacing={5}>
          {/* Left Column: Direct Links */}
          <Grid item xs={12} md={5}>
            <Stack spacing={3}>
              {contactLinks.map((link, idx) => (
                <Card 
                  key={idx} 
                  component="a"
                  href={link.href}
                  target={link.label.includes("Portal") || link.label.includes("Profile") ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  sx={{ 
                    textDecoration: 'none',
                    backgroundColor: 'background.paper',
                    cursor: 'pointer'
                  }}
                >
                  <CardContent sx={{ p: 3, display: 'flex', alignItems: 'center', gap: 2.5 }}>
                    <Box 
                      sx={{ 
                        p: 1.5, 
                        borderRadius: '10px', 
                        backgroundColor: mode === 'dark' ? 'rgba(255, 255, 255, 0.04)' : 'rgba(0, 0, 0, 0.03)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      {link.icon}
                    </Box>
                    <Box>
                      <Typography variant="caption" color="text.secondary" sx={{ display: 'block', fontWeight: 600 }}>
                        {link.label}
                      </Typography>
                      <Typography 
                        variant="body1" 
                        sx={{ 
                          fontWeight: 700, 
                          color: 'text.primary',
                          fontFamily: link.label.includes("Email") || link.label.includes("Mobile") ? "'JetBrains Mono', monospace" : "inherit",
                          fontSize: '0.95rem'
                        }}
                      >
                        {link.value}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              ))}
            </Stack>
          </Grid>

          {/* Right Column: Console Form */}
          <Grid item xs={12} md={7}>
            <Card sx={{ height: '100%', backgroundColor: 'background.paper' }}>
              <CardContent sx={{ p: { xs: 3.5, md: 4 } }}>
                <Typography 
                  variant="subtitle2" 
                  sx={{ 
                    mb: 3, 
                    fontFamily: "'JetBrains Mono', monospace", 
                    fontSize: '0.8rem',
                    color: 'primary.main',
                    fontWeight: 600 
                  }}
                >
                  // INITIALIZE ENVELOPE PAYLOAD:
                </Typography>

                <Box component="form" onSubmit={handleTransmit} noValidate>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="SENDER_NAME"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        variant="outlined"
                        required
                        disabled={status === 'sending' || status === 'success'}
                        InputProps={{
                          sx: { fontFamily: "'JetBrains Mono', monospace" }
                        }}
                        InputLabelProps={{
                          sx: { fontFamily: "'JetBrains Mono', monospace" }
                        }}
                      />
                    </Grid>
                    
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="SENDER_EMAIL"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        variant="outlined"
                        required
                        type="email"
                        disabled={status === 'sending' || status === 'success'}
                        InputProps={{
                          sx: { fontFamily: "'JetBrains Mono', monospace" }
                        }}
                        InputLabelProps={{
                          sx: { fontFamily: "'JetBrains Mono', monospace" }
                        }}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="MESSAGE_PAYLOAD"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        variant="outlined"
                        required
                        multiline
                        rows={4}
                        disabled={status === 'sending' || status === 'success'}
                        InputProps={{
                          sx: { fontFamily: "'JetBrains Mono', monospace" }
                        }}
                        InputLabelProps={{
                          sx: { fontFamily: "'JetBrains Mono', monospace" }
                        }}
                      />
                    </Grid>
                  </Grid>

                  {/* Submission and Status Alert Box */}
                  <Box sx={{ mt: 3 }}>
                    <AnimatePresence mode="wait">
                      {status === 'error' && (
                        <Box component={motion.div} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} sx={{ mb: 2 }}>
                          <Alert severity="warning" sx={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.8rem' }}>
                            ERR: Required fields empty. Fill all parameters.
                          </Alert>
                        </Box>
                      )}

                      {status === 'success' && (
                        <Box component={motion.div} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} sx={{ mb: 2 }}>
                          <Alert severity="success" sx={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.8rem' }}>
                            STATUS 200 OK: Payload transmitted successfully. Thank you!
                          </Alert>
                        </Box>
                      )}

                      {status === 'sending' && (
                        <Box component={motion.div} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} sx={{ mb: 2 }}>
                          <Alert 
                            icon={<Loop sx={{ animation: 'spin 1.5s linear infinite' }} />}
                            severity="info" 
                            sx={{ 
                              fontFamily: "'JetBrains Mono', monospace", 
                              fontSize: '0.8rem',
                              '@keyframes spin': {
                                '0%': { transform: 'rotate(0deg)' },
                                '100%': { transform: 'rotate(360deg)' }
                              }
                            }}
                          >
                            CONNECTING PORT 443... TRANSMITTING ENCRYPTED MESSAGE PACKET...
                          </Alert>
                        </Box>
                      )}
                    </AnimatePresence>

                    <Button
                      fullWidth
                      variant="contained"
                      type="submit"
                      color="primary"
                      disabled={status === 'sending' || status === 'success'}
                      endIcon={<Send />}
                      sx={{ 
                        py: 1.5,
                        fontSize: '0.9rem',
                        fontFamily: "'Outfit', sans-serif"
                      }}
                    >
                      Transmit Packet
                    </Button>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Footer info */}
        <Box 
          sx={{ 
            mt: 8, 
            pt: 4, 
            borderTop: '1px solid', 
            borderColor: 'divider', 
            textAlign: 'center',
            color: 'text.secondary',
            fontSize: '0.8rem'
          }}
        >
          <Typography variant="body2" sx={{ fontFamily: "'JetBrains Mono', monospace" }}>
            © {new Date().getFullYear()} Hemant Bhoyar // SECURE_PORTFOLIO_BUILD v1.0.0
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
