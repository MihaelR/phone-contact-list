import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  closeButton: {
    width: "30px",
    height: "30px",
  },
  modalButton: {
    fontSize: "16px",
    marginTop: "15px",
    padding: "10px",
    "&:hover": {
      background: "#fed4e9",
    },
  },
  desription: {
    marginTop: "15px",
  },
  header: {
    marginTop: "15px",
  },
}));

export const SimpleModal = ({
  surname,
  name,
  phone,
  city,
  country,
  street,
}) => {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const bodyContent = (
    <div style={modalStyle} className={classes.paper}>
      <button onClick={handleClose} className={classes.closeButton}>
        X
      </button>
      <h2 className={classes.header}>
        {surname} {name}
      </h2>
      <p className={classes.desription}>
        <strong>phone: </strong>
        {phone}
      </p>
      <p className={classes.desription}>
        <strong>country: </strong>
        {country}
      </p>
      <p className={classes.desription}>
        <strong>city: </strong>
        {city}
      </p>
      <p className={classes.desription}>
        <strong>street: </strong> {street}
      </p>
    </div>
  );

  return (
    <div data-testid="modal-1">
      <button
        type="button"
        onClick={handleOpen}
        className={classes.modalButton}
      >
        {surname} {name}
      </button>
      <Modal
        open={open}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {bodyContent}
      </Modal>
    </div>
  );
};
