import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
 // makeStyles,
  Typography,
} from "@material-ui/core";

//const useStyles = makeStyles((theme) => ({}));

export default function PopUp(props) {
  const { title, children, openPopup, setOpenPopup } = props;
  //const classes = useStyles();
  return (
    <Dialog open={openPopup}>
      <DialogTitle>
        <div className={`formHeader`}>
          <Typography variant={`h6`} component={`div`}>
            {title}
          </Typography>
          <div className={`crossSymbol`} onClick={() => setOpenPopup(false)}>
            &#10006;
          </div>
        </div>
      </DialogTitle>
      <DialogContent dividers>{children}</DialogContent>
    </Dialog>
  );
}
