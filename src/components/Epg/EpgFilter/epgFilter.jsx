import React from "react";
import classes from "./epgFilter.module.css";
import Button from "@/components/Button";

const EpgFilter = () => {
  return (
    <div className={classes.epgFilter}>
      <Button>{"CANALES"}</Button>
      <Button>{"CATEGORÍAS"}</Button>
      <Button>{"FAVORITOS"}</Button>
    </div>
  );
};

export default EpgFilter;
