// @flow
import React, {Component} from 'react';
import {View} from "react-native";
import {connect} from "react-redux";

import StoryWindow from './storywindow';
import InventoryWindow from './inventorywindow';

import CustomText from '../utils/customtext';
import {app_styles} from '../utils/appstyles'

import {updateMarines} from "../actions/crewactions";
import {getNewStory} from "../actions/storyactions";
import StoryEvent from "../game/stories/storyevent";
import A1E1 from '../game/stories/storyjsons/A1E1.json';
import type {GameCoreState} from "../reducers/gamecorereducer";

type Props = {
    dispatch: Function,
    StoryStatus: {
        current_story: StoryEvent,
        current_story_node: string
    },
    GameCoreStatus: GameCoreState
};


export default connect(store => {
    const {ShipStatus, StoryStatus, GameCoreStatus} = store;
    return {ShipStatus, StoryStatus, GameCoreStatus};
})(class GameCore extends Component<Props> {
    constructor(props: Props) {
        super(props);
        this.props.dispatch(updateMarines(10));
        this.props.dispatch(getNewStory("A1E1"))
    }

    render() {
        const {current_phase} = this.props.GameCoreStatus;
        return (
            <View>
                <View style={{alignItems: "center"}}>
                    <CustomText>Lost in Space</CustomText>
                    <View style={app_styles.horizontalRule}/>
                    <CustomText>{(current_phase === "Story") ? "Event Phase" : "Management Phase"}</CustomText>
                </View>

                {current_phase === 'Story' ?
                    <StoryWindow
                    /> :
                    <InventoryWindow
                    />
                }
            </View>
        )
    }
})
