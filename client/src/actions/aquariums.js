import axios from "axios";
import { setAlert } from "./alert";
import {
  GET_AQUARIUMS,
  AQUARIUM_ERROR,
  UPDATE_LIKES,
  ADD_AQUARIUM,
} from "./types";

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
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Add aquarium
export const addAquarium = (formData, history) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.post("/api/aquariums", formData, config);

    dispatch({
      type: ADD_AQUARIUM,
      payload: res.data,
    });
    dispatch(setAlert("Aquarium Added!", "success"));
    history.push("/aquariums");
  } catch (err) {
    dispatch({
      type: AQUARIUM_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// add like
export const addLike = (id) => async (dispatch) => {
  try {
    const res = await axios.put(`/api/aquariums/like/${id}`);

    dispatch({
      type: UPDATE_LIKES,
      payload: { id, likes: res.data },
    });
  } catch (err) {
    dispatch({
      type: AQUARIUM_ERROR,
      payload: { msg: err.response },
    });
  }
};

// remve like
export const removeLike = (id) => async (dispatch) => {
  try {
    const res = await axios.put(`/api/aquariums/unlike/${id}`);

    dispatch({
      type: UPDATE_LIKES,
      payload: { id, likes: res.data },
    });
  } catch (err) {
    dispatch({
      type: AQUARIUM_ERROR,
      payload: { msg: err.response },
    });
  }
};
