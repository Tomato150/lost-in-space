import React, {Component} from 'react';
import StoryPhaseWindow from './game-story'
import ManagementPhaseWindow from './game-management'

import StoryManager from "../game/story/story-manager";
import GameStateManager from "../game/story/game-state-manager";

import {ScrollView, View} from 'react-native';
import CustomText from '../utils/custom-text';
import styles from "../utils/styles";


export default class GameCore extends Component {
    constructor(props) {
        super(props);

        this.state = {
            current_phase: "ManagementPhaseWindow",
            current_story: null
        };
        this.story_manager = new StoryManager();
        this.game_state_manager = new GameStateManager();
    }

    updateGameLoop = (tick=1) => {
        this.setState(prev_state => ({
            current_story: this.story_manager.getNewStory()
        }))
    };

    toggleFromStoryWindow = () => {
        this.story_manager.storyFinishedHandler();
        this.toggleCurrentPhase();
    };

    toggleFromManagementWindow = () => {
        this.updateGameLoop();
        this.toggleCurrentPhase();
    };

    toggleCurrentPhase = () => {
        if (this.state.current_phase === "StoryPhaseWindow") {
            this.setState({current_phase: "ManagementPhaseWindow"});
        } else {
            this.setState({current_phase: "StoryPhaseWindow"});
        }
    };

    handleResultEffect = (effect) => {};

    getHeader = () => {
        const {current_phase, current_story} = this.state;
        return (
            <View style={[styles.content, {alignItems: "center"}]}>
                <CustomText>Lost in Space</CustomText>
                <View style={styles.horizontalRule}/>
                <CustomText>{(current_phase === "StoryPhaseWindow") ? "Event Phase - " + current_story.story_name : "Management Phase"}</CustomText>
            </View>
        )
    };
    getGameScreen = () => {
        if (this.state.current_phase === "StoryPhaseWindow"){
            return <StoryPhaseWindow
                handleResultEffect={this.handleResultEffect}
                current_story={this.state.current_story}

                changePhase={this.toggleFromStoryWindow}
            />

        } else if (this.state.current_phase === "ManagementPhaseWindow") {
            return <ManagementPhaseWindow
                changePhase={this.toggleFromManagementWindow}
            />
        }
    };

    componentWillMount() {
        this.setState({
            current_story: this.story_manager.getNewStory()
        })
    }

    render() {
        return [this.getHeader(), this.getGameScreen()];
    }
}