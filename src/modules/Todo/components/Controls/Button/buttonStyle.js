import { makeStyles } from "@material-ui/core";

export default function useButtonStyle(buttonCss) {
  const useStyle = makeStyles((theme) => ({
    buttonCss: buttonCss,
  }));
  const classes = useStyle();
  return {
    classes,
  };
}
