import React from "react";
import Button from "@/components/Button";
import EpgModal from "./EpgModal";
import useEpg from "./useEpg";
import classes from "./epg.module.css";

const Epg = () => {
  const { isOpen, handleIsOpen } = useEpg();

  return (
    <div className={classes.epg}>
      <Button onClick={handleIsOpen}>{"Mostrar EPG"}</Button>
      <EpgModal isOpen={isOpen} handleIsOpen={handleIsOpen} />
    </div>
  );
};

export default Epg;
