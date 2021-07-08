import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  headerCss: {
    minHeight: "48px",
    background: "rgba(50, 95, 128, 255)",
    color: "white",
    zIndex: "3",
    "& .MuiToolbar-gutters": {
      padding: "0px",
    },
    "& .MuiToolbar-regular": {
      minHeight: "48px",
    },
  },
  logoWrapper: {
    width: "48px",
    height: "48px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  logoIcon: {
    background: "white",
    color: "rgba(50, 95, 128, 255)",
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "22px",
  },
  logoText: {
    marginLeft: "20px",
    display: "flex",
    width: "90px",
    justifyContent: "space-between",
  },
  logoContainer: {
    width: "180px",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  accountContainer: {
    width: "200px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default function useHeaderStyle() {
  const classes = useStyle();
  return { classes };
}
