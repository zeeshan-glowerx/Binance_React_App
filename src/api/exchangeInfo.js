import { fetchWithGet } from "../utils.js/fetchUtil";

export const getExchangeInfo = async () => {
    const response = await fetchWithGet(
      `/binance/orders`,
    );
    return response;
  };