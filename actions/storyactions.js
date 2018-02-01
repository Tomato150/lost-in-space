// @flow
import {GET_NEW_STORY, SET_NEW_STORY_NODE} from './keywords';

export type GetNewStory = {type: typeof GET_NEW_STORY, new_story: string};
export const getNewStory = (new_story: string | "NEXT"): GetNewStory => ({
    type: GET_NEW_STORY,
    new_story
});

export type SetNewStoryNode = {type: typeof SET_NEW_STORY_NODE, new_story_node: string}
export const setNewStoryNode = (new_story_node: string): SetNewStoryNode => ({
    type: SET_NEW_STORY_NODE,
    new_story_node
});