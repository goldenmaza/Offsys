import {
    selectorState,
    preventionState
} from '../constants/common';

export const selectorComponent = (state = selectorState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export const preventionComponent = (state = preventionState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};
