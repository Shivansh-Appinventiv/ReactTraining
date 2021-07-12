import { makeStyles } from "@material-ui/core";

export default function useHeaderStyle() {
  const useStyle = makeStyles((theme) => ({
    title: {
      textAlign: "center",
      marginBottom: "10px",
    },
  }));
  const classes = useStyle();
  return {
    classes,
  };
}
