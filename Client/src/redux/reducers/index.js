import { combineReducers } from 'redux';
import {
    appComponent
} from './app';
import {
    selectorComponent,
    preventionComponent
} from './common';
import {
    homeComponent,
} from './home';
import {
    orderComponent,
} from './order';

const combinedReducers = combineReducers({
    appComponent,
    selectorComponent,
    preventionComponent,
    homeComponent,
    orderComponent,
});

export default combinedReducers;

//No state for the Heading & Select component as it get it's 'state' from the Component that created it...
