import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  outerContainer: {
    padding: "20px 0",
    maxWidth: "1600px",
    margin: "0 auto",
  },
  todoContainer: {
    background: "#dbdbdb",
    padding: "30px 0",
  },
  innerContainer: {
    background: "#333333",
    color: "white",
    borderRadius: "20px",
    padding: "20px 0 40px 0",
    [theme.breakpoints.down("md")]: {
      borderRadius: "0px",
    },
  },
}));

export default function useHomeStyle() {
  const classes = useStyle();
  return {
    classes,
  };
}
