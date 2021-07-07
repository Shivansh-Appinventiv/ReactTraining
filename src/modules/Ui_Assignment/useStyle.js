import { makeStyles } from "@material-ui/core";

const styles = makeStyles({
  headerCss: {
    background: "rgba(50, 95, 128, 255)",
    color: "white",
    zIndex: "3"
  },
  drawerCss: {
    "& .MuiPaper-root": {
      backgroundColor: "#1e3c50",
    },
    "& .MuiDrawer-paper": {
      zIndex: "1",
    },
  },
  paperCss: {
    width: "65px",
    paddingTop: "65px",
    height: "100%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "column",
    color: "white",
  },
  logoIcon: {
    background: "white",
    color: "rgba(50, 95, 128, 255)",
    width: "45px",
    height: "45px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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
  drawerIcon: {
    minHeight: "60px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  contentCss: {
    padding: "65px 0 0 65px",
    background: "#efeff3",
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
    height: "40px"
  },
  deleteButton:{
    height: "40px"
  },
});

export default function useStyle() {
  const classes = styles();
  return {
    headerCss: classes.headerCss,
    drawerCss: classes.drawerCss,
    paperCss: classes.paperCss,
    logoIcon: classes.logoIcon,
    logoText: classes.logoText,
    logoContainer: classes.logoContainer,
    accountContainer: classes.accountContainer,
    drawerIcon: classes.drawerIcon,
    contentCss: classes.contentCss,
    workOrder: classes.workOrder,
    sideTitle: classes.sideTitle,
    requestMaterialContainer: classes.requestMaterialContainer,
    searchField: classes.searchField,
    textField: classes.textField,
    searchIcon: classes.searchIcon,
    searchAddContainer: classes.searchAddContainer,
    selectedContainer: classes.selectedContainer,
    filterButton: classes.filterButton,
    deleteButton: classes.deleteButton,
  };
}
