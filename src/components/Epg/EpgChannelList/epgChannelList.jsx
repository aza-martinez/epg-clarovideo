import React, { useMemo } from "react";
import useEpgContext from "@/hooks/useEpgContext";
import EpgChannel from "./EpgChannel";
import classes from "./epgChannelList.module.css";

const EpgChannelList = () => {
  const { channels } = useEpgContext();

  const channelList = useMemo(() => {
    if (channels.length > 0) {
      return channels.map((channel) => (
        <EpgChannel
          key={channel.id + channel.name}
          title={channel.number}
          imagePath={channel.image}
        />
      ));
    }
  }, [channels]);

  return <div className={classes.epgChannelList}>{channelList}</div>;
};

export default EpgChannelList;
