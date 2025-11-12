import { Box, Typography, Container } from "@mui/material";
import { styled } from "@mui/system";
import CustomButton from "../CustomButton/CustomButton";
import welcomeImg from "../../assets/welcome.png";

const Welcome = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(5),
    marginTop: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  }));

  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "64px",
    color: "#fff",
    fontWeight: "bold",
    margin: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
    },
  }));

  return (
    <Box sx={{ backgroundColor: "#FED801", minHeight: "80vh" }}>
      <Container>
        <CustomBox>
          {/* Left Section */}
          <Box sx={{ flex: "1" }}>
            <Typography
              variant="body2"
              sx={{
                fontSize: "18px",
                color: "#687690",
                fontWeight: "500",
                mt: 10,
                mb: 4,
              }}
            >
              Welcome to Techflix Restaurant
            </Typography>

            <Title variant="h1">
              Discover a place where you'll love to eat.
            </Title>

            <Typography
              variant="body2"
              sx={{ fontSize: "18px", color: "#5A6473", my: 4 }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              inventore numquam ipsam eaque facere quas eveniet rem tempora in
              minima voluptatum doloribus quos iure iste mollitia distinctio
              provident soluta deserunt.
            </Typography>

            <CustomButton
              backgroundColor="#0F18AC"
              color="#fff"
              buttonText="More About Us"
              welcomeBtn={true}
            />
          </Box>

          {/* Right Section */}
          <Box sx={{ flex: "1.25" }}>
            <img
              src={welcomeImg}
              alt="Welcome"
              style={{ maxWidth: "100%", marginBottom: "2rem" }}
            />
          </Box>
        </CustomBox>
      </Container>
    </Box>
  );
};

export default Welcome;
