// @flow
import React, {Component} from 'react';
import {View} from 'react-native';
import {connect} from "react-redux";

import StoryFlavourText from '../components/storyflavourtext';
import StoryResults from '../components/storyresults';
import StoryChoices from '../components/storychoices';

import {updateStoryNode} from "../actions/storyactions";
import StoryEvent from '../game/stories/storyevent';
import A1E1 from '../game/stories/storyjsons/A1E1.json';


type Props = {
    dispatch: Function,
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

    changeStoryNode = (choice_selected: string): void => {
        this.props.dispatch(updateStoryNode(choice_selected))
    };

    storyFinished = ():void => {
        // TODO
        console.log("DANK DADS");
    };

    render() {
        const dispatch = this.props.dispatch;
        const {current_story, current_story_node} = this.props.StoryStatus;
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
                    story_choice_nodes={current_story.choice_nodes}
                    storyFinished={this.storyFinished}
                    choice_nodes_to_render={current_story.story_nodes[current_story_node].choice_nodes}
                    onChoiceClickHandler={this.changeStoryNode}
                />
            </View>
        )
    }
});