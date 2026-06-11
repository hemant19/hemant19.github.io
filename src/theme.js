import { createTheme } from '@mui/material/styles';

const baseTypography = {
  fontFamily: "'Plus Jakarta Sans', sans-serif",
  h1: {
    fontFamily: "'Outfit', sans-serif",
    fontWeight: 800,
  },
  h2: {
    fontFamily: "'Outfit', sans-serif",
    fontWeight: 700,
  },
  h3: {
    fontFamily: "'Outfit', sans-serif",
    fontWeight: 700,
  },
  h4: {
    fontFamily: "'Outfit', sans-serif",
    fontWeight: 600,
  },
  h5: {
    fontFamily: "'Outfit', sans-serif",
    fontWeight: 600,
  },
  h6: {
    fontFamily: "'Outfit', sans-serif",
    fontWeight: 600,
  },
  subtitle1: {
    fontWeight: 500,
  },
  subtitle2: {
    fontWeight: 500,
  },
  button: {
    fontFamily: "'Outfit', sans-serif",
    textTransform: 'none',
    fontWeight: 600,
    borderRadius: 8,
  },
  body1: {
    lineHeight: 1.7,
  },
  body2: {
    lineHeight: 1.6,
  },
};

export const getTheme = (mode) => {
  return createTheme({
    palette: {
      mode,
      primary: {
        main: mode === 'dark' ? '#818cf8' : '#4f46e5', // indigo
        light: mode === 'dark' ? '#c7d2fe' : '#e0e7ff',
        dark: mode === 'dark' ? '#4f46e5' : '#3730a3',
      },
      secondary: {
        main: mode === 'dark' ? '#34d399' : '#059669', // emerald (uptime, speed)
        light: mode === 'dark' ? '#a7f3d0' : '#d1fae5',
        dark: mode === 'dark' ? '#059669' : '#047857',
      },
      background: {
        default: mode === 'dark' ? '#0b0f19' : '#f8fafc',
        paper: mode === 'dark' ? '#111827' : '#ffffff',
      },
      text: {
        primary: mode === 'dark' ? '#f8fafc' : '#0f172a',
        secondary: mode === 'dark' ? '#94a3b8' : '#475569',
      },
      divider: mode === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
      action: {
        hover: mode === 'dark' ? 'rgba(255, 255, 255, 0.04)' : 'rgba(0, 0, 0, 0.04)',
      },
    },
    typography: baseTypography,
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            boxShadow: 'none',
            '&:hover': {
              boxShadow: 'none',
            },
          },
          containedPrimary: {
            '&:hover': {
              backgroundColor: mode === 'dark' ? '#6366f1' : '#4338ca',
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
            borderRadius: 16,
            border: mode === 'dark' ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid rgba(0, 0, 0, 0.08)',
            boxShadow: 'none',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            '&:hover': {
              borderColor: mode === 'dark' ? 'rgba(129, 140, 248, 0.4)' : 'rgba(79, 70, 229, 0.4)',
              boxShadow: mode === 'dark' 
                ? '0 12px 30px -10px rgba(0, 0, 0, 0.5), 0 0 20px -5px rgba(99, 102, 241, 0.15)' 
                : '0 12px 30px -10px rgba(0, 0, 0, 0.05), 0 0 20px -5px rgba(79, 70, 229, 0.05)',
            },
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            fontWeight: 500,
            borderRadius: 8,
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            boxShadow: 'none',
            backgroundImage: 'none',
            backgroundColor: mode === 'dark' ? 'rgba(11, 15, 25, 0.85)' : 'rgba(248, 250, 252, 0.85)',
            backdropFilter: 'blur(12px)',
            borderBottom: mode === 'dark' ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid rgba(0, 0, 0, 0.08)',
          },
        },
      },
    },
  });
};
