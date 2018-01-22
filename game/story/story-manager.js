import React, {Component} from 'react';
import StoryEvent from "./story-event";

import A1E1 from "../data/events/A1E1.json";
import A2E2 from "../data/events/A1E2.json";


export default class StoryManager{
    constructor() {
        this.story_library = {
            A1E1: new StoryEvent(A1E1),
            A1E2: new StoryEvent(A2E2)
        };
        this.story_history = []; // List of objects with keys: "Story name" and "Story path taken"
        this.current_story = null;
    }

    getNewStory = () => {
        let new_story;
        if (this.current_story === this.story_library.A1E1){
            new_story = this.story_library.A1E2;
        } else {
            new_story = this.story_library.A1E1;
        }
        this.current_story = new_story;
        return new_story;
    };

    storyFinishedHandler = (story_history) => {
        this.story_history.push(
            {
                story_name: this.current_story.story_name,
                story_history
            }
        )
    };
}