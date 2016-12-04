import { combineReducers } from 'redux';

import contacts from './contacts';
import filter from './filter';
import viewType from './viewType';

// const combineReducers = reducers => {
//     return (state = {}, action) =>
//         Object.keys(reducers).reduce(
//             (nextState, key) => {
//                 nextState[key] = reducers[key] (
//                     state[key],
//                     action
//                 );
//
//                 return nextState;
//             },
//             {}
//         );
// };

export default combineReducers({ contacts, filter, viewType });
