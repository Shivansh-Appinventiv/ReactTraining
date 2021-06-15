//import { TextField, Button, makeStyles } from "@material-ui/core";
import "./index.css";
import { dummyData } from "./dummyData";
//mport clsx from "clsx";
import { useState } from "react";
import { ArrayScreen } from "./components/ArrayScreen";
import HomeScreen from "./components/HomeScreen";
import ObjScreen from "./components/ObjScreen";
import StrScreen from "./components/StrScreen";


const LogicalAbility = () => {
  const [screen, setScreen] = useState("homeScreen");
  const [which, setWhich] = useState(null);

  if (JSON.parse(window.localStorage.getItem("data")) === null) {
    window.localStorage.setItem("data", JSON.stringify(dummyData));
  }

  const changeScreen = (screenVal, which) => {
    setScreen(screenVal);
    setWhich(which ? which : null);
    console.log(screenVal, which);
  };

  const renderScreen = () => {
    switch (screen) {
      case "homeScreen":
        return (
          <HomeScreen
            renderNext={(screenVal, which) => changeScreen(screenVal, which)}
          />
        );
      case "arrayScreen":
        return <ArrayScreen which={which} />;
      case "objScreen":
        return <ObjScreen which={which}/>;
      case "strScreen":
        return <StrScreen which={which}/>;
      default:
        break;
    }
  };

  return <div className={`screenContainer`}>{renderScreen()}</div>;
};

export default LogicalAbility;
