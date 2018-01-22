import React, {Component} from 'react';
import {View, TouchableOpacity, FlatList, Text} from 'react-native';
import CustomText from '../../utils/custom-text';
import styles from '../../utils/styles';

export default class StoryChoices extends Component {
    render () {
        const {story_choice_nodes, storyFinished, choice_nodes_to_render, onChoiceClickHandler} = this.props;

        if (!(choice_nodes_to_render)) {
            return (
                <View style={[styles.content, {alignItems: "center"}]}>
                    <TouchableOpacity onPress = {() => {storyFinished();}}>
                        <View style={[styles.eventChoice, {width: "20%"}]}>
                            <CustomText center>Continue</CustomText>
                        </View>
                    </TouchableOpacity>
                </View>
            )
        }

        let choices_jsx = [<View key={2000} style={[styles.horizontalRule, styles.hrMarginLarge]}/>],
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
                            <View style={[styles.eventChoice, {backgroundColor: item.choice_color}]}>
                                <Text style={styles.event_choice_text}>{item.choice_title}</Text>
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
}
