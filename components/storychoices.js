// @flow
import React from 'react';
import {View, TouchableOpacity, FlatList, Text} from 'react-native';
import CustomText from '../utils/customtext';
import {app_styles} from '../utils/appstyles';
import type {ChoiceNode} from "../game/stories/storyevent";


type Props = {
    story_choice_nodes: {[string]: ChoiceNode},
    storyFinished: () => void,
    choice_nodes_to_render: false | Array<string>,
    onChoiceClickHandler: (string) => void,
}

export default function StoryChoices(props: Props) {
    const {story_choice_nodes, storyFinished, choice_nodes_to_render, onChoiceClickHandler} = props;

    if (!(choice_nodes_to_render)) {
        return (
            <View style={[app_styles.content, {alignItems: "center"}]}>
                <TouchableOpacity onPress = {() => {storyFinished();}}>
                    <View style={[app_styles.eventChoice, {width: "20%"}]}>
                        <CustomText center>Continue</CustomText>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    let choices_jsx = [<View key={2000} style={[app_styles.horizontalRule, app_styles.hrMarginLarge]}/>],
        choices_data = [];
    for (let node of choice_nodes_to_render) {
        let choice = story_choice_nodes[node];
        let {choice_title, choice_text, choice_color} = choice;
        choices_data.push({key: node, choice_title, choice_text, choice_color})
    }

    choices_jsx.push(
        <FlatList
            key={2001}
            data={choices_data}
            renderItem={({item}) => {
                return (
                    <TouchableOpacity onPress={() => {onChoiceClickHandler(item.key);}}>
                        <View style={[app_styles.eventChoice, {backgroundColor: item.choice_color}]}>
                            <Text style={app_styles.event_choice_text}>{item.choice_title}</Text>
                            <CustomText>
                                {item.choice_text}
                            </CustomText>
                        </View>
                    </TouchableOpacity>
                )
            }}
        />
    );

    return choices_jsx;
}