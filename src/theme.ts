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
        main: darkMode ? "#ffffff" : "#1a1a1a",
        light: darkMode ? "#f5f5f5" : "#333333",
        dark: darkMode ? "#e0e0e0" : "#000000",
      },
      secondary: {
        main: "#64b5f6",
        light: "#90caf9",
        dark: "#42a5f5",
      },
      background: {
        default: darkMode ? "#0a0a0a" : "#ffffff",
        paper: darkMode ? "#121212" : "#f8f9fa",
      },
      text: {
        primary: darkMode ? "#ffffff" : "#1a1a1a",
        secondary: darkMode ? "#b3b3b3" : "#666666",
      },
      divider: darkMode ? "#1e1e1e" : "#e0e0e0",
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
          : "linear-gradient(135deg, #1976d2 0%, #1565c0 100%)",
        secondary: darkMode
          ? "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
          : "linear-gradient(135deg, #64b5f6 0%, #42a5f5 100%)",
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
              background: darkMode ? "#0a0a0a" : "#f5f5f5",
            },
            "&::-webkit-scrollbar-thumb": {
              background: darkMode ? "#333" : "#ccc",
              borderRadius: "4px",
            },
            "&::-webkit-scrollbar-thumb:hover": {
              background: darkMode ? "#555" : "#999",
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
              backgroundColor: "rgba(100, 181, 246, 0.1)",
            },
          },
        },
      },
    },
  });

export default createAppTheme;
