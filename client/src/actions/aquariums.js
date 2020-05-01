import axios from "axios";
import { setAlert } from "./alert";
import { GET_AQUARIUMS, AQUARIUM_ERROR } from "./types";

// Get aquariums
export const getAquariums = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/aquariums");

    dispatch({
      type: GET_AQUARIUMS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AQUARIUM_ERROR,
      payload: { msg: err.response },
    });
  }
};
