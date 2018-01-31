// @flow
export type ResultObject = {
    effect: string,
    result_text: string,
    result_type: string,
    conditions: boolean // TODO Change this up to allow for conditions
}

export type StoryNode = {
    story_text: string,
    results: false | Array<ResultObject>,
    choice_nodes: false | Array<string>
}

export type ChoiceNode = {
    choice_title: string,
    choice_text: string,
    choice_color: string
}

export default class StoryEvent {
    story_name: string;
    event_title: string;
    story_nodes: {
        entry: StoryNode,
        [string]: StoryNode
    };
    choice_nodes: {
        [string]: ChoiceNode
    };

    constructor(
        game_json: {
            story_name: string,
            event_title: string,
            story_nodes: {
                entry: StoryNode,
                [string]: StoryNode
            },
            choice_nodes: {
                [string]: ChoiceNode
            }
        }
    ) {
        this.story_name = game_json.story_name;
        this.event_title = game_json.event_title;
        this.story_nodes = game_json.story_nodes;
        this.choice_nodes = game_json.choice_nodes;
    }
}