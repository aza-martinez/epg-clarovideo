import { useReducer } from "react";
import EpgReducer from "@/context/EdgContext/edgReducer";
import { contextTypes } from "@/context/EdgContext/contextTypes";
import { EVENT_WIDTH } from "../../constants/events";

const INITIAL_VALUES = {
  channels: [],
  marginEvents: 0,
  event: null,
};

const useEdgProvider = () => {
  const [state, dispatch] = useReducer(EpgReducer, INITIAL_VALUES);

  const setChannels = (channels) => {
    dispatch({
      type: contextTypes.SET_CHANNELS,
      payload: channels,
    });
  };

  const handleNextEvents = () => {
    const marginEvents = state.marginEvents - EVENT_WIDTH;
    dispatch({
      type: contextTypes.SET_MARGIN_EVENTS,
      payload: marginEvents,
    });
  };

  const handleBackEvents = () => {
    const marginEvents =
      state.marginEvents >= 0 ? 0 : state.marginEvents + EVENT_WIDTH;

    dispatch({
      type: contextTypes.SET_MARGIN_EVENTS,
      payload: marginEvents,
    });
  };

  const setEvent = (channelId, eventId) => {
    const channel = state.channels.find((channel) => channel.id === channelId);
    const event = channel.events.find((e) => e.id === eventId);
    dispatch({
      type: contextTypes.SET_EVENT,
      payload: event,
    });
  };

  return {
    state,
    setChannels,
    handleNextEvents,
    handleBackEvents,
    setEvent,
  };
};

export default useEdgProvider;
