import * as ActionTypes from './ActionTypes';

export const Feedbacks = (state = {
        feedbacks: []
    }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_FEEDBACKS:
            return { feedbacks: action.payload };

        default:
          return state;
      }
};