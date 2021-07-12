import { makeStyles } from "@material-ui/core";
export default function useTaskStyle() {
  const useStyle = makeStyles((theme) => ({
    taskButtons: {
      margin: "auto 0 auto 0",
      textAlign: "center",
      [theme.breakpoints.up("md")]: {
        textAlign: "right",
      },
    },
    cancelMargin: {
      background: "#444444",
      "&.MuiGrid-spacing-xs-2": {
        margin: "0px",
      },
    },
    title: {
      color: "#ff9900",
    },
  }));
  const classes = useStyle();
  return { classes };
}
