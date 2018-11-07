import { GET_QUESTIONS, GET_ERRORS } from "../actions/types";
import axios from "axios";

export const getQuestions = () => dispatch => {
  return axios
    .get("/api/questions/")
    .then(questions => {
      // console.log(questions);
      
      return dispatch({
        type: GET_QUESTIONS,
        payload: questions.data
      });
    }
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
