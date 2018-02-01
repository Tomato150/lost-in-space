// @flow
import {GET_NEW_STORY, UPDATE_STORY_NODE, FINISH_STORY} from '../actions/keywords';
import type {GetNewStory, UpdateStoryNode} from "../actions/storyactions";

import StoryEvent from "../game/stories/storyevent";
import A1E1 from "../game/stories/storyjsons/A1E1.json";


type State = {
    +story_library: {
        +[string]: StoryEvent
    },
    +story_history: Array<Array<string>>,

    +current_story: StoryEvent | null,
    +current_story_node: string | null,
    +current_story_history: Array<string>,
    +story_queue: Array<StoryEvent>
}

type StoryAction = GetNewStory  // add new types here.

const storyReducer = (
    state: State = {
        story_library: {
          A1E1: new StoryEvent(A1E1)
        },
        story_history: [],

        current_story: null,
        current_story_node: null,
        current_story_history: [],
        story_queue: []
    }, action: StoryAction | UpdateStoryNode
) => {
    switch (action.type) {
        case GET_NEW_STORY:
            const {new_story} = action;
            if (new_story === "NEXT") {
                // TODO set state equivalent for the next queued story
                if (state.story_queue.length < 1) {
                    let keys = Object.keys(state.story_library);
                    return {
                        ...state,
                        current_story: state[keys[keys.length * Math.random() << 0]],
                        current_story_node: "entry",
                        current_story_history: []
                    }
                } else {
                    return {
                        ...state,
                        current_story: state.story_queue[0],
                        current_story_node: "entry",
                        current_story_history: [],

                        story_queue: state.story_queue.slice(1, state.story_queue.length),
                    }
                }
            }
            // Use this side of things if you want to trigger a certain story.
            return {
                ...state,
                current_story: state.story_library[new_story],
                current_story_node: "entry",
                current_story_history: [],
            };

        case UPDATE_STORY_NODE:
            const {new_story_node} = action;
            return {
                ...state,
                current_story_node: new_story_node,
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
