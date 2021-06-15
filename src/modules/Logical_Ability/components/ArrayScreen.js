import { useState } from "react";
import { Button } from "@material-ui/core";
import EditForm from "./EditForm";

export const ArrayScreen = (props) => {
  const [isOpen, setIsOpen] = useState({
    open: false,
    index: 0,
  });

  const [arrayCard, setArrayCard] = useState(
    props.which === "bikes"
      ? JSON.parse(window.localStorage.getItem("data")).bikes
      : JSON.parse(window.localStorage.getItem("data")).cars
  );

  const handleClick = (index) => {
    console.log(Number(index));
    setIsOpen({
      open: true,
      index: Number(index),
    });
  };

  const handleSave = () => {
    if (props.which === "bikes") {
      setArrayCard(JSON.parse(window.localStorage.getItem("data")).bikes);
    } else if (props.which === "cars") {
      setArrayCard(JSON.parse(window.localStorage.getItem("data")).cars);
    }
  };

  const handleClose = () => {
    setIsOpen({
      open: false,
      index: 0,
    });
  };

  return (
    <div className={`arrayScreenContainer`}>
      <h1 style={{ textAlign: "center" }}>{`${props.which} data`}</h1>
      <div className={`formContainer`}>
        <EditForm
          isOpen={isOpen.open}
          entries={Object.entries(arrayCard[isOpen.index])}
          handleClose={() => handleClose()}
          handleSave={() => handleSave()}
          which={props.which}
        />
      </div>
      <div className={`arrayCards`}>
        {arrayCard !== null ? (
          <>
            {arrayCard.map((val, index) => {
              return (
                <div className={`cardDetails`} key={index}>
                  <div className={`cardItem`}>{val.Name}</div>
                  <div className={`cardItem`}>{val.price}</div>
                  <div className={`cardItem`}>
                    <Button
                      id={index}
                      variant={`contained`}
                      color={`secondary`}
                      onClick={() => handleClick(index)}
                    >
                      {`Edit`}
                    </Button>
                  </div>
                </div>
              );
            })}
          </>
        ) : null}
      </div>
    </div>
  );
};
