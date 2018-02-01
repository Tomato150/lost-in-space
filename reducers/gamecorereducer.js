// @flow
import {CHANGE_GAME_SCREEN, STORY, INVENTORY} from "../actions/keywords";

import type {ChangeGameScreen} from "../actions/gamecoreactions";


export type GameCoreState = {
    +current_phase: typeof STORY | typeof INVENTORY
}

type Action = ChangeGameScreen;

const gameCoreReducer = (
    state: GameCoreState = {
        current_phase: STORY
    },
    action: Action
) => {
    switch (action.type) {
        case CHANGE_GAME_SCREEN:
            if (action.screen) {
                return {
                    ...state,
                    current_phase: action.screen
                }
            } else {
                if (state.current_phase === STORY) return {
                    ...state,
                    current_phase: INVENTORY
                }; else return {
                    ...state,
                    current_phase: STORY
                }
            }
        default:
            return state
    }
};

export default gameCoreReducer
