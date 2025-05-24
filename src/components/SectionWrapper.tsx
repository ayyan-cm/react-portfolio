import React, { useRef, useEffect } from "react";
import { Box, Container } from "@mui/material";
import type { SxProps, Theme } from "@mui/material";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(
      () => {
        const section = sectionRef.current;
        const cover = coverRef.current;
        const content = contentRef.current;

        if (!section || !cover || !content) return;

        // Set initial states
        gsap.set([cover, content], {
          opacity: 0,
        });

        gsap.set(cover, {
          scaleY: 1,
          transformOrigin: "bottom",
        });

        gsap.set(content, {
          y: 50,
        });

        // Create timeline for animations
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            once: true,
          },
          onComplete: () => {
            // Cleanup after animation
            if (cover) {
              cover.style.display = "none";
            }
          },
        });

        // Stagger the animations
        tl.to(cover, {
          opacity: 1,
          duration: 0.1,
        })
          .to(cover, {
            scaleY: 0,
            duration: 0.8,
            ease: "power2.inOut",
          })
          .to(
            content,
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: "power2.out",
            },
            "-=0.3"
          );
      },
      sectionRef // Scope animations to section
    );

    return () => ctx.revert(); // Clean up animations
  }, []); // Empty dependency array since we're using refs

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
        visibility: "visible", // Ensure content is visible
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
        <div ref={contentRef} className="content">
          {children}
        </div>
      </Container>
    </Box>
  );
};

export default SectionWrapper;
