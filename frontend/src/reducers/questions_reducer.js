import { GET_QUESTIONS,CURRENT_QUESTION } from "../actions/types";

const initialState = {
  currentQuestion: null
};

export default function questionsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_QUESTIONS:
      return {
        ...state,
        questions: action.payload
      };
    case CURRENT_QUESTION: {
      return {
        ...state,
        currentQuestion: action.payload
      }
    }
    default:
      return state;
  }
}
