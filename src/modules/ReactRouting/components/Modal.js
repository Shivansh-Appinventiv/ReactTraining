import {
  Dialog,
  DialogContent,
  DialogTitle,
  makeStyles,
  Box,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  modal: {
    margin: "0 auto",
  },
  formHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cross: {
    cursor: "pointer",
  },
}));

export default function Modal(props) {
  const classes = useStyles();
  const { isOpen, title, children, setIsOpen } = props;
  return (
    <Dialog open={isOpen} className={classes.modal}>
      <DialogTitle>
        <Box className={classes.formHeader}>
          <Box>{title}</Box>
          <Box className={classes.cross} onClick={() => setIsOpen(false)}>
            &#10006;
          </Box>
        </Box>
      </DialogTitle>
      <DialogContent dividers>{children}</DialogContent>
    </Dialog>
  );
}
