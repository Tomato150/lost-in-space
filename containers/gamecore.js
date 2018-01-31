// @flow
import React, {Component} from 'react';
import {View} from "react-native";

import {connect} from "react-redux";

import {updateMarines} from "../actions/crewactions";
import {getNewStory} from "../actions/storyactions";

import StoryWindow from './storywindow';
import InventoryWindow from './inventorywindow';

import CustomText from '../utils/customtext';
import {app_styles} from '../utils/appstyles'

import StoryEvent from "../game/stories/storyevent";
import A1E1 from '../game/stories/storyjsons/A1E1.json';

type Props = {
    dispatch: Function,
    StoryStatus: {
        current_story: StoryEvent,
        current_story_node: string
    }
};
type State = {current_phase: string};


const GameCore = connect(store => {
    const {ShipStatus, StoryStatus} = store;
    return {ShipStatus, StoryStatus};
})(class GameCore extends Component<Props, State> {
    state = {
        current_phase: "Story"
    };

    constructor(props: Props) {
        super(props);
        this.props.dispatch(updateMarines(10));
    }

    changePhase = (new_phase: "Story" | "Inventory"): void => {
        if (new_phase) {
            this.setState({current_phase: new_phase})
        }
        else if (this.state.current_phase === "Story") {
            this.setState({current_phase: "Inventory"})
        } else {
            this.setState({current_phase: "Story"})
        }
    }; // TODO.

    render() {
        const {current_phase} = this.state;
        return (
            <View>
                <View style={{alignItems: "center"}}>
                    <CustomText>Lost in Space</CustomText>
                    <View style={app_styles.horizontalRule}/>
                    <CustomText>{(current_phase === "Story") ? "Event Phase" : "Management Phase"}</CustomText>
                </View>

                {current_phase === 'Story' ?
                    <StoryWindow
                        changePhase={this.changePhase}
                    /> :
                    <InventoryWindow
                    />
                }
            </View>
        )
    }
});

export default GameCore;
