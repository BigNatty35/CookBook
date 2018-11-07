import { GET_QUESTIONS } from "../actions/types";

const initialState = {
  questions: {}
};

export default function questionsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_QUESTIONS:
      // debugger
      return {
        ...state,
        questions: action.payload
      };
    default:
      return state;
  }
}
