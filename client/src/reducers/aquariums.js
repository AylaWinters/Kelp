import {
  GET_AQUARIUMS,
  AQUARIUM_ERROR,
  UPDATE_LIKES,
  ADD_AQUARIUM,
} from "../actions/types";

const initialState = {
  aquariums: [],
  aquarium: null,
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_AQUARIUMS:
      return {
        ...state,
        aquariums: payload,
        loading: false,
      };
    case ADD_AQUARIUM:
      return {
        ...state,
        aquariums: [...state.aquariums, payload],
        loading: false,
      };
    case AQUARIUM_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case UPDATE_LIKES:
      return {
        ...state,
        aquariums: state.aquariums.map((aqua) =>
          aqua._id === payload.id ? { ...aqua, likes: payload.likes } : aqua
        ),
        loading: false,
      };

    default:
      return state;
  }
}
