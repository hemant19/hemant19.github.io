import React, { useState, useRef, useEffect } from 'react';
import { Box, Typography, Container, Button, Paper, TextField, IconButton, Stack, Chip } from '@mui/material';
import { Terminal as TerminalIcon, Close, PlayArrow, FiberManualRecord } from '@mui/icons-material';
import { portfolioData } from '../data';

// ASCII Art Header
const ASCII_ART = `
  _     _     _                               
 | |   | |   | |                              
 | |___| |__ | |__   ___  _   _  __ _ _ __    
 |  ___| '_ \\| '_ \\ / _ \\| | | |/ _\` | '__|   
 | |   | | | | |_) | (_) | |_| | (_| | |      
 \\_|   |_| |_|_.__/ \\___/ \\__, |\\__,_|_|      
                           __/ |              
                          |___/               
 SYSTEM INTERACTIVE CONSOLE v1.0 // SHELL: BSH
`;

const COMMANDS = ['help', 'about', 'skills', 'experience', 'education', 'contact', 'clear', 'sudo'];

export default function Terminal({ mode }) {
  const [history, setHistory] = useState([
    { text: ASCII_ART, isCommand: false, type: 'ascii' },
    { text: 'Type "help" or click one of the quick command buttons below.', isCommand: false, type: 'info' }
  ]);
  const [inputVal, setInputVal] = useState('');
  const terminalEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto scroll to bottom when terminal output updates
  useEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history]);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleCommand = (cmdStr) => {
    const trimmed = cmdStr.trim().toLowerCase();
    if (!trimmed) return;

    const newHistory = [...history, { text: `hbhoyar@terminal:~$ ${cmdStr}`, isCommand: true }];

    let response = '';
    let responseType = 'output';

    switch (trimmed) {
      case 'help':
        response = `Available commands:
  about      - Display background summary of the software engineer
  skills     - View categorized technical skills and technologies
  experience - Show list of organizations deployed at (Google, Atlassian, etc.)
  education  - Detail university degrees and academic stats
  contact    - Print system contact endpoints (email, phone, LinkedIn)
  clear      - Wipe terminal console log history
  sudo       - Trigger system override credentials`;
        break;

      case 'about':
        response = `NAME: Hemant Bhoyar
ROLE: Senior Software Engineer & Tech Lead
LOCATION: Bangalore, India (Formerly Amsterdam, Netherlands)
CORE FOCUS: High-throughput distributed data movement, query engines, search reliability.
CURRENT DEPLOYMENT: Google Search Platform (Query Result Service).
SUMMARY: Tech lead with 10+ years of experience building scalable systems. Expert at scaling stateful streaming pipelines (1.5M events/s) and core search queries (100K QPS, 10ms latency).`;
        break;

      case 'skills':
        response = `TECHNICAL SKILL MATRIX:
=========================================
LANGUAGES:
  - Java (Expert), C++, Perl, SQL, JavaScript (React)
  
DISTRIBUTED SYSTEMS:
  - Apache Flink, Kafka, Google Dataflow, Microservices, API Design
  
INFRASTRUCTURE / DATA:
  - Kubernetes, Docker, GKE, Cassandra, MySQL, ELK Stack, Maven, Git
  
METHODOLOGIES:
  - Data Structures & Algorithms, Test Driven Development (TDD), Application Security`;
        break;

      case 'experience':
        response = `PROFESSIONAL DEPLOYMENTS:
=========================================
[1] GOOGLE // Senior Software Engineer & Tech Lead (July 2024 - Present)
    - Query Result Service (QRS) powering AI-mode search.
    - Scale: 100K QPS, 10ms Latency SLA. Leading 6 engineers.
    
[2] ATLASSIAN // Senior Software Engineer & Tech Lead (June 2020 - June 2024)
    - Jira Migrations platform.
    - Migrated Splunk, CBA, Wawanessa to Atlassian Cloud.
    
[3] BOOKING.COM // Software Developer (August 2018 - June 2020)
    - Security Data Pipeline (1.5M events/second, Apache Flink + Kafka).
    - Rate Limiting Java microservice (40K-200K requests/second, Cassandra).
    
[4] BARCLAYS // Software Developer (June 2015 - July 2018)
    - BarclaycardUS credit rewards platform. Spring APIs + React frontend.
    - Scale: 6M active users, 80K daily logins.`;
        break;

      case 'education':
        response = `ACADEMIC DEPLOYMENTS:
=========================================
* B.Tech in Computer Science & Engineering
  Visvesvaraya National Institute of Technology (VNIT), Nagpur
  Graduated: 2015 // GPA: 7.7/10
  
* Higher Secondary Certificate (HSC)
  Dr. D. Y. Patil ACS College, Pune
  Graduated: 2011 // Score: 86.5%`;
        break;

      case 'contact':
        response = `SYSTEM ENDPOINTS:
=========================================
  Email:    hybhoyar@gmail.com
  Phone:    +91 8793714424
  LinkedIn: linkedin.com/in/hemant-bhoyar
  GitHub:   github.com/hemant19`;
        break;

      case 'sudo':
        response = `[ACCESS DENIED] User 'guest' is not in the sudoers file. This incident will be reported.`;
        responseType = 'error';
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      default:
        response = `command not found: ${trimmed}. Type 'help' to see system commands.`;
        responseType = 'error';
    }

    setHistory([...newHistory, { text: response, isCommand: false, type: responseType }]);
    setInputVal('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
    }
  };

  return (
    <Box 
      component="section" 
      id="terminal" 
      sx={{ 
        py: { xs: 8, md: 10 },
        scrollMarginTop: '80px'
      }}
    >
      <Container maxWidth="md">
        {/* Section Title */}
        <Box sx={{ mb: 4, textAlign: 'center' }}>
          <Typography 
            variant="h2" 
            sx={{ 
              fontSize: { xs: '2rem', md: '2.5rem' }, 
              fontWeight: 800, 
              mb: 1,
              fontFamily: "'Outfit', sans-serif" 
            }}
          >
            System Console Terminal
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Interact with the portfolio using standard command lines or click the pre-defined commands.
          </Typography>
        </Box>

        {/* Mock Terminal Shell */}
        <Paper
          onClick={focusInput}
          sx={{
            backgroundColor: '#05070c',
            border: '1px solid rgba(99, 102, 241, 0.25)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.4)',
            borderRadius: '12px',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            minHeight: '400px',
            maxHeight: '500px',
            cursor: 'text',
          }}
        >
          {/* Terminal Window Header */}
          <Box 
            sx={{ 
              backgroundColor: '#0d131f', 
              px: 2, 
              py: 1, 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-between',
              borderBottom: '1px solid rgba(99, 102, 241, 0.15)'
            }}
          >
            <Stack direction="row" spacing={1} alignItems="center">
              <FiberManualRecord sx={{ fontSize: 13, color: '#ef4444' }} />
              <FiberManualRecord sx={{ fontSize: 13, color: '#f59e0b' }} />
              <FiberManualRecord sx={{ fontSize: 13, color: '#10b981' }} />
            </Stack>
            
            <Stack direction="row" spacing={1} alignItems="center">
              <TerminalIcon sx={{ fontSize: 16, color: '#818cf8' }} />
              <Typography 
                variant="caption" 
                sx={{ 
                  color: '#94a3b8', 
                  fontFamily: "'JetBrains Mono', monospace", 
                  fontWeight: 500 
                }}
              >
                guest@hbhoyar-sh: ~
              </Typography>
            </Stack>

            <Box sx={{ width: 45 }} /> {/* Spacer */}
          </Box>

          {/* Terminal Screen Body */}
          <Box 
            sx={{ 
              flexGrow: 1, 
              p: 2.5, 
              overflowY: 'auto', 
              display: 'flex', 
              flexDirection: 'column', 
              gap: 1.5,
            }}
            className="dark-scroll"
          >
            {history.map((log, i) => (
              <Typography
                key={i}
                component="pre"
                sx={{
                  margin: 0,
                  whiteSpace: 'pre-wrap',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.85rem',
                  lineHeight: 1.5,
                  color: log.isCommand 
                    ? '#ffffff' 
                    : log.type === 'error' 
                      ? '#f87171' 
                      : log.type === 'ascii' 
                        ? '#818cf8' 
                        : '#34d399',
                }}
              >
                {log.text}
              </Typography>
            ))}
            <div ref={terminalEndRef} />
          </Box>

          {/* Terminal Input Row */}
          <Box 
            sx={{ 
              p: 2, 
              backgroundColor: '#0d131f', 
              borderTop: '1px solid rgba(99, 102, 241, 0.15)',
              display: 'flex',
              alignItems: 'center',
              gap: 1
            }}
          >
            <Typography 
              sx={{ 
                color: '#818cf8', 
                fontFamily: "'JetBrains Mono', monospace", 
                fontSize: '0.9rem',
                fontWeight: 600
              }}
            >
              hbhoyar@terminal:~$
            </Typography>
            
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyPress}
              autoComplete="off"
              autoCapitalize="off"
              spellCheck="false"
              style={{
                backgroundColor: 'transparent',
                border: 'none',
                outline: 'none',
                color: '#ffffff',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.9rem',
                flexGrow: 1,
                caretColor: '#34d399'
              }}
            />
            
            <IconButton 
              size="small" 
              onClick={() => handleCommand(inputVal)}
              sx={{ color: '#34d399', p: 0.5 }}
            >
              <PlayArrow sx={{ fontSize: 18 }} />
            </IconButton>
          </Box>
        </Paper>

        {/* Quick Click Commands */}
        <Box sx={{ mt: 2.5, display: 'flex', flexWrap: 'wrap', gap: 1.5, justifyContent: 'center', alignItems: 'center' }}>
          <Typography variant="body2" color="text.secondary" sx={{ mr: 1, fontFamily: "'JetBrains Mono', monospace", fontSize: '0.8rem' }}>
            Quick Commands:
          </Typography>
          {COMMANDS.map((cmd) => (
            <Chip
              key={cmd}
              label={cmd}
              onClick={() => handleCommand(cmd)}
              icon={<TerminalIcon sx={{ fontSize: 13 }} />}
              sx={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.78rem',
                backgroundColor: mode === 'dark' ? 'rgba(99, 102, 241, 0.08)' : 'rgba(79, 70, 229, 0.05)',
                border: '1px solid',
                borderColor: mode === 'dark' ? 'rgba(99, 102, 241, 0.2)' : 'rgba(79, 70, 229, 0.15)',
                color: mode === 'dark' ? '#c7d2fe' : '#4945b3',
                cursor: 'pointer',
                transition: 'all 0.2s',
                '&:hover': {
                  backgroundColor: mode === 'dark' ? 'rgba(99, 102, 241, 0.18)' : 'rgba(79, 70, 229, 0.1)',
                  borderColor: 'primary.main',
                  transform: 'scale(1.03)'
                }
              }}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
}
