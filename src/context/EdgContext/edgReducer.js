import { contextTypes } from "./contextTypes";

const { SET_CHANNELS, SET_MARGIN_EVENTS, SET_EVENT } = contextTypes;

const EpgReducer = (state, action) => {
  switch (action.type) {
    case SET_CHANNELS:
      return {
        ...state,
        channels: action.payload,
      };
    case SET_MARGIN_EVENTS:
      return {
        ...state,
        marginEvents: action.payload,
      };
    case SET_EVENT:
      return {
        ...state,
        event: action.payload,
      };
    default:
      return state;
  }
};

export default EpgReducer;
