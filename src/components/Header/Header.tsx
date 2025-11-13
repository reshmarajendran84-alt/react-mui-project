import { Box, Typography, styled } from "@mui/material";
import CustomButton from "../CustomButton/CustomButton";
import logoImg from "../../assets/logo.png";

import MenuIcon from "@mui/icons-material/Menu";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import HomeIcon from "@mui/icons-material/Home";
import ContactsIcon from "@mui/icons-material/Contacts";

import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [mobileMenu, setMobileMenu] = useState({ left: false });
  const navigate = useNavigate();

  // ✅ Toggle drawer open/close
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setMobileMenu({ ...mobileMenu, [anchor]: open });
  };

  // ✅ Navigation items
  const nav_titles = [
    { path: "/", display: "Home", icon: <HomeIcon /> },
    { path: "/dishes", display: "Dishes", icon: <FeaturedPlayListIcon /> },
    { path: "/services", display: "Services", icon: <MiscellaneousServicesIcon /> },
    { path: "/aboutus", display: "About Us", icon: <ContactsIcon /> },
  ];

  // ✅ Styled components
  const NavBarLinksBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));

  const NavBarLink = styled(Typography)(() => ({
    fontSize: "18px",
    color: "#1F5361",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "color 0.3s ease",
    "&:hover": { color: "white" },
  }));

  const NavBarLogo = styled("img")(({ theme }) => ({
    cursor: "pointer",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));

  const CustomMenuIcon = styled(MenuIcon)(({ theme }) => ({
    cursor: "pointer",
    display: "none",
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  }));

  // ✅ Drawer Content
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {nav_titles.map((item, index) => (
          <ListItem
            key={index}
            disablePadding
            onClick={() => navigate(item.path)}
          >
            <ListItemButton>
              {/* ✅ Simplified icon rendering */}
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.display} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "2.5rem",
        backgroundColor: "#FED801",
        padding: "10px 40px",
      }}
    >
      {/* ✅ Left Section */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "2.5rem",
        }}
      >
        <CustomMenuIcon onClick={toggleDrawer("left", true)} aria-label="menu" />
        <Drawer
          anchor="left"
          open={mobileMenu["left"]}
          onClose={toggleDrawer("left", false)}
        >
          {list("left")}
        </Drawer>

        <NavBarLogo src={logoImg} alt="Logo" />
        <NavBarLinksBox>
          {nav_titles.map((item, index) => (
            <NavBarLink
              key={index}
              variant="body2"
              onClick={() => navigate(item.path)}
            >
              {item.display}
            </NavBarLink>
          ))}
        </NavBarLinksBox>
      </Box>

      {/* ✅ Right Section */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <NavBarLink>Sign Up</NavBarLink>
        <CustomButton
          backgroundColor="#0F184C"
          color="#fff"
          buttonText="Register"
        />
      </Box>
    </Box>
  );
}

export default Header;
