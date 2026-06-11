import React, { useState } from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, Chip, Stack, useTheme } from '@mui/material';
import { Code, SettingsInputComponent, Storage, Security, KeyboardDoubleArrowRight } from '@mui/icons-material';
import { portfolioData } from '../data';
import { motion } from 'framer-motion';

export default function Skills({ mode }) {
  const theme = useTheme();
  const { skills } = portfolioData;

  // We can maps skills to companies they were used in to show an interactive relationship
  const skillUsage = {
    "Java": ["Google", "Atlassian", "Booking.com", "Barclays"],
    "Apache Flink": ["Booking.com"],
    "Kafka": ["Booking.com"],
    "Kubernetes": ["Atlassian", "Booking.com"],
    "Google Dataflow": ["Google"],
    "Docker": ["Atlassian", "Booking.com"],
    "Spring Framework": ["Atlassian", "Barclays"],
    "Cassandra": ["Booking.com"],
    "MySQL": ["Atlassian", "Barclays"],
    "ReactJS": ["Barclays"],
    "JavaScript (React)": ["Barclays"],
    "Perl": ["Booking.com"],
    "C++": ["Google"],
    "ELK Stack": ["Booking.com"],
    "Application Security": ["Google", "Booking.com"],
    "Data Structures & Algorithms": ["Google", "Atlassian", "Booking.com", "Barclays"],
    "Web API Design": ["Google", "Atlassian", "Booking.com", "Barclays"],
    "Test Driven Development (TDD)": ["Booking.com"],
    "Maven": ["Atlassian", "Booking.com", "Barclays"],
    "Git": ["Google", "Atlassian", "Booking.com", "Barclays"],
  };

  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skillCategories = [
    {
      title: "Languages",
      icon: <Code sx={{ color: 'primary.main' }} />,
      list: skills.languages,
      description: "Core programming languages used to build high-scale query engines and stateful microservices."
    },
    {
      title: "Distributed Systems & Data",
      icon: <SettingsInputComponent sx={{ color: 'secondary.main' }} />,
      list: skills.distributedSystems,
      description: "Distributed frameworks for stream processing, event queues, and high-throughput query aggregation."
    },
    {
      title: "Infrastructure & Platform",
      icon: <Storage sx={{ color: 'primary.main' }} />,
      list: skills.infrastructure,
      description: "Containerization, orchestration engines, distributed databases, build systems, and version control."
    },
    {
      title: "Methodologies & Security",
      icon: <Security sx={{ color: 'secondary.main' }} />,
      list: skills.methodologies,
      description: "Architectural patterns, test-driven paradigms, data structures, and application threat mitigation."
    }
  ];

  return (
    <Box 
      component="section" 
      id="skills" 
      sx={{ 
        py: { xs: 8, md: 12 },
        backgroundColor: mode === 'dark' ? 'rgba(17, 24, 39, 0.2)' : 'rgba(241, 245, 249, 0.4)',
        borderTop: '1px solid',
        borderBottom: '1px solid',
        borderColor: 'divider',
        scrollMarginTop: '80px'
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ mb: 8, textAlign: 'center' }}>
          <Typography 
            variant="overline" 
            sx={{ 
              fontFamily: "'JetBrains Mono', monospace", 
              color: 'secondary.main', 
              fontWeight: 700,
              letterSpacing: '0.15em'
            }}
          >
            TECHNICAL CAPABILITIES
          </Typography>
          <Typography 
            variant="h2" 
            sx={{ 
              fontSize: { xs: '2.25rem', md: '3rem' }, 
              fontWeight: 800, 
              fontFamily: "'Outfit', sans-serif",
              mt: 0.5,
              mb: 2
            }}
          >
            Skills & Technology Matrix
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '600px', mx: 'auto' }}>
            Hover or click on a technology tag to highlight where it was deployed in Hemant's career timeline.
          </Typography>
        </Box>

        {/* Skill Category Cards */}
        <Grid container spacing={4}>
          {skillCategories.map((category, catIdx) => (
            <Grid item xs={12} md={6} key={catIdx}>
              <Card 
                sx={{ 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: 'background.paper',
                  position: 'relative',
                  overflow: 'visible'
                }}
              >
                <CardContent sx={{ p: 4, flexGrow: 1 }}>
                  {/* Category Header */}
                  <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 2 }}>
                    {category.icon}
                    <Typography 
                      variant="h5" 
                      sx={{ 
                        fontSize: '1.25rem', 
                        fontWeight: 700, 
                        fontFamily: "'Outfit', sans-serif" 
                      }}
                    >
                      {category.title}
                    </Typography>
                  </Stack>
                  
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                    {category.description}
                  </Typography>

                  {/* Skills Grid */}
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.25 }}>
                    {category.list.map((skill) => {
                      const isHovered = hoveredSkill === skill;
                      const deployments = skillUsage[skill] || [];
                      
                      return (
                        <Box 
                          key={skill}
                          onMouseEnter={() => setHoveredSkill(skill)}
                          onMouseLeave={() => setHoveredSkill(null)}
                          onClick={() => setHoveredSkill(hoveredSkill === skill ? null : skill)}
                          sx={{ position: 'relative' }}
                        >
                          <Chip
                            label={skill}
                            sx={{
                              fontFamily: "'JetBrains Mono', monospace",
                              fontSize: '0.8rem',
                              fontWeight: 500,
                              py: 0.5,
                              px: 0.75,
                              cursor: 'pointer',
                              backgroundColor: isHovered 
                                ? 'primary.main' 
                                : mode === 'dark' ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.03)',
                              color: isHovered ? '#ffffff' : 'text.primary',
                              border: '1px solid',
                              borderColor: isHovered ? 'primary.main' : 'divider',
                              transition: 'all 0.2s ease',
                              '&:hover': {
                                transform: 'scale(1.05)',
                                backgroundColor: isHovered ? 'primary.main' : 'action.hover'
                              }
                            }}
                          />
                          
                          {/* Mini Deployments Tooltip */}
                          {isHovered && deployments.length > 0 && (
                            <Box
                              component={motion.div}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              sx={{
                                position: 'absolute',
                                bottom: '130%',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                zIndex: 100,
                                backgroundColor: '#1e293b',
                                color: '#f8fafc',
                                border: '1px solid rgba(255,255,255,0.15)',
                                borderRadius: '8px',
                                p: 1.5,
                                width: '200px',
                                boxShadow: '0 10px 20px rgba(0,0,0,0.3)',
                                pointerEvents: 'none',
                                textAlign: 'left'
                              }}
                            >
                              <Typography 
                                variant="caption" 
                                sx={{ 
                                  display: 'block', 
                                  fontFamily: "'JetBrains Mono', monospace", 
                                  color: '#818cf8',
                                  fontWeight: 700, 
                                  borderBottom: '1px solid rgba(255,255,255,0.1)',
                                  pb: 0.5,
                                  mb: 0.75,
                                  textTransform: 'uppercase'
                                }}
                              >
                                Deployed At:
                              </Typography>
                              <Stack spacing={0.5}>
                                {deployments.map((comp) => (
                                  <Stack direction="row" spacing={0.5} alignItems="center" key={comp}>
                                    <KeyboardDoubleArrowRight sx={{ fontSize: 12, color: '#34d399' }} />
                                    <Typography variant="caption" sx={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500 }}>
                                      {comp}
                                    </Typography>
                                  </Stack>
                                ))}
                              </Stack>
                            </Box>
                          )}
                        </Box>
                      );
                    })}
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
