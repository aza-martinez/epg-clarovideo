import axios from "axios";
import useEpgContext from "@/hooks/useEpgContext";

const API_BASE_URL = "https://mfwkweb-api.clarovideo.net/services/epg/channel";

const DEFAULT_PARAMS = {
  device_id: "web",
  device_category: "web",
  device_model: "web",
  device_type: "web",
  device_so: "Chrome",
  format: "json",
  device_manufacturer: "generic",
  authpn: "webclient",
  authpt: "tfg1h3j4k6fd7",
  api_version: "v5.93",
  region: "mexico",
  HKS: "web61144bb49d549",
  user_id: "54343080",
  quantity: "200",
};

const useApi = () => {
  const { setChannels } = useEpgContext();

  const cleanChannelEvents = (channels) => {
    if (channels) {
      return channels.map((channel) => {
        const now = new Date();
        const events = channel.events.filter(
          (event) => new Date(event.date_begin).getHours() >= now.getHours() + 1
        );

        return { ...channel, events };
      });
    }
  };

  /**
   *
   * @param {*} params
   * @returns
   */
  const getChannels = async (params) => {
    try {
      const now = Date.now();
      const dateNow = new Date(now);
      const year = dateNow.getFullYear();
      const month = ("0" + (dateNow.getMonth() + 1)).slice(-2);
      const day = dateNow.getDate();
      const hours = ("0" + dateNow.getHours()).slice(-2);
      const minutes = ("0" + dateNow.getMinutes()).slice(-2);
      const seconds = "00";
      const lastHour = "24";

      console.log({ minutes });

      const date_from = `${year}${month}${day}${hours}${minutes}${seconds}`;
      const date_to = `${year}${month}${day}${lastHour}${seconds}${seconds}`;

      const response = await axios.get(API_BASE_URL, {
        params: { ...DEFAULT_PARAMS, date_from, date_to, ...params },
      });

      const filteredChannels = cleanChannelEvents();

      setChannels(response.data.response.channels);
    } catch (error) {
      console.error("error:", error);
    }
  };

  return {
    getChannels,
  };
};

export default useApi;
