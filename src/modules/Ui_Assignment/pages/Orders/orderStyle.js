import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  contentCss: {
    padding: "48px 0 0 48px",
    [theme.breakpoints.down('xs')]:{
      padding: "48px 0 0 0"
    }
  },
  workOrder: {
    minHeight: "40px",
    padding: "5px 0 5px 10px",
    display: "flex",
    alignItems: "center",
    fontSize: "14px",
  },
  sideTitle: {
    padding: "10px 20px 5px 20px",
  },
  requestMaterialContainer: {
    padding: "10px 20px 5px 20px",
  },
  searchAddContainer: {
    display: "flex",
    flexDirection: "column",
  },
  searchField: {
    display: "flex",
    border: "1px solid black",
    minHeight: "40px",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "400px",
    borderRadius: "5px",
    marginRight: "20px",
  },
  textField: {
    border: "none",
    outline: "none",
    height: "80%",
    width: "80%",
    fontSize: "15px",
  },
  searchIcon: {
    margin: "0 20px",
  },
  selectedContainer: {
    margin: "5px 18px 5px 0",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "90px",
    borderRight: "1px solid black",
  },
  filterButton: {
    "& .MuiButton-label": {
      fontSize: "14px",
    },
    height: "40px",
  },
  deleteButton: {
    height: "40px",
  },
}));

export default function useOrderStyle() {
  const classes = useStyle();
  return { classes };
}
