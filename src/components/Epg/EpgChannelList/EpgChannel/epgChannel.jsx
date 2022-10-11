import React from "react";
import classes from "./epgChannel.module.css";

const EpgChannel = (props) => {
  const { title, imagePath } = props;

  return (
    <div className={classes.epgChannel}>
      <span className={classes.epgChannelTitle}>{title}</span>
      <img className={classes.epgChannelImage} src={imagePath} alt={title} />
    </div>
  );
};

export default React.memo(EpgChannel);
