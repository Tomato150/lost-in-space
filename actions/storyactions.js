// @flow
import {GET_NEW_STORY, UPDATE_STORY_NODE} from './keywords';

export type GetNewStory = {type: typeof GET_NEW_STORY, new_story: string};
export const getNewStory = (new_story: string | "NEXT"): GetNewStory => ({
    type: GET_NEW_STORY,
    new_story
});

export type updateStoryNode = {type: typeof UPDATE_STORY_NODE, new_story_node: string}
export const updateStoryNode = (new_story_node: string): updateStoryNode => ({
    type: UPDATE_STORY_NODE,
    new_story_node
});