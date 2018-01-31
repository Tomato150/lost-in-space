// @flow
import React, {Component} from 'react';
import {View} from 'react-native';
import {connect} from "react-redux";

import StoryFlavourText from '../components/storyflavourtext';
import StoryResults from '../components/storyresults';
import StoryChoices from '../components/storychoices';

import StoryEvent from '../game/stories/storyevent';
import {getNewStory} from "../actions/storyactions";


type Props = {
    dispatch: Function,
    changePhase: (new_phase: "Story" | "Inventory") => void,
    StoryStatus: {
        current_story: StoryEvent,
        current_story_node: string
    }
}

export default connect(store => {
    const {ShipStatus, StoryStatus} = store;
    return {ShipStatus, StoryStatus};
})(class StoryWindow extends Component<Props> {
    constructor(props: Props) {
        super(props);
    }


    componentWillMount() {
        console.log("SETTING THIS SHIT UP GARETH.");
        this.props.dispatch(getNewStory("A1E1"));
        console.log("WOW GARETH.")
    };

    render() {
        const dispatch = this.props.dispatch;
        const {current_story, current_story_node} = this.props.StoryStatus;
        if (current_story) {
            return (
                <View>
                    <StoryFlavourText
                        current_story_node_text={current_story.story_nodes[current_story_node].story_text}
                    />
                    <StoryResults
                        dispatch={dispatch}  // TODO make it so it's a call back and then add dispatch to props.
                        // I.E., this.props[function_var] for the dispatch.
                        results={current_story.story_nodes[current_story_node].results}
                    />
                    <StoryChoices
                        story_choice_nodes={current_story.choice_nodes}
                        choice_nodes_to_render={current_story.story_nodes[current_story_node].choice_nodes}
                        dispatch={dispatch}
                    />
                </View>
            )
        } else {
            return []; // Just needs to be here to stop it from having a spazzzzz for the story not being in place.
        }
    }
});