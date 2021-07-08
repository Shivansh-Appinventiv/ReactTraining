import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  drawerCss: {
    "& .MuiPaper-root": {
      backgroundColor: "#1e3c50",
    },
    "& .MuiDrawer-paper": {
      zIndex: "1",
    },
  },
  paperCss: {
    width: "48px",
    paddingTop: "48px",
    height: "100%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "column",
    color: "white",
  },
  drawerIconWrapper: {
    minHeight: "48px",
    padding: "0px",
  },
  drawerIcon: {
    minWidth: "48px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  },
  breadCrumbIconWrapper: {
    minHeight: "40px",
    padding: "0px",
  },
});

export default function useDrawerStyle() {
  const classes = useStyle();
  return { classes };
}
