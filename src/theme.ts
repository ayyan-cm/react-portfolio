import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    custom: {
      gradients: {
        primary: string;
        secondary: string;
      };
    };
  }
  interface ThemeOptions {
    custom?: {
      gradients?: {
        primary?: string;
        secondary?: string;
      };
    };
  }
}

export const createAppTheme = (darkMode: boolean) =>
  createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: darkMode ? "#ffffff" : "#2563eb", // Bright blue for light mode
        light: darkMode ? "#f5f5f5" : "#60a5fa", // Lighter blue
        dark: darkMode ? "#e0e0e0" : "#1d4ed8", // Darker blue
      },
      secondary: {
        main: darkMode ? "#64b5f6" : "#0ea5e9", // Sky blue for light mode
        light: darkMode ? "#90caf9" : "#38bdf8", // Lighter sky blue
        dark: darkMode ? "#42a5f5" : "#0284c7", // Darker sky blue
      },
      background: {
        default: darkMode ? "#0a0a0a" : "#f8fafc", // Very light blue-grey
        paper: darkMode ? "#121212" : "#ffffff",
      },
      text: {
        primary: darkMode ? "#ffffff" : "#1e293b", // Slate-900 for better contrast
        secondary: darkMode ? "#b3b3b3" : "#475569", // Slate-600 for secondary text
      },
      divider: darkMode ? "#1e1e1e" : "#e2e8f0", // Slate-200 for subtle dividers
    },
    typography: {
      fontFamily: [
        "Roboto",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
      ].join(","),
      h1: {
        fontSize: "3.5rem",
        fontWeight: 700,
        lineHeight: 1.2,
        "@media (max-width:768px)": {
          fontSize: "2.5rem",
        },
      },
      h2: {
        fontSize: "2.5rem",
        fontWeight: 600,
        lineHeight: 1.3,
        "@media (max-width:768px)": {
          fontSize: "2rem",
        },
      },
      h3: {
        fontSize: "2rem",
        fontWeight: 600,
        lineHeight: 1.4,
        "@media (max-width:768px)": {
          fontSize: "1.5rem",
        },
      },
      h4: {
        fontSize: "1.5rem",
        fontWeight: 500,
        lineHeight: 1.4,
        "@media (max-width:768px)": {
          fontSize: "1.25rem",
        },
      },
      h5: {
        fontSize: "1.25rem",
        fontWeight: 500,
        lineHeight: 1.4,
      },
      h6: {
        fontSize: "1rem",
        fontWeight: 500,
        lineHeight: 1.4,
      },
      body1: {
        fontSize: "1rem",
        fontWeight: 400,
        lineHeight: 1.6,
      },
      body2: {
        fontSize: "0.875rem",
        fontWeight: 400,
        lineHeight: 1.6,
      },
    },
    spacing: 8,
    custom: {
      gradients: {
        primary: darkMode
          ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
          : "linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)", // Blue gradient for light mode
        secondary: darkMode
          ? "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
          : "linear-gradient(135deg, #60A5FA 0%, #3B82F6 100%)", // Lighter blue gradient
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            margin: 0,
            padding: 0,
            boxSizing: "border-box",
            scrollBehavior: "smooth",
            "&::-webkit-scrollbar": {
              width: "8px",
            },
            "&::-webkit-scrollbar-track": {
              background: darkMode ? "#0a0a0a" : "#F3F4F6", // Scrollbar track for light mode
            },
            "&::-webkit-scrollbar-thumb": {
              background: darkMode ? "#333" : "#D1D5DB", // Scrollbar thumb for light mode
              borderRadius: "4px",
            },
            "&::-webkit-scrollbar-thumb:hover": {
              background: darkMode ? "#555" : "#9CA3AF", // Scrollbar thumb hover for light mode
            },
          },
          "@font-face": [
            {
              fontFamily: "Roboto",
              fontDisplay: "swap",
              src: 'url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap")',
            },
          ],
        },
      },
      MuiContainer: {
        styleOverrides: {
          root: {
            paddingLeft: "16px",
            paddingRight: "16px",
            "@media (min-width: 768px)": {
              paddingLeft: "24px",
              paddingRight: "24px",
            },
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: "20px",
            fontWeight: 500,
            transition: "all 0.3s ease",
            "&:hover": {
              transform: "translateY(-2px)",
              boxShadow: "0 4px 20px rgba(100, 181, 246, 0.3)",
            },
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            transition: "all 0.3s ease",
            "&:hover": {
              transform: "scale(1.1)",
              backgroundColor: darkMode
                ? "rgba(100, 181, 246, 0.1)"
                : "rgba(59, 130, 246, 0.08)", // Adjusted hover for light mode
            },
          },
        },
      },
    },
  });

export default createAppTheme;
