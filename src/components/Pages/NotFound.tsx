import { Box, styled, Typography } from '@mui/material';

const NotFound = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    width: "30%",
    [theme.breakpoints.down("md")]: {
      width: "85%",
    },
  }));

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
        mt: "65px",
        mb: "100px",
      }}
    >
      <div
        style={{
          width: "5%",
          height: "5px",
          backgroundColor: "#00000039",
          margin: "0 auto",
        }}
      ></div>

      <Typography
        variant="body2"
        sx={{
          fontSize: "35px",
          fontWeight: "bold",
          color: "#000000",
          my: 3,
        }}
      >
        404: Page Not Found
      </Typography>

      <CustomBox>
        <Typography
          variant="body2"
          sx={{
            fontSize: "16px",
            fontWeight: "500",
            color: "#546473",
            textAlign: "center",
          }}
        >
          We couldn’t find what you were looking for.
        </Typography>
      </CustomBox>
    </Box>
  );
};

export default NotFound;
