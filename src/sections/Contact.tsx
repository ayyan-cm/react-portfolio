import { useRef, useEffect } from "react";
import { Box, Typography, IconButton, Link } from "@mui/material";
import { gsap } from "gsap";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import SectionWrapper from "../components/SectionWrapper";
import { portfolioData } from "../data/content";

const Contact = () => {
  const { contact } = portfolioData;
  const elementsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = elementsRef.current?.children;
    if (!elements) return;

    // Set initial state
    gsap.set(elements, {
      opacity: 0,
      y: 30,
    });

    // Create staggered animation
    gsap.to(elements, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.15,
      ease: "power2.out",
      scrollTrigger: {
        trigger: elementsRef.current,
        start: "top 80%",
        once: true,
      },
    });
  }, []);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "GitHub":
        return <GitHubIcon fontSize="large" />;
      case "LinkedIn":
        return <LinkedInIcon fontSize="large" />;
      case "Instagram":
        return <InstagramIcon fontSize="large" />;
      default:
        return <EmailIcon fontSize="large" />;
    }
  };

  return (
    <SectionWrapper id="contact" sx={{ pt: 8, pb: 2 }}>
      <Box sx={{ textAlign: "center" }}>
        <div ref={elementsRef}>
          <div>
            <Typography
              variant="h2"
              sx={{
                mb: 2,
                fontWeight: 600,
                color: "text.primary",
              }}
            >
              {contact.title}
            </Typography>
          </div>

          <div>
            <Typography
              variant="h5"
              sx={{
                mb: 6,
                fontWeight: 400,
                color: "text.secondary",
                maxWidth: "500px",
                mx: "auto",
              }}
            >
              {contact.subtitle}
            </Typography>
          </div>

          <div>
            <Box sx={{ mb: 6 }}>
              <Link
                href={`mailto:${contact.email}`}
                sx={{
                  color: "primary.main",
                  textDecoration: "none",
                  fontSize: "1.25rem",
                  fontWeight: 500,
                  display: "inline-flex",
                  alignItems: "center",
                  "@keyframes bounce": {
                    "0%, 100%": {
                      transform: "translateY(0)",
                    },
                    "50%": {
                      transform: "translateY(-10px)",
                    },
                  },
                  "&:hover": {
                    color: "secondary.main",
                    textDecoration: "underline",
                    "& .email-icon": {
                      animation: "bounce 0.5s ease infinite",
                    },
                  },
                  transition: "all 0.3s ease",
                }}
              >
                {"Inbox ready. Are you in? "}
                <EmailIcon
                  className="email-icon"
                  sx={{
                    verticalAlign: "middle",
                    ml: 1,
                    transition: "all 0.3s ease",
                  }}
                />
              </Link>
            </Box>
          </div>

          <div>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: 3,
                mb: 8,
              }}
            >
              {contact.social.map((social, index) => (
                <IconButton
                  key={index}
                  component={Link}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={(theme) => ({
                    color:
                      theme.palette.mode === "dark"
                        ? "text.secondary"
                        : "primary.main",
                    backgroundColor:
                      theme.palette.mode === "dark"
                        ? "rgba(255, 255, 255, 0.05)"
                        : "rgba(37, 99, 235, 0.05)",
                    border: "1px solid",
                    borderColor:
                      theme.palette.mode === "dark"
                        ? "rgba(255, 255, 255, 0.1)"
                        : "rgba(37, 99, 235, 0.1)",
                    borderRadius: 2,
                    p: 2,
                    "&:hover": {
                      color: "secondary.main",
                      backgroundColor:
                        theme.palette.mode === "dark"
                          ? "rgba(100, 181, 246, 0.1)"
                          : "rgba(37, 99, 235, 0.1)",
                      borderColor:
                        theme.palette.mode === "dark"
                          ? "rgba(100, 181, 246, 0.3)"
                          : "rgba(37, 99, 235, 0.2)",
                      transform: "translateY(-4px)",
                      boxShadow:
                        theme.palette.mode === "dark"
                          ? "0 8px 24px rgba(100, 181, 246, 0.15)"
                          : "0 8px 24px rgba(37, 99, 235, 0.08)",
                    },
                    transition: "all 0.3s ease",
                  })}
                  aria-label={`Visit ${social.platform} profile`}
                >
                  {getIcon(social.icon)}
                </IconButton>
              ))}
            </Box>
          </div>

          <div>
            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
                fontStyle: "italic",
                fontFamily: "'Tangerine', cursive",
                fontSize: "1.5rem",
                opacity: 0.7,
              }}
            >
              {contact.signature}
            </Typography>
          </div>
        </div>
      </Box>
    </SectionWrapper>
  );
};

export default Contact;
