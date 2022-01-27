const BASE_URL = "https://crypto-report-py.herokuapp.com/api";
export const getRequestFactory = (headers = null) => {
  return {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  };
};

export const handleResponse = async (response) => {
  try {
    console.log(response);
    const status = response.status;

    const json = await response.json();
    switch (true) {
      case status >= 200 && status < 300:
        return { success: true, message: "Success", data: json.data };
      case status >= 400 && status < 500:
        if (json.message === "Not authorized to access this route") {
          console.log("Not authorized to access this route");
          window.location.reload();
        }
        throw json.message;
      default:
        throw Error("Server Error!");
    }
  } catch (error) {
    return { success: false, message: error };
  }
};

export const fetchWithGet = async (endpoint, header = null) => {
  try {
    const response = await fetch(BASE_URL + endpoint,getRequestFactory(header),);
    return await handleResponse(response);
  } catch (error) {
    return { success: false, message: "Server Error" };
  }
};
