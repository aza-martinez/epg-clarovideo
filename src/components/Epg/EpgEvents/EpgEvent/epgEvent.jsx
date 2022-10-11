import React, { useMemo } from "react";
import { durationToMinutes } from "@/utils/durationToMinutes";
import useEpgContext from "@/hooks/useEpgContext";
import classes from "./epgEvent.module.css";

const pixelsPerMinute = 11;

const EpgEvent = (props) => {
  const { name, duration, channelId, eventId, event } = props;
  const { setEvent } = useEpgContext();

  const width = useMemo(() => {
    if (duration) {
      const totalDuration = durationToMinutes(event.date_end);
      return totalDuration * pixelsPerMinute;
    }
  }, [duration]);

  const handleHover = () => setEvent(channelId, eventId);

  return (
    <div
      className={classes.epgEvent}
      style={{ width }}
      onMouseOver={handleHover}
    >
      <h2 className={classes.epgEventTitle}>{name}</h2>
      <span className={classes.epgEventTime}>
        {new Date(event.date_begin).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })}
        -
        {new Date(event.date_end).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </span>
    </div>
  );
};

export default EpgEvent;
