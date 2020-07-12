import {
    homeState,
} from '../constants/home';

export const homeComponent = (state = homeState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};
