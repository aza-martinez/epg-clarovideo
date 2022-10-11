import React from "react";
import Modal from "@/components/Modal";
import EpgEvents from "@/components/Epg/EpgEvents";
import EpgEventDetail from "@/components/Epg/EpgEventDetail";
import EpgChannelList from "@/components/Epg/EpgChannelList";
import EpgEventHeader from "@/components/Epg/EpgEventHeader";
import classes from "./epgModal.module.css";

const EpgModal = (props) => {
  const { isOpen } = props;

  return (
    <Modal isOpen={isOpen}>
      <div className={classes.epgModal}>
        <EpgEventDetail />
        <div className={classes.schedulerContainer}>
          <EpgEventHeader />
          <div className={classes.schedule}>
            <EpgChannelList />
            <EpgEvents />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default EpgModal;
