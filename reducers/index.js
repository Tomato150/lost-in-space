import {combineReducers} from 'redux';

import shipReducer from './shipreducer'
import storyReducer from './storyreducer'

const appReducer = combineReducers({
    ShipStatus: shipReducer,
    StoryStatus: storyReducer
});

export default appReducer;

