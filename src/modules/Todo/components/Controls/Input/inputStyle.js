import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  displayVertical: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    outline: "none",
    minHeight: "40px",
    border: "none",
    margin: "10px 0",
    padding: "5px 10px",
    borderRadius: "10px",
    fontSize: "18px",
  },
  capitalized: {
    textTransform: "capitalize",
  },
}));

export default function useInputStyle() {
  const classes = useStyle();
  return {
    classes,
  };
}
