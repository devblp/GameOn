import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useState } from "react";
import {
  Avatar,
  Button,
  InputBase,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import logo from "../../assets/LOGO.png";

import "./style.css";

// icons
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SearchIcon from "@mui/icons-material/Search";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import HelpIcon from "@mui/icons-material/Help";
import FilterTiltShiftIcon from "@mui/icons-material/FilterTiltShift";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import MouseIcon from "@mui/icons-material/Mouse";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import ComputerIcon from "@mui/icons-material/Computer";
import PanoramaPhotosphereIcon from "@mui/icons-material/PanoramaPhotosphere";
import GamesIcon from "@mui/icons-material/Games";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
// soshiyal medya
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ExtensionIcon from "@mui/icons-material/Extension";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function SideNavbar() {
  const theme = useTheme();
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }} bgcolor={"primary.nav"}>
      <AppBar position="fixed" open={open}>
        <Toolbar
          sx={{
            bgcolor: "primary.bgMain",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <IconButton
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
              color: "primary.main",
            }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{ display: "flex", alignItems: "center", position: "relative" }}
          >
            <SearchIcon
              sx={{ position: "absolute", zIndex: "1", left: 15, fontSize: 20 }}
            />
            <InputBase
              sx={{
                ml: 1,
                color: "white",
                bgcolor: "#363638",
                width: "100%",
                px: 5,
                borderRadius: 3,
              }}
              placeholder="Search Google Maps"
              inputProps={{ "aria-label": "search" }}
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Avatar sx={{ width: 35, height: 35 }} />
            <NotificationsNoneIcon />
            <LocalMallIcon />
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className="custom-scrollbar"
        open={open}
        sx={{ backgroundColor: "black" }}
      >
        <DrawerHeader
          sx={{
            bgcolor: "primary.nav",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Avatar src={logo} sx={{ width: 80, height: 80 }} />
          <IconButton
            sx={{ color: "primary.main" }}
            onClick={handleDrawerClose}
          >
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Grid2
          container
          xs={12}
          sx={{ flexDirection: "column", gap: 2, flexWrap: "nowrap" }}
          height={"100%"}
          bgcolor={"primary.nav"}
        >
          <Grid2
            container
            xs={12}
            sx={{ flexDirection: "column", alignItems: "center" }}
          >
            {open === false ? (
              ""
            ) : (
              <Button
                sx={{
                  bgcolor: "primary.main",
                  color: "white",
                  width: 150,
                  borderRadius: 10,
                  my:3
                }}
              >
                Go to Catalog
              </Button>
            )}
          </Grid2>
          <Grid2 container xs={12} sx={{ flexDirection: "column" }}>
            <List>
              <ListItem sx={{ color:"primary.textColorT",p: 0.5, py: 0 }}>
                <ListItemButton>
                  <ListItemIcon sx={{ color:"primary.textColorT" }}>
                    <PermIdentityIcon sx={{ fontSize: "2.5vh" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Profile"
                    primaryTypographyProps={{ style: { fontSize: "13px"} }}
                  />
                </ListItemButton>
              </ListItem>
              <ListItem sx={{ color:"primary.textColorT",px: 0.5, py: 0 }}>
                <ListItemButton>
                  <ListItemIcon sx={{ color:"primary.textColorT" }}>
                    <SearchIcon sx={{ fontSize: 20 }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Search"
                    primaryTypographyProps={{ style: { fontSize: "13px" } }}
                  />
                </ListItemButton>
              </ListItem>
              <ListItem sx={{ color:"primary.textColorT", px: 0.5, py: 0 }}>
                <ListItemButton>
                  <ListItemIcon sx={{ color:"primary.textColorT"}}>
                    <FavoriteBorderIcon sx={{ fontSize: 20 }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Favorite"
                    primaryTypographyProps={{ style: { fontSize: "13px" } }}
                  />
                </ListItemButton>
              </ListItem>
              <ListItem sx={{ color:"primary.textColorT", px: 0.5, py: 0 }}>
                <ListItemButton>
                  <ListItemIcon sx={{ color:"primary.textColorT" }}>
                    <AccountBalanceWalletIcon sx={{ fontSize: 20 }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Balance"
                    primaryTypographyProps={{ style: { fontSize: "13px" } }}
                  />
                </ListItemButton>
              </ListItem>
            </List>
          </Grid2>
          {open === false ? (
            ""
          ) : (
            <Typography sx={{ color: "white", px: 3, fontSize: 14 }}>
              CATEGORY
            </Typography>
          )}
          <Grid2 container xs={12} sx={{ flexDirection: "column" }}>
            <List>
              <ListItem sx={{ color:"primary.textColorT",p: 0.5, py: 0 }}>
                <ListItemButton>
                  <ListItemIcon sx={{ color:"primary.textColorT" }}>
                    <MouseIcon sx={{ fontSize: "2.5vh" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Computer mouse"
                    primaryTypographyProps={{ style: { fontSize: "13px"} }}
                  />
                </ListItemButton>
              </ListItem>
              <ListItem sx={{ color:"primary.textColorT",px: 0.5, py: 0 }}>
                <ListItemButton>
                  <ListItemIcon sx={{ color:"primary.textColorT" }}>
                    <HeadsetMicIcon sx={{ fontSize: 20 }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Game Headphones"
                    primaryTypographyProps={{ style: { fontSize: "13px" } }}
                  />
                </ListItemButton>
              </ListItem>
              <ListItem sx={{ color:"primary.textColorT", px: 0.5, py: 0 }}>
                <ListItemButton>
                  <ListItemIcon sx={{ color:"primary.textColorT"}}>
                    <SportsEsportsIcon sx={{ fontSize: 20 }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Gamepads"
                    primaryTypographyProps={{ style: { fontSize: "13px" } }}
                  />
                </ListItemButton>
              </ListItem>
              <ListItem sx={{ color:"primary.textColorT", px: 0.5, py: 0 }}>
                <ListItemButton>
                  <ListItemIcon sx={{ color:"primary.textColorT" }}>
                    <PanoramaPhotosphereIcon sx={{ fontSize: 20 }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="VR glasses"
                    primaryTypographyProps={{ style: { fontSize: "13px" } }}
                  />
                </ListItemButton>
              </ListItem>
              <ListItem sx={{ color:"primary.textColorT", px: 0.5, py: 0 }}>
                <ListItemButton>
                  <ListItemIcon sx={{ color:"primary.textColorT" }}>
                    <KeyboardIcon sx={{ fontSize: 20 }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Keybords"
                    primaryTypographyProps={{ style: { fontSize: "13px" } }}
                  />
                </ListItemButton>
              </ListItem>
              <ListItem sx={{ color:"primary.textColorT", px: 0.5, py: 0 }}>
                <ListItemButton>
                  <ListItemIcon sx={{ color:"primary.textColorT" }}>
                    <ComputerIcon sx={{ fontSize: 20 }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Computers"
                    primaryTypographyProps={{ style: { fontSize: "13px" } }}
                  />
                </ListItemButton>
              </ListItem>
              <ListItem sx={{ color:"primary.textColorT", px: 0.5, py: 0 }}>
                <ListItemButton>
                  <ListItemIcon sx={{ color:"primary.textColorT" }}>
                    <GamesIcon sx={{ fontSize: 20 }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Games"
                    primaryTypographyProps={{ style: { fontSize: "13px" } }}
                  />
                </ListItemButton>
              </ListItem>
            </List>
          </Grid2>
          {open === false ? (
            ""
          ) : (
            <Grid2 container xs={12} sx={{ color:"primary.textColorT", gap: 1, px: 3 }}>
              <XIcon sx={{ fontSize: 20 }} />
              <FacebookIcon sx={{ fontSize: 20 }} />
              <InstagramIcon sx={{ fontSize: 20 }} />
              <TelegramIcon sx={{ fontSize: 20 }} />
              <LinkedInIcon sx={{ fontSize: 20 }} />
              <ExtensionIcon sx={{ fontSize: 20 }} />
            </Grid2>
          )}
          <Grid2 container xs={12} sx={{ flexDirection: "column" }}>
            <List>
              <ListItem sx={{ color:"primary.textColorT",px: 0.5, py: 0 }}>
                <ListItemButton>
                  <ListItemIcon sx={{ color:"primary.textColorT" }}>
                    <HelpIcon sx={{ fontSize: 20 }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Help"
                    primaryTypographyProps={{ style: { fontSize: "13px" } }}
                  />
                </ListItemButton>
              </ListItem>
              <ListItem sx={{ color:"primary.textColorT", px: 0.5, py: 0 }}>
                <ListItemButton>
                  <ListItemIcon sx={{ color:"primary.textColorT"}}>
                    <FilterTiltShiftIcon sx={{ fontSize: 20 }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Conditions"
                    primaryTypographyProps={{ style: { fontSize: "13px" } }}
                  />
                </ListItemButton>
              </ListItem>
              <ListItem sx={{ color:"primary.textColorT", px: 0.5, py: 0 }}>
                <ListItemButton>
                  <ListItemIcon sx={{ color:"primary.textColorT" }}>
                    <ContentPasteIcon sx={{ fontSize: 20 }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Confidentiality"
                    primaryTypographyProps={{ style: { fontSize: "13px" } }}
                  />
                </ListItemButton>
              </ListItem>
            </List>
          </Grid2>
        </Grid2>
      </Drawer>
    </Box>
  );
}
