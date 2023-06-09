import { combineReducers } from 'redux';
import data from './data';


console.log('here!', data)

const rootReducer = combineReducers({
    data
});

export default rootReducer;