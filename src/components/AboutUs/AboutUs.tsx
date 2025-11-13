import { Box, styled, Typography } from "@mui/material";

const About = () => {
  // Styled component for responsive width
  const CustomBox = styled(Box)(({ theme }) => ({
    width: "40%",
    [theme.breakpoints.down("md")]: {
      width: "70%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
  }));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: { xs: "20px", sm: "30px", md: "40px" },
        mt: { xs: "40px", md: "65px" },
        mb: { xs: "60px", md: "100px" },
        textAlign: "center",
      }}
    >
      {/* Decorative line */}
      <Box
        sx={{
          width: "60px",
          height: "5px",
          backgroundColor: "#000033",
          borderRadius: "5px",
          mb: 2,
        }}
      />

      {/* Heading */}
      <Typography
        variant="h3"
        sx={{
          fontSize: { xs: "26px", sm: "30px", md: "35px" },
          fontWeight: "bold",
          color: "#000033",
          my: 2,
        }}
      >
        About Us
      </Typography>

      {/* Description */}
      <CustomBox>
        <Typography
          variant="body2"
          sx={{
            fontSize: { xs: "14px", sm: "15px", md: "16px" },
            fontWeight: 500,
            color: "#5a6473",
            textAlign: "center",
            lineHeight: 1.6,
          }}
        >
          Welcome to our restaurant, where culinary excellence meets warm
          hospitality. We believe in serving delicious, freshly prepared meals
          in a cozy and inviting atmosphere.
        </Typography>
      </CustomBox>
    </Box>
  );
};

export default About;
