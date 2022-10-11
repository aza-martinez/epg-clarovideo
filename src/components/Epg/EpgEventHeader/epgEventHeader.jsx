import React from "react";
import EpgTimeline from "@/components/Epg/EpgTimeline";
import EpgTimelineActions from "../EpgTimelineActions";
import classes from "./epgEventHeader.module.css";
import EpgFilter from "@/components/Epg/EpgFilter";

const EpgEventHeader = () => {
  return (
    <div className={classes.epgEventHeaderContainer}>
      <EpgFilter />
      <div className={classes.epgEventHeader}>
        <div className={classes.epgEventHeaderTitle}>
          <label>HOY</label>
        </div>
        <EpgTimeline />
        <EpgTimelineActions />
      </div>
    </div>
  );
};

export default EpgEventHeader;
