import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, Stack, useTheme } from '@mui/material';
import { School, CalendarMonth, Grade, Place } from '@mui/icons-material';
import { portfolioData } from '../data';
import { motion } from 'framer-motion';

export default function Education({ mode }) {
  const theme = useTheme();
  const { education } = portfolioData;

  return (
    <Box 
      component="section" 
      id="education" 
      sx={{ 
        py: { xs: 8, md: 10 },
        scrollMarginTop: '80px'
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <Typography 
            variant="overline" 
            sx={{ 
              fontFamily: "'JetBrains Mono', monospace", 
              color: 'primary.main', 
              fontWeight: 700,
              letterSpacing: '0.15em'
            }}
          >
            ACADEMIC PATH
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
            Education History
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Foundation in computer science theory, systems architecture, and engineering principles.
          </Typography>
        </Box>

        {/* Education Cards Grid */}
        <Grid container spacing={4} justifyContent="center">
          {education.map((edu, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card 
                component={motion.div}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                sx={{ 
                  height: '100%',
                  backgroundColor: 'background.paper',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <CardContent sx={{ p: 4, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  {/* Icon and Institution Name */}
                  <Stack direction="row" spacing={2} alignItems="flex-start" sx={{ mb: 3 }}>
                    <Box 
                      sx={{ 
                        p: 1.5, 
                        borderRadius: '12px', 
                        backgroundColor: mode === 'dark' ? 'rgba(99, 102, 241, 0.08)' : 'rgba(79, 70, 229, 0.08)',
                        color: 'primary.main',
                        display: 'flex'
                      }}
                    >
                      <School sx={{ fontSize: 24 }} />
                    </Box>
                    <Box>
                      <Typography 
                        variant="h5" 
                        sx={{ 
                          fontSize: '1.25rem', 
                          fontWeight: 700, 
                          fontFamily: "'Outfit', sans-serif",
                          color: 'text.primary',
                          mb: 0.5
                        }}
                      >
                        {edu.institution}
                      </Typography>
                      <Stack direction="row" spacing={0.5} alignItems="center" sx={{ color: 'text.secondary', fontSize: '0.85rem' }}>
                        <Place sx={{ fontSize: 14 }} />
                        <Typography variant="caption">{edu.location}</Typography>
                      </Stack>
                    </Box>
                  </Stack>

                  {/* Degree Name */}
                  <Typography variant="subtitle1" color="primary.main" sx={{ fontWeight: 600, mb: 1.5 }}>
                    {edu.degree}
                  </Typography>

                  {/* Description */}
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 4, flexGrow: 1 }}>
                    {edu.description}
                  </Typography>

                  {/* Stats Footer (Dates, Scores) */}
                  <Box 
                    sx={{ 
                      pt: 2.5, 
                      borderTop: '1px solid', 
                      borderColor: 'divider',
                      display: 'flex',
                      flexWrap: 'wrap',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: 2
                    }}
                  >
                    <Stack direction="row" spacing={1} alignItems="center" sx={{ color: 'text.secondary' }}>
                      <CalendarMonth sx={{ fontSize: 16 }} />
                      <Typography variant="caption" sx={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 500 }}>
                        {edu.duration}
                      </Typography>
                    </Stack>
                    
                    <Stack direction="row" spacing={0.75} alignItems="center">
                      <Grade sx={{ fontSize: 16, color: 'secondary.main' }} />
                      <Typography 
                        variant="subtitle2" 
                        sx={{ 
                          fontFamily: "'JetBrains Mono', monospace", 
                          fontWeight: 700, 
                          color: 'secondary.main' 
                        }}
                      >
                        {edu.grade}
                      </Typography>
                    </Stack>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
