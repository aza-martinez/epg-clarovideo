import React, { useMemo } from "react";
import useEpgContext from "@/hooks/useEpgContext";
import EpgEvent from "./EpgEvent/epgEvent";
import classes from "./epgEvents.module.css";

const EpgEvents = () => {
  const { channels, marginEvents } = useEpgContext();

  const marginContainer = `${marginEvents}px`;

  const channelRows = useMemo(() => {
    if (channels) {
      return channels?.map((channel) => (
        <div key={channel.id} className={classes.channelRow}>
          {channel.events.map((event) => (
            <EpgEvent
              key={channel.name + event.id}
              channelId={channel.id}
              event={event}
              eventId={event.id}
              name={event.name}
              duration={event.duration}
            />
          ))}
        </div>
      ));
    }
  }, [channels]);

  return (
    <div
      style={{ marginLeft: marginContainer }}
      className={classes.epgEventsContainer}
    >
      {channelRows}
    </div>
  );
};

export default EpgEvents;
