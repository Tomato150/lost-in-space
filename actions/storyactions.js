// @flow
import {GET_NEW_STORY, UPDATE_STORY_NODE, FINISH_STORY} from './keywords';

export type GetNewStory = {type: typeof GET_NEW_STORY, new_story: string};
export const getNewStory = (new_story: string): GetNewStory => ({
    type: GET_NEW_STORY,
    new_story
});

export type UpdateStoryNode = {type: typeof UPDATE_STORY_NODE, new_story_node: string};
export const updateStoryNode = (new_story_node: string): UpdateStoryNode => ({type: UPDATE_STORY_NODE, new_story_node});

export type FinishStory = {type: typeof FINISH_STORY};
export const finishStory = ():FinishStory => ({type: FINISH_STORY});
