// @flow
import {CHANGE_GAME_SCREEN, STORY, INVENTORY} from './keywords';


export type ChangeGameScreen = {type: typeof CHANGE_GAME_SCREEN, screen?: typeof STORY | typeof INVENTORY } ;
export const changeGameScreen = (screen?: typeof STORY | typeof INVENTORY ) => ({type: CHANGE_GAME_SCREEN, screen});