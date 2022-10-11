import React from "react";
import ChevronLeft from "@/components/Icons/chevronLeft";
import ChevronRight from "@/components/Icons/chevronRight";
import useEpgContext from "@/hooks/useEpgContext";
import classes from "./epgTimelineActions.module.css";

const EpgTimelineActions = () => {
  const { handleNextEvents, handleBackEvents } = useEpgContext();

  return (
    <div className={classes.epgTimelineActions}>
      <button className={classes.epgTimelineAction} onClick={handleBackEvents}>
        <ChevronLeft />
      </button>
      <button className={classes.epgTimelineAction} onClick={handleNextEvents}>
        <ChevronRight />
      </button>
    </div>
  );
};

export default EpgTimelineActions;
