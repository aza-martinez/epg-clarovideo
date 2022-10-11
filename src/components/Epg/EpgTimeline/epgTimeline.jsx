import React, { useMemo } from "react";
import useEpgContext from "@/hooks/useEpgContext";
import classes from "./epgTimeline.module.css";

const EpgTimeline = () => {
  const { marginEvents } = useEpgContext();

  const listHours = useMemo(() => {
    const now = Date.now();
    const nowDate = new Date(now);
    const hours = nowDate.getHours();
    const minutes = nowDate.getMinutes();
    let listItems = [];

    for (let index = hours; index <= 24; index++) {
      listItems.push(
        <span className={classes.epgTimelineItem} key={"event30" + index}>
          {index}hs
        </span>
      );
      listItems.push(
        <span className={classes.epgTimelineItem} key={"event30" + index}>
          {index + 0.3}hs
        </span>
      );

      /*       if (minutes > 0 && minutes <= 30) {
        listItems.push(
          <span className={classes.epgTimelineItem} key={"event" + index}>
          
                listItems.push(
                  <span className={classes.epgTimelineItem} key={"event30" + index}>
                    {index}hs
                  </span>
                );
          {parseFloat(index).toFixed(2)}hs.
          </span>
          );
      } */
    }

    return listItems;
  }, []);

  return (
    <div
      className={classes.epgTimeline}
      style={{ marginLeft: `${marginEvents}px` }}
    >
      {listHours}
    </div>
  );
};

export default EpgTimeline;
