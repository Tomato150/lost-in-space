// @flow
import React, {Component} from 'react';
import {View} from 'react-native';
import {connect} from "react-redux";

import StoryFlavourText from '../components/storyflavourtext';
import StoryResults from '../components/storyresults';
import StoryChoices from '../components/storychoices';

import StoryEvent from '../game/stories/storyevent';


type Props = {
    dispatch: Function,
    StoryStatus: {
        current_story: StoryEvent,
        current_story_node: string
    }
}

const StoryWindow = connect(store => {
    const {ShipStatus, StoryStatus} = store;
    return {ShipStatus, StoryStatus};
})(class StoryWindow extends Component<Props> {
    constructor(props: Props) {
        super(props);
    }

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
                        results={current_story.story_nodes[current_story_node].results}
                    />
                    <StoryChoices
                        dispatch={dispatch}
                        story_choice_nodes={current_story.choice_nodes}
                        choice_nodes_to_render={current_story.story_nodes[current_story_node].choice_nodes}
                    />
                </View>
            )
        } else {
            return [];
        }
    }
});

export default StoryWindow;
