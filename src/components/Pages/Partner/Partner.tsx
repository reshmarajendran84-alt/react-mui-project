import { Box, Container, Typography, styled } from "@mui/material";
import logoImg from "../../../assets/logo.png";
import starsImg from "../../../assets/Star.png";
import logosImg from "../../../assets/logos.png";


const Partner = () => {
  const CustomContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: theme.spacing(4),

    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      textAlign: "center",
      marginBottom: theme.spacing(4),
    },
  }));

  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  }));

  return (
    <Box sx={{ mt: 10 }}>
      {/* Top section */}
      <CustomContainer>
        {/* --- Logo and Trust Text --- */}
        <CustomBox>
          <img src={logoImg} alt="logo" style={{ maxWidth: "120px" }} />
          <Typography
            variant="body2"
            sx={{
              color: "#708589",
              fontSize: "16px",
              fontWeight: "bold",
              mt: 2,
            }}
          >
            More than 45,000 trust Techflix
          </Typography>
        </CustomBox>

        {/* --- Star Ratings --- */}
        <CustomBox>
          <img src={starsImg} alt="stars" style={{ maxWidth: "150px" }} />
          <Typography
            variant="body2"
            sx={{
              color: "#708589",
              fontSize: "16px",
              fontWeight: "bold",
              mt: 2,
            }}
          >
            5 Star Rating (2k+ Reviews)
          </Typography>
        </CustomBox>
      </CustomContainer>

      {/* Bottom section (logos) */}
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          mt: 6,
        }}
      >
        <img src={logosImg} alt="logos" style={{ maxWidth: "100%", height: "auto" }} />
      </Container>
    </Box>
  );
};

export default Partner;
