import React from "react";
import {
  Code,
  DataObject,
  Storage,
  Cloud,
  GitHub,
  Language,
  Web,
  IntegrationInstructions,
  Terminal,
  AccountTree,
} from "@mui/icons-material";

interface TechIconProps {
  iconName: string;
  size?: "small" | "medium" | "large";
}

const iconMap: Record<string, React.ElementType> = {
  react: Code,
  typescript: DataObject,
  nodejs: Terminal,
  dotnet: IntegrationInstructions,
  mui: Web,
  database: Storage,
  cloud: Cloud,
  docker: AccountTree,
  git: GitHub,
  javascript: Language,
};

const TechIcon: React.FC<TechIconProps> = ({ iconName, size = "medium" }) => {
  const IconComponent = iconMap[iconName] || Code;

  const sizeMap = {
    small: { fontSize: "1rem" },
    medium: { fontSize: "1.25rem" },
    large: { fontSize: "1.5rem" },
  };

  return <IconComponent sx={sizeMap[size]} />;
};

export default TechIcon;
