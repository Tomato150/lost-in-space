// @flow
import {UPDATE_CIVILIANS, UPDATE_MARINES} from './keywords';


function numericalAction<actionType>(action_type: actionType): (value: number) => {type: actionType, value: number} {
    return (value: number): {type: actionType, value: number} => ({type: action_type, value})
}

export type CrewNumericalAction = {
    type: typeof UPDATE_CIVILIANS | typeof UPDATE_MARINES,
    value: number
}

export const updateMarines = numericalAction(UPDATE_MARINES);
export const updateCivilians = numericalAction(UPDATE_CIVILIANS);

