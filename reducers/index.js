import {combineReducers} from 'redux';

import shipReducer from './shipreducer'
import storyReducer from './storyreducer'
import gameCoreReducer from './gamecorereducer'

const appReducer = combineReducers({
    ShipStatus: shipReducer,
    StoryStatus: storyReducer,
    GameCoreStatus: gameCoreReducer
});

export default appReducer;

