import React, { useMemo } from "react";
import useEpgContext from "@/hooks/useEpgContext";
import classes from "./epgEventDetail.module.css";
import { formatDate } from "../../../utils/formatDate";

const EpgEventDetail = () => {
  const { event } = useEpgContext();

  const eventInfoTime = useMemo(() => {
    if (event) {
      const dateFrom = formatDate(event.date_begin);
      const dateEnd = formatDate(event.date_end);
      const durationToArray = event.duration.split(":");
      const totalhours =
        durationToArray[0] < 10
          ? durationToArray[0].slice(-1)
          : durationToArray[0];
      const totalMinutes = durationToArray[1];

      return `${dateFrom}hs a ${dateEnd}hs ${totalhours}hs ${totalMinutes}min`;
    }
  }, [event]);

  return (
    <div className={classes.epgEventDetail}>
      <h1 className={classes.epgEventName}>{event?.name}</h1>
      <label className={classes.epgEventInfoTime}>{eventInfoTime}</label>
      <p className={classes.epgEventDescription}>{event?.description}</p>
    </div>
  );
};

export default EpgEventDetail;
