import { GET_AQUARIUMS, AQUARIUM_ERROR } from "../actions/types";

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
    case AQUARIUM_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };

    default:
      return state;
  }
}
