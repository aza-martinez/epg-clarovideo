import useApi from "@/hooks/useApi";
import useEpgContext from "@/hooks/useEpgContext";
import { useCallback, useEffect, useState } from "react";

const useEpg = () => {
  const { getChannels } = useApi();
  const [isOpen, setIsOpen] = useState(false);
  const { setChannels, channels } = useEpgContext();

  useEffect(() => {
    getChannels();
  }, []);

  const handleIsOpen = () => setIsOpen(!isOpen);

  return {
    handleIsOpen,
    isOpen,
  };
};

export default useEpg;
