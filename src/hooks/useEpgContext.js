import { useContext } from "react";
import EdgContext from "@/context/EdgContext/edgContext";

const useEpgContext = () => useContext(EdgContext);

export default useEpgContext;
