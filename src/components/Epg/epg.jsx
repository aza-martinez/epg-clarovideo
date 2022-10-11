import React from "react";
import Button from "@/components/Button";
import EpgModal from "./EpgModal";
import useEpg from "./useEpg";
import classes from "./epg.module.css";

const Epg = () => {
  const { handleIsOpen, isOpen } = useEpg();

  return (
    <div className={classes.epg}>
      <Button onClick={handleIsOpen}>{"Mostrar EPG"}</Button>
      <EpgModal isOpen={isOpen} />
    </div>
  );
};

export default Epg;
