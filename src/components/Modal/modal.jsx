import React from "react";
import Portal from "@/components/Portal";
import CloseIcon from "@/components/Icons/CloseIcon";
import classes from "./modal.module.css";

const Modal = (props) => {
  const { children, isOpen, handleIsOpen } = props;

  if (!isOpen) {
    return null;
  }

  return (
    <Portal>
      <div className={classes.modal}>
        <CloseIcon onClick={handleIsOpen} />
        {children}
      </div>
    </Portal>
  );
};

export default Modal;
