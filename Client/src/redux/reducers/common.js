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

//No state for the Heading & Select component as it get it's 'state' from the Component that created it...
