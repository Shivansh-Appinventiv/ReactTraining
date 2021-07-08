import React from "react";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import AppsIcon from "@material-ui/icons/Apps";
import MenuIcon from "@material-ui/icons/Menu";
import useHeaderStyle from "./headerStyle";
import useImages from "./images";
import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";

function LogoImageContainer() {
  const { classes } = useHeaderStyle();
  const { LogoImage } = useImages();
  return (
    <Box className={classes.logoWrapper}>
      <Box className={classes.logoIcon}>
        <LogoImage />
      </Box>
    </Box>
  );
}

export default function Header({ handleDrawerToggle }) {
  const { classes } = useHeaderStyle();
  const theme = useTheme();
  const hideIcon = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <>
      <AppBar className={classes.headerCss}>
        <Toolbar>
          <Box
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box className={classes.logoContainer}>
              <IconButton
                color={"inherit"}
                aria-label={"open-drawer"}
                onClick={handleDrawerToggle}
                style={hideIcon ? { display: "none" } : { display: "block" }}
              >
                <MenuIcon />
              </IconButton>
              <LogoImageContainer />
              <Box className={classes.logoText}>
                <Typography>{`Suntexx`}</Typography>
                <ArrowDropDownIcon />
              </Box>
            </Box>
            <Box className={classes.accountContainer}>
              <Box>
                <SettingsOutlinedIcon fontSize={`large`} />
              </Box>
              <Box>
                <Avatar className={``}>{`WZ`}</Avatar>
              </Box>
              <Box>
                <AppsIcon fontSize={`large`} />
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
