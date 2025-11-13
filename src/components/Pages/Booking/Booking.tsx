import { Box, Typography, styled } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import CustomButton from "../../CustomButton/CustomButton";

import buyIcon from "../../../assets/buy_icon.png";
import sellIcon from "../../../assets/sell_icon.png";
// import rentIcon from "../../../assets/";

const Booking = () => {
  // ✅ Styled Components
  const CustomBox = styled(Box)(({ theme }) => ({
    width: "30%",
    [theme.breakpoints.down("md")]: {
      width: "85%",
    },
  }));

  const GuidesBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    width: "70%",
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      width: "100%",
      flexDirection: "column",
      alignItems: "center",
      gap: theme.spacing(4),
    },
  }));

  const GuideBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(2, 0),
    },
  }));

  // ✅ Return JSX
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
      }}
    >
      {/* --- Divider Bar --- */}
      <div
        style={{
          width: "5%",
          height: "5px",
          backgroundColor: "#000339",
          margin: "0 auto",
        }}
      ></div>

      {/* --- Heading --- */}
      <Typography
        variant="h3"
        sx={{
          fontSize: "35px",
          fontWeight: "bold",
          color: "#000339",
          mt: 3,
        }}
      >
        How to Book?
      </Typography>

      {/* --- Description --- */}
      <CustomBox>
        <Typography
          variant="body2"
          sx={{
            fontSize: "16px",
            fontWeight: "500",
            color: "#5a6473",
            textAlign: "center",
            mt: 2,
          }}
        >
          Everything you need to know when you book an advance slot.
        </Typography>
      </CustomBox>

      {/* --- Guides Section --- */}
      <GuidesBox>
        {/* --- Order Guides --- */}
        <GuideBox>
          <img src={buyIcon} alt="buy" style={{ width: "60px", height: "60px" }} />
          <Typography
            variant="body2"
            sx={{
              fontWeight: "500",
              fontSize: "20px",
              color: "#383c45",
              my: 1,
            }}
          >
            Order Guides
          </Typography>
          <Box
            sx={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="body2"
              sx={{
                fontWeight: "bold",
                fontSize: "14px",
                color: "#0689ff",
              }}
            >
              How to Order
            </Typography>
            <ArrowRightAltIcon sx={{ color: "#0689ff", ml: 1 }} />
          </Box>
        </GuideBox>

        {/* --- Booking Guides --- */}
        {/* <GuideBox>
          <img src={rentIcon} alt="rent" style={{ width: "60px", height: "60px" }} />
          <Typography
            variant="body2"
            sx={{
              fontWeight: "500",
              fontSize: "20px",
              color: "#383c45",
              my: 1,
            }}
          >
            Booking Guides
          </Typography>
          <Box
            sx={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="body2"
              sx={{
                fontWeight: "bold",
                fontSize: "14px",
                color: "#0689ff",
              }}
            >
              How to Book
            </Typography>
            <ArrowRightAltIcon sx={{ color: "#0689ff", ml: 1 }} />
          </Box>
        </GuideBox> */}

        {/* --- Payment Guides --- */}
        <GuideBox>
          <img src={sellIcon} alt="sell" style={{ width: "60px", height: "60px" }} />
          <Typography
            variant="body2"
            sx={{
              fontWeight: "500",
              fontSize: "20px",
              color: "#383c45",
              my: 1,
            }}
          >
            Payment Guides
          </Typography>
          <Box
            sx={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="body2"
              sx={{
                fontWeight: "bold",
                fontSize: "14px",
                color: "#0689ff",
              }}
            >
              Payment Methods
            </Typography>
            <ArrowRightAltIcon sx={{ color: "#0689ff", ml: 1 }} />
          </Box>
        </GuideBox>
      </GuidesBox>

      {/* Optional Button */}
      <CustomButton
        backgroundColor="#0689ff"
        color="#fff"
        buttonText="Get Started"
        guideBtn={true}
      />
    </Box>
  );
};

export default Booking;
