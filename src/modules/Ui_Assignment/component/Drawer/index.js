import { Box, Drawer, Paper } from "@material-ui/core";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import TuneIcon from "@material-ui/icons/Tune";
import RadioIcon from "@material-ui/icons/Radio";
import RestorePageIcon from "@material-ui/icons/RestorePage";
import DialpadIcon from "@material-ui/icons/Dialpad";
import PersonIcon from "@material-ui/icons/Person";
import useStyle from "../../useStyle";
import React from "react";

export default function SidePanel() {
  const {
    drawerCss,
    paperCss,

    drawerIcon,
  } = useStyle();
  return (
    <Drawer className={drawerCss} variant={`permanent`} anchor={`left`}>
      <Paper className={paperCss}>
        <Box className={drawerIcon}>
          <ViewModuleIcon fontSize={`large`} />
        </Box>
        <Box className={drawerIcon}>
          <TuneIcon fontSize={`large`} />
        </Box>
        <Box className={drawerIcon}>
          <RadioIcon fontSize={`large`} />
        </Box>
        <Box className={drawerIcon}>
          <RestorePageIcon fontSize={`large`} />
        </Box>
        <Box className={drawerIcon}>
          <DialpadIcon fontSize={`large`} />
        </Box>
        <Box className={drawerIcon}>
          <PersonIcon fontSize={`large`} />
        </Box>
      </Paper>
    </Drawer>
  );
}
