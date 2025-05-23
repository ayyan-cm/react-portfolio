import React from "react";
import { IconButton, Box } from "@mui/material";
import { LightMode, DarkMode } from "@mui/icons-material";
import { useTheme } from "../hooks/useTheme";

const ThemeToggle: React.FC = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <Box
      sx={{
        position: "fixed",
        top: 24,
        right: 24,
        zIndex: 1000,
      }}
    >
      <IconButton
        onClick={toggleTheme}
        sx={{
          backgroundColor: "background.paper",
          border: "1px solid",
          borderColor: "divider",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
          "&:hover": {
            backgroundColor: "background.paper",
            transform: "scale(1.1)",
          },
          transition: "all 0.3s ease",
        }}
        aria-label="Toggle theme"
      >
        {darkMode ? (
          <LightMode sx={{ color: "text.primary" }} />
        ) : (
          <DarkMode sx={{ color: "text.primary" }} />
        )}
      </IconButton>
    </Box>
  );
};

export default ThemeToggle;
