import React from "react";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import TuneIcon from "@material-ui/icons/Tune";
import RadioIcon from "@material-ui/icons/Radio";
import RestorePageIcon from "@material-ui/icons/RestorePage";
import DialpadIcon from "@material-ui/icons/Dialpad";
import PersonIcon from "@material-ui/icons/Person";
import useDrawerStyle from "./drawerStyle";
import {
  Drawer,
  Hidden,
  List,
  ListItem,
  ListItemIcon,
  Paper,
} from "@material-ui/core";

const listIcon = [
  <TuneIcon />,
  <RadioIcon />,
  <RestorePageIcon />,
  <DialpadIcon />,
  <PersonIcon />,
];

function ListDrawerItem({ icon, drawerIconWrapper, drawerIcon }) {
  return (
    <ListItem className={drawerIconWrapper}>
      <ListItemIcon className={drawerIcon}>{icon}</ListItemIcon>
    </ListItem>
  );
}

export default function SidePanel({ mobileOpen, handleDrawerToggle }) {
  const { classes } = useDrawerStyle();

  return (
    <>
      <Hidden smUp implementation={"css"}>
        <Drawer
          className={classes.drawerCss}
          variant={`temporary`}
          anchor={`left`}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
        >
          <Paper className={classes.paperCss}>
            <List aria-label="drawer nav">
              <ListItem className={classes.breadCrumbIconWrapper}>
                <ListItemIcon className={classes.drawerIcon}>
                  <ViewModuleIcon />
                </ListItemIcon>
              </ListItem>
              {listIcon.map((icon, index) => (
                <ListDrawerItem
                  icon={icon}
                  key={index}
                  drawerIconWrapper={classes.drawerIconWrapper}
                  drawerIcon={classes.drawerIcon}
                />
              ))}
            </List>
          </Paper>
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation={"css"}>
        <Drawer
          className={classes.drawerCss}
          variant={`permanent`}
          anchor={`left`}
          open
        >
          <Paper className={classes.paperCss}>
            <List aria-label="drawer nav">
              <ListItem className={classes.breadCrumbIconWrapper}>
                <ListItemIcon className={classes.drawerIcon}>
                  <ViewModuleIcon />
                </ListItemIcon>
              </ListItem>
              {listIcon.map((icon, index) => (
                <ListDrawerItem
                  icon={icon}
                  key={index}
                  drawerIconWrapper={classes.drawerIconWrapper}
                  drawerIcon={classes.drawerIcon}
                />
              ))}
            </List>
          </Paper>
        </Drawer>
      </Hidden>
    </>
  );
}
