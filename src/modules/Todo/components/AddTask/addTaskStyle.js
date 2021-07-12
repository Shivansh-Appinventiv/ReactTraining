import { makeStyles } from "@material-ui/core";

export default function useAddTaskStyle() {
  const useStyle = makeStyles((theme) => ({
    form: {
      width: "100%",
    },
    cancelMargin: {
      background: "#444444",
      "&.MuiGrid-spacing-xs-2": {
        margin: "0px",
      },
    },
    addTodoButton: {
      margin: "auto 0 auto 0",
      textAlign: "center",
      [theme.breakpoints.up("md")]: {
        textAlign: "right",
      },
    },
  }));
  const classes = useStyle();
  return {
    classes,
  };
}
