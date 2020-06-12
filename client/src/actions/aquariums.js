import axios from "axios";
import { setAlert } from "./alert";
import {
  GET_AQUARIUMS,
  GET_AQUARIUM,
  AQUARIUM_ERROR,
  UPDATE_LIKES,
  ADD_AQUARIUM,
  ADD_COMMENT,
  REMOVE_COMMENT,
  UPDATE_COMMENT_LIKES,
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
      payload: { msg: err.response, status: err.response },
    });
  }
};

// Get aquarium
export const getAquarium = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/aquariums/${id}`);

    dispatch({
      type: GET_AQUARIUM,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AQUARIUM_ERROR,
      payload: { msg: err.response, status: err.response },
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

// remove like
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

// add comment
export const addComment = (aquaId, formData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await axios.post(
      `/api/aquariums/comment/${aquaId}`,
      formData,
      config
    );

    dispatch({
      type: ADD_COMMENT,
      payload: res.data,
    });

    dispatch(setAlert("Comment Added", "success"));
  } catch (err) {
    dispatch({
      type: AQUARIUM_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Delete comment
export const deleteComment = (aquaId, commentId, history) => async (
  dispatch
) => {
  try {
    await axios.delete(`/api/aquariums/comment/${aquaId}/${commentId}`);

    dispatch({
      type: REMOVE_COMMENT,
      payload: commentId,
    });

    history.push(`/aquarium/${aquaId}`);

    dispatch(setAlert("Comment Removed", "success"));
  } catch (err) {
    dispatch({
      type: AQUARIUM_ERROR,
      payload: { msg: err.response, status: err.response },
    });
  }
};

// add like to comments
export const addCommentLike = (id, aquaId) => async (dispatch) => {
  try {
    const res = await axios.put(
      `/api/aquariums/${aquaId}/comments/${id}/likes`
    );
    console.log("action hit", res);
    dispatch({
      type: UPDATE_COMMENT_LIKES,
      payload: { id, likes: res.data },
    });
  } catch (err) {
    console.log("action error", err);
    dispatch({
      type: AQUARIUM_ERROR,
      payload: { msg: err.response },
    });
  }
};

// remove like from comments
export const removeCommentLike = (id, aquaId) => async (dispatch) => {
  try {
    const res = await axios.put(
      `/api/aquariums/${aquaId}/comments/${id}/unlike`
    );

    dispatch({
      type: UPDATE_COMMENT_LIKES,
      payload: { id, likes: res.data },
    });
  } catch (err) {
    dispatch({
      type: AQUARIUM_ERROR,
      payload: { msg: err.response },
    });
  }
};
