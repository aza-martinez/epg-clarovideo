import { createPortal } from "react-dom";

const Portal = ({ children }) => {
  const portalNode = document.getElementById("portal-root");

  return createPortal(children, portalNode);
};

export default Portal;
