import React, { useState } from 'react';
import { Box, Typography, Container, Card, CardContent, Grid, Chip, Collapse, IconButton, Button, Stack, useTheme } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { ExpandMore, Business, CalendarMonth, Room, BarChart, SettingsEthernet } from '@mui/icons-material';
import { portfolioData } from '../data';

export default function Experience({ mode }) {
  const theme = useTheme();
  const { experience } = portfolioData;
  
  // State to track expanded experience cards (all open by default)
  const [expandedStates, setExpandedStates] = useState({
    0: true,
    1: true,
    2: true,
    3: true
  });
  // State for filtering by tech stack
  const [activeFilter, setActiveFilter] = useState(null);

  // Extract all unique technologies from all jobs for filter chips
  const allTech = Array.from(
    new Set(experience.reduce((acc, job) => [...acc, ...job.techStack], []))
  ).sort();

  const handleExpandClick = (index) => {
    setExpandedStates(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const handleTechClick = (tech) => {
    setActiveFilter(activeFilter === tech ? null : tech);
  };

  return (
    <Box 
      component="section" 
      id="experience" 
      sx={{ 
        py: { xs: 8, md: 12 },
        scrollMarginTop: '80px'
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box sx={{ mb: 6, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: { xs: 'flex-start', md: 'flex-end' }, gap: 2 }}>
          <Box>
            <Typography 
              variant="overline" 
              sx={{ 
                fontFamily: "'JetBrains Mono', monospace", 
                color: 'primary.main', 
                fontWeight: 700,
                letterSpacing: '0.15em'
              }}
            >
              DEPLOYMENT TIMELINE
            </Typography>
            <Typography 
              variant="h2" 
              sx={{ 
                fontSize: { xs: '2.25rem', md: '3rem' }, 
                fontWeight: 800, 
                fontFamily: "'Outfit', sans-serif",
                mt: 0.5
              }}
            >
              Professional Experience
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary" sx={{ maxWidth: '400px' }}>
            A track record of engineering, scaling, and qualifying high-throughput, low-latency backends for global leaders.
          </Typography>
        </Box>

        {/* Tech Filter Chips */}
        <Box sx={{ mb: 6 }}>
          <Typography 
            variant="subtitle2" 
            sx={{ 
              mb: 2, 
              fontFamily: "'JetBrains Mono', monospace", 
              fontWeight: 600, 
              fontSize: '0.8rem',
              color: 'text.secondary' 
            }}
          >
            FILTER DEPLOYMENTS BY TECHNOLOGY:
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {allTech.map((tech) => {
              const isSelected = activeFilter === tech;
              return (
                <Chip
                  key={tech}
                  label={tech}
                  onClick={() => handleTechClick(tech)}
                  color={isSelected ? "primary" : "default"}
                  variant={isSelected ? "contained" : "outlined"}
                  sx={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.75rem',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    borderColor: isSelected 
                      ? 'primary.main' 
                      : mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
                    '&:hover': {
                      backgroundColor: isSelected ? 'primary.dark' : 'action.hover',
                      transform: 'translateY(-1px)'
                    }
                  }}
                />
              );
            })}
          </Box>
        </Box>

        {/* Timeline List */}
        <Box sx={{ position: 'relative' }}>
          {/* Vertical Timeline Bar */}
          <Box 
            sx={{ 
              position: 'absolute',
              left: { xs: 15, md: 30 },
              top: 10,
              bottom: 10,
              width: '2px',
              background: mode === 'dark' 
                ? 'linear-gradient(to bottom, #818cf8 0%, rgba(99, 102, 241, 0.05) 100%)' 
                : 'linear-gradient(to bottom, #4f46e5 0%, rgba(79, 70, 229, 0.05) 100%)',
              zIndex: 1
            }}
          />

          <Stack spacing={4}>
            {experience.map((job, index) => {
              // Check if filter matches
              const matchesFilter = activeFilter ? job.techStack.includes(activeFilter) : true;
              const isExpanded = !!expandedStates[index];

              return (
                <Box 
                  key={index} 
                  component={motion.div}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: matchesFilter ? 1 : 0.25, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  sx={{ 
                    position: 'relative',
                    pl: { xs: 5, md: 8 },
                    zIndex: 2,
                    transition: 'opacity 0.3s ease'
                  }}
                >
                  {/* Timeline Dot Indicator */}
                  <Box 
                    sx={{ 
                      position: 'absolute',
                      left: { xs: 6, md: 21 },
                      top: 24,
                      width: 20,
                      height: 20,
                      borderRadius: '50%',
                      backgroundColor: 'background.default',
                      border: '3px solid',
                      borderColor: job.isCurrent 
                        ? 'secondary.main' 
                        : (matchesFilter && activeFilter) ? 'primary.main' : 'divider',
                      boxShadow: job.isCurrent ? `0 0 10px ${theme.palette.secondary.main}` : 'none',
                      zIndex: 3,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'border-color 0.3s'
                    }}
                  >
                    {job.isCurrent && (
                      <Box 
                        sx={{ 
                          width: 8, 
                          height: 8, 
                          borderRadius: '50%', 
                          backgroundColor: 'secondary.main' 
                        }} 
                      />
                    )}
                  </Box>

                  {/* Main Experience Card */}
                  <Card 
                    sx={{ 
                      backgroundColor: isExpanded 
                        ? (mode === 'dark' ? 'rgba(30, 41, 59, 0.4)' : '#ffffff') 
                        : 'background.paper',
                      borderColor: matchesFilter && activeFilter ? 'primary.main' : 'divider',
                      borderWidth: matchesFilter && activeFilter ? 2 : 1
                    }}
                  >
                    <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                      {/* Grid structure: header & metadata */}
                      <Grid container spacing={2} alignItems="flex-start" sx={{ mb: 2.5 }}>
                        <Grid item xs={12} sm={8}>
                          <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 0.5 }}>
                            <Typography 
                              variant="h4" 
                              sx={{ 
                                fontSize: { xs: '1.25rem', sm: '1.5rem' }, 
                                fontWeight: 700, 
                                color: 'text.primary',
                                fontFamily: "'Outfit', sans-serif" 
                              }}
                            >
                              {job.company}
                            </Typography>
                            {job.isCurrent && (
                              <Chip 
                                label="Current" 
                                color="secondary" 
                                size="small" 
                                sx={{ 
                                  fontFamily: "'JetBrains Mono', monospace", 
                                  fontSize: '0.65rem',
                                  fontWeight: 600
                                }}
                              />
                            )}
                          </Stack>
                          <Typography variant="subtitle1" color="primary" sx={{ fontWeight: 600 }}>
                            {job.role} <Typography component="span" variant="body2" color="text.secondary">| {job.division}</Typography>
                          </Typography>
                        </Grid>
                        
                        <Grid item xs={12} sm={4} sx={{ textAlign: { sm: 'right' } }}>
                          <Stack 
                            direction="column" 
                            spacing={0.5} 
                            alignItems={{ xs: 'flex-start', sm: 'flex-end' }}
                            sx={{ color: 'text.secondary', fontSize: '0.85rem' }}
                          >
                            <Stack direction="row" spacing={0.5} alignItems="center">
                              <CalendarMonth sx={{ fontSize: 16 }} />
                              <Typography variant="body2">{job.duration}</Typography>
                            </Stack>
                            <Stack direction="row" spacing={0.5} alignItems="center">
                              <Room sx={{ fontSize: 16 }} />
                              <Typography variant="body2">{job.location}</Typography>
                            </Stack>
                          </Stack>
                        </Grid>
                      </Grid>

                      {/* Brief Summary */}
                      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                        {job.summary}
                      </Typography>

                      {/* Architecture Metrics Dashboard */}
                      <Box sx={{ mb: 3, p: 2, borderRadius: 3, backgroundColor: mode === 'dark' ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.01)', border: '1px solid', borderColor: 'divider' }}>
                        <Grid container spacing={2}>
                          {job.highlights.map((highlight, hIdx) => (
                            <Grid item xs={6} sm={3} key={hIdx}>
                              <Stack spacing={0.5} align="left">
                                <Typography variant="caption" sx={{ textTransform: 'uppercase', letterSpacing: '0.05em', color: 'text.secondary', fontWeight: 600, fontSize: '0.7rem' }}>
                                  {highlight.label}
                                </Typography>
                                <Typography variant="body1" sx={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, color: 'text.primary' }}>
                                  {highlight.value}
                                </Typography>
                              </Stack>
                            </Grid>
                          ))}
                        </Grid>
                      </Box>

                      {/* Collapsible Details */}
                      <Collapse in={isExpanded} timeout="auto" unmountOnExit>
                        <Box sx={{ mt: 3, mb: 4, pl: { xs: 0, sm: 2 } }}>
                          <Typography 
                            variant="subtitle2" 
                            sx={{ 
                              mb: 2, 
                              fontFamily: "'JetBrains Mono', monospace", 
                              fontSize: '0.8rem',
                              color: 'primary.main',
                              fontWeight: 600 
                            }}
                          >
                            // SYSTEM ARCHITECTURE & IMPACT:
                          </Typography>
                          <Stack component="ul" spacing={1.5} sx={{ pl: 2, color: 'text.secondary', fontSize: '0.92rem' }}>
                            {job.details.map((detail, dIdx) => (
                              <Typography 
                                component="li" 
                                key={dIdx} 
                                variant="body2" 
                                sx={{ 
                                  listStyleType: 'square',
                                  '&::marker': {
                                    color: 'primary.main'
                                  }
                                }}
                              >
                                {detail}
                              </Typography>
                            ))}
                          </Stack>
                        </Box>
                      </Collapse>

                      {/* Divider for tech stack */}
                      <Box sx={{ mt: 3, pt: 2.5, borderTop: '1px solid', borderColor: 'divider', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
                        {/* Technologies Tags */}
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                          {job.techStack.map((tech) => (
                            <Chip
                              key={tech}
                              label={tech}
                              size="small"
                              sx={{
                                fontFamily: "'JetBrains Mono', monospace",
                                fontSize: '0.7rem',
                                backgroundColor: activeFilter === tech 
                                  ? 'primary.main' 
                                  : mode === 'dark' ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.03)',
                                color: activeFilter === tech 
                                  ? '#ffffff' 
                                  : 'text.secondary',
                                border: '1px solid',
                                borderColor: activeFilter === tech ? 'primary.main' : 'divider'
                              }}
                            />
                          ))}
                        </Box>

                        {/* Expand/Collapse Button */}
                        <Button
                          size="small"
                          color="inherit"
                          onClick={() => handleExpandClick(index)}
                          endIcon={
                            <ExpandMore 
                              sx={{ 
                                transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                                transition: 'transform 0.3s'
                              }} 
                            />
                          }
                          sx={{ 
                            fontFamily: "'JetBrains Mono', monospace", 
                            fontSize: '0.75rem',
                            color: 'primary.main',
                            '&:hover': {
                              backgroundColor: 'action.hover'
                            }
                          }}
                        >
                          {isExpanded ? 'Hide Details' : 'View Architecture & Impact'}
                        </Button>
                      </Box>
                    </CardContent>
                  </Card>
                </Box>
              );
            })}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
