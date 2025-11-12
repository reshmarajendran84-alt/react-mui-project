import { Button, styled } from "@mui/material";

const CustomButton = ({
  backgroundColor,
  color,
  buttonText,
  welcomeBtn,
  guideBtn,
  getStartedBtn,
}: {
  backgroundColor: string;
  color: string;
  buttonText: string;
  welcomeBtn?: boolean;
  guideBtn?: boolean;
  getStartedBtn?: boolean;
}) => {
  const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: backgroundColor,
    color: color,
    fontWeight: "700",
    fontSize: "14px",
    cursor: "pointer",
    padding: "0.5rem 1.25rem",
    borderRadius: "7px",
    textTransform: "none", // ✅ "none" (not "block")
    display: "block",
    border: "2px solid transparent",
    "&:hover": {
      backgroundColor: color,
      color: backgroundColor,
      borderColor: backgroundColor,
    },
     [theme.breakpoints.down("md")]: {
      margin:
        (welcomeBtn || getStartedBtn) && theme.spacing(0, "auto", 3, "auto"),
      width: (welcomeBtn || getStartedBtn) && "90%",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: guideBtn && theme.spacing(3),
      width: guideBtn && "90%",
    },
  }));

  // ✅ Use the styled button
  return <CustomButton>{buttonText}</CustomButton>;
};

export default CustomButton;