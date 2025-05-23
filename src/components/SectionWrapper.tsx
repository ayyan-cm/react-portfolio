import React, { useRef, useEffect } from "react";
import { Box, Container } from "@mui/material";
import type { SxProps, Theme } from "@mui/material";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  sx?: SxProps<Theme>;
  py?: number;
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl" | false;
  component?: React.ElementType;
  fullHeight?: boolean;
  backgroundColor?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  children,
  id,
  sx = {},
  py = 8,
  maxWidth = "lg",
  component = "section",
  fullHeight = false,
  backgroundColor,
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const coverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const cover = coverRef.current;

    if (!section || !cover) return;

    // Set initial state
    gsap.set(cover, {
      scaleY: 1,
      transformOrigin: "bottom",
    });

    gsap.set(section.querySelector(".content"), {
      y: 50,
      opacity: 0,
    });

    // Create timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "top 20%",
        scrub: false,
        once: true,
      },
    });

    // Animate cover reveal
    tl.to(cover, {
      scaleY: 0,
      duration: 0.8,
      ease: "power2.inOut",
    })
      // Animate content
      .to(
        section.querySelector(".content"),
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.3"
      );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === section) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <Box
      ref={sectionRef}
      component={component}
      id={id}
      sx={{
        position: "relative",
        minHeight: fullHeight ? "100vh" : "auto",
        display: "flex",
        alignItems: fullHeight ? "center" : "flex-start",
        py: fullHeight ? 0 : py,
        backgroundColor: backgroundColor || "transparent",
        overflow: "hidden",
        ...sx,
      }}
    >
      {/* Page cover effect */}
      <Box
        ref={coverRef}
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "background.default",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      <Container
        maxWidth={maxWidth}
        sx={{ width: "100%", position: "relative", zIndex: 2 }}
      >
        <div className="content">{children}</div>
      </Container>
    </Box>
  );
};

export default SectionWrapper;
