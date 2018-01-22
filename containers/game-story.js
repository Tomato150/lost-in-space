import React, {Component} from 'react';

import StoryText from './story_components/story-text';
import StoryResults from './story_components/story-results'
import StoryChoices from './story_components/story-choices';

import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import CustomText from '../utils/custom-text';
import styles from "../utils/styles";

export default class StoryPhaseWindow extends Component {
    constructor(props) {
        super(props);

        const {current_story} = this.props;

        this.state = {
            current_story_node: current_story.story_nodes.entry,
            current_choices_history: [],
        }
    }

    changeStoryNode = (choice_selected) => {
        this.setState((prevState, props) => ({
            current_story_node: props.current_story.story_nodes[choice_selected],
            current_choices_history: [...prevState.current_choices_history, choice_selected]
        }))
    };

    storyFinished = () => {
        // TODO
        console.log("DANK DADS");
        const {changePhase} = this.props;
        const {current_choices_history} = this.state;
        changePhase(current_choices_history);
    };

    render() {
        return (
            <View>
                <StoryText
                    current_story_node_text={this.state.current_story_node["story_text"]}
                />

                <StoryResults
                    handleResultEffect={this.props.handleResultEffect}

                    results={this.state.current_story_node["results"]}
                />

                <StoryChoices
                    onChoiceClickHandler={this.changeStoryNode}
                    storyFinished={this.storyFinished}

                    choice_nodes_to_render={this.state.current_story_node.choice_nodes}
                    story_choice_nodes={this.props.current_story.choice_nodes}
                />
            </View>
        )
    }
}
