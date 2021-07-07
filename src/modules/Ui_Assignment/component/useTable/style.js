import { makeStyles } from "@material-ui/core";

const style = makeStyles({
  headRow: {
    background: "rgba(247,248,250,255)",
   
  },
  headCol: {
    fontWeight: "bold",
    fontSize: "15px",
  },
});

export default function useStyle() {
  const classes = style();
  return {
    classes,
  };
}
