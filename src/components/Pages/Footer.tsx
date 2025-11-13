import { Typography, Box, Container, styled } from "@mui/material";

import fbIcon from "../../assets/facebook.png";
import twitterIcon from "../../assets/twitter.png";
import instagramIcon from "../../assets/instagram.png";

const Footer = () => {
  // ✅ Responsive layout
  const CustomContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: theme.spacing(8),
    flexWrap: "wrap",

    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
      textAlign: "center",
      gap: theme.spacing(5),
    },
  }));

  const FooterColumn = styled(Box)(({ theme }) => ({
    flex: "1 1 250px",
    [theme.breakpoints.down("sm")]: {
      flex: "1 1 100%",
    },
  }));

  const IconBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacing(2),
    marginTop: theme.spacing(2),
  }));

  const FooterLink = styled("span")(({ theme }) => ({
    fontSize: "16px",
    color: "#000066",
    fontWeight: "300",
    cursor: "pointer",
    display: "inline-block",
    marginBottom: theme.spacing(1),
    transition: "color 0.3s ease",
    "&:hover": {
      color: "#6602ff",
    },
  }));

  return (
    <Box sx={{ py: 8, backgroundColor: "#fff682" }}>
      <CustomContainer>
        {/* --- Features --- */}
        <FooterColumn>
          <Typography
            sx={{
              fontSize: "20px",
              color: "#1c1c1d",
              fontWeight: "700",
              mb: 2,
            }}
          >
            Features
          </Typography>
          <FooterLink>Guides</FooterLink>
          <br />
          <FooterLink>Services</FooterLink>
          <br />
          <FooterLink>Contact Us</FooterLink>
        </FooterColumn>

        {/* --- Overview --- */}
        <FooterColumn>
          <Typography
            sx={{
              fontSize: "20px",
              color: "#1c1c1d",
              fontWeight: "700",
              mb: 2,
            }}
          >
            Overview
          </Typography>
          <FooterLink>Location</FooterLink>
          <br />
          <FooterLink>Partnerships</FooterLink>
          <br />
          <FooterLink>Terms of Use & Privacy Policies</FooterLink>
        </FooterColumn>

        {/* --- Social Media --- */}
        <FooterColumn>
          <Typography
            sx={{
              fontSize: "20px",
              color: "#1c1c1d",
              fontWeight: "700",
              mb: 2,
            }}
          >
            Get in touch
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              color: "#7a7a7e",
              fontWeight: "500",
              mb: 2,
            }}
          >
            Keep in touch with our social media pages
          </Typography>
          <IconBox>
            <img
              src={fbIcon}
              alt="Facebook"
              style={{ cursor: "pointer", width: "28px" }}
            />
            <img
              src={twitterIcon}
              alt="Twitter"
              style={{ cursor: "pointer", width: "28px" }}
            />
            <img
              src={instagramIcon}
              alt="instagramIcon"
              style={{ cursor: "pointer", width: "28px" }}
            />
          </IconBox>
        </FooterColumn>
      </CustomContainer>

      {/* --- Copyright Bar --- */}
      <Box
        sx={{
          textAlign: "center",
          mt: 6,
          color: "#333",
          fontSize: "14px",
          fontWeight: 400,
        }}
      >
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </Box>
    </Box>
  );
};

export default Footer;
