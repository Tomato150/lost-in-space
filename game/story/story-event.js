export default class StoryEvent {
    constructor(
        game_json
    ) {
        this.story_name = game_json.story_name;
        this.event_title = game_json.event_title;
        this.story_nodes = game_json.story_nodes;
        this.choice_nodes = game_json.choice_nodes;
    }

    update = () => {};
}
