import React from "react";
import { FaReact, FaNodeJs, FaDocker, FaGithub, FaAws } from "react-icons/fa";
import {
  SiTypescript,
  SiDotnet,
  SiMui,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";

interface TechIconProps {
  iconName: string;
  size?: "small" | "medium" | "large";
}

const iconMap: Record<string, React.ElementType> = {
  react: FaReact,
  typescript: SiTypescript,
  nodejs: FaNodeJs,
  dotnet: SiDotnet,
  mui: SiMui,
  mongodb: SiMongodb,
  postgresql: SiPostgresql,
  aws: FaAws,
  docker: FaDocker,
  git: FaGithub,
  javascript: SiJavascript,
};

const TechIcon: React.FC<TechIconProps> = ({ iconName, size = "medium" }) => {
  const IconComponent = iconMap[iconName.toLowerCase()] || FaReact;

  const sizeMap = {
    small: { fontSize: "1.5rem" },
    medium: { fontSize: "2rem" },
    large: { fontSize: "2.5rem" },
  };

  return <IconComponent style={sizeMap[size]} />;
};

export default TechIcon;
