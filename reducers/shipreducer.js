// @flow
import {UPDATE_MARINES} from '../actions/keywords';

import type {CrewNumericalAction} from '../actions/crewactions';

type State = {
    +marines: number,
    +engineer: number,
    +scientists: number,
    +medics: number,
    +civilians: number
}

type Action = CrewNumericalAction;

const shipReducer = (
    state: State ={
        marines: 0,
        engineer: 0,
        scientists: 0,
        medics: 0,
        civilians: 0
    },
    action: Action
) => {
    switch(action.type) {
        case UPDATE_MARINES:
            const {value} = action;
            return {
                ...state,
                marines: state.marines + value
            };

        default:
            return state;
    }
};

export default shipReducer;
