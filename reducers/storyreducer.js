// @flow
import {GET_NEW_STORY, UPDATE_STORY_NODE, FINISH_STORY} from '../actions/keywords';
import type {GetNewStory, UpdateStoryNode, FinishStory} from "../actions/storyactions";

import StoryEvent from "../game/stories/storyevent";
import A1E1 from "../game/stories/storyjsons/A1E1.json";


type State = {
    +story_library: {
        +[string]: StoryEvent
    },
    +random_story_library: Array<StoryEvent>,
    +queued_stories: Array<StoryEvent>,
    +story_history: Array<{}>,

    +current_story: StoryEvent | null,
    +current_story_node: string | null,
    +current_story_history: Array<string>
}

type StoryAction = GetNewStory | UpdateStoryNode | FinishStory// add new types here.
let story_library = {
    A1E1: new StoryEvent(A1E1)
};

const storyReducer = (
    state: State ={
        story_library: story_library,
        random_story_library: [story_library.A1E1],
        queued_stories: [],
        story_history: [],

        current_story: null,
        current_story_node: null,
        current_story_history: []
    },
    action: StoryAction
) => {
    switch(action.type) {
        case GET_NEW_STORY:
            const {new_story} = action;
            if (new_story === "NEXT") {
                if (state.queued_stories.length < 1) { // Select a random story.
                    let random_story_library = state.random_story_library;
                    let story = random_story_library[Math.floor(Math.random()*random_story_library.length)];
                    return {
                        ...state,
                        current_story: story,
                        current_story_node: "entry",
                        current_story_history: [],

                        story_history: [...state.story_history, state.current_story_history]
                    }
                } else { // Select the first story from the list.
                    return {
                        ...state,
                        current_story: state.queued_stories[0],
                        current_story_node: "entry",
                        current_story_history: [],
                        queued_stories: state.queued_stories.slice(1, state.queued_stories.length),

                        story_history: [...state.story_history, state.current_story_history]
                    }
                }
            }
            return {
                ...state,
                current_story: state.story_library[new_story],
                current_story_node: "entry",
                current_story_history: [],

                story_history: [...state.story_history, state.current_story_history]
            };
        case UPDATE_STORY_NODE:
            const {story_node} = action;
            return {
                ...state,
                current_story_node: story_node,
                current_story_history: [...state.current_story_history, state.current_story_node]
            };
        case FINISH_STORY:
            return {
                ...state,
                current_story: null,
                current_story_node: null,
                current_story_history: [],

                story_history: [...state.story_history, state.current_story_history]
            };
        default:
            return state;
    }
};

export default storyReducer;
