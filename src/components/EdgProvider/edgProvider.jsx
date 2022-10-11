import React from "react";
import EdgContext from "@/context/EdgContext/edgContext";
import useEdgProvider from "./useEdgProvider";

const EdgProvider = (props) => {
  const { children } = props;
  const { state, ...restvaluesProvider } = useEdgProvider();

  return (
    <EdgContext.Provider value={{ ...state, ...restvaluesProvider }}>
      {children}
    </EdgContext.Provider>
  );
};

export default EdgProvider;
