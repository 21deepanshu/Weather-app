import axios from "axios";

const API_KEY = "56c7e5c0b0c34a2589f61403242105";

export const fetchWeather = (location) => async (dispatch) => {
  dispatch({ type: "FETCH_WEATHER_REQUEST" });
  try {
    const response = await axios.get(
      `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}`
    );
    dispatch({ type: "FETCH_WEATHER_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "FETCH_WEATHER_FAILURE", payload: error.message });
  }
};
