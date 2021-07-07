import useStyle from "../../useStyle";
import React from "react";
import BusinessIcon from "@material-ui/icons/Business";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import AppsIcon from "@material-ui/icons/Apps";

import { AppBar, Avatar, Box, Toolbar, Typography } from "@material-ui/core";
export default function Header() {
  const {
    headerCss,
    logoIcon,
    logoText,
    logoContainer,
    accountContainer,
  } = useStyle();
  return (
    <>
      <AppBar className={headerCss}>
        <Toolbar>
          <Box
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box className={logoContainer}>
              <Box className={logoIcon}>
                <BusinessIcon fontSize={`large`} />
              </Box>
              <Box className={logoText}>
                <Typography>{`Suntexx`}</Typography>
                <ArrowDropDownIcon />
              </Box>
            </Box>
            <Box className={accountContainer}>
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
