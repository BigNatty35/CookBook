import React from 'react';
import { GET_ERRORS } from '../actions/types';

const initialState = {};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      return {
        ...state,
        errors: action.payload
      }
    default:
      return state;
  }
}
