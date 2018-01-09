import React, {Component} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import CustomText from '../utils/custom-text';
import styles from "../utils/styles";

import A1 from "../game/data/events/A1.json";

export default class EventPhaseWindow extends Component {
    constructor(props) {
        super(props);

        this.state = {
            current_event: null,
            current_event_node: null,
            current_event_choices_history: [],

            timed_events: {},

            event_library: {
                A1
            }
        }
    }

    getNewEvent() {
        // TODO implement events system
        const {event_library} = this.state;
        const event = event_library.A1;

        this.setState({
            current_event: event,
            current_event_node: event.story_nodes.entry,
            current_event_choices: []
        });
    }

    static storyTextParser(string_text) {
        let story_text = [], chunk;
        string_text = string_text.split("\n");

        if (string_text.length !== 1) {
            for (chunk of string_text) {
                let reg_search = /{(.*?)}/,
                    reg_info = reg_search.exec(chunk);

                while (reg_info) {
                    // TODO Test and implement in parseStoryTextStatement
                    chunk.replace(reg_info[0], this.parseStoryTextStatement(reg_info[1]));
                    reg_info = reg_search.exec(chunk);
                }

                story_text.push(<CustomText>{"    "}{chunk}</CustomText>);
            }
        } else {
            story_text.push(<CustomText>{"    "}{string_text}</CustomText>);
        }

        return story_text
    }

    parseStoryTextStatement (statement) {
        return "Dummy holder"
    }

    componentWillMount() {
        this.getNewEvent();
    }

    render() {
        let {story_text} = this.state.current_event_node;
        return (
            <View>
                {EventPhaseWindow.storyTextParser(story_text)}
                {/*<CustomText>
                    {"  "}You wake up on your ship. You see a few stumbling next to you, heaving the contents
                    of their stomachs. The first thing to hit your senses is the stark coldness of the room.
                </CustomText>
                <CustomText>
                    {"  "}You glance around to see many other of your crew are 'asleep', cryogenically frozen
                    next to you. You, as captain, deduct that there must be a ship wide catastrophe to have so
                    many teleported to this one room. You don't find the room to be the bridge, either,
                    indicating the containment shielding failed there as well.
                </CustomText>
                <CustomText>
                    {"  "}It's easy to tell that something bad happened, and you need to take the lead in
                    fixing whatever went down. As an unfortunate side effect of the cryogenic sleep, you've
                    forgotten recent memories, ranging all the way back to what you think is the time you left
                    the waryards, supposedly on this mission. Who knows how long you've been out.
                </CustomText>*/}

                <View style={[styles.horizontalRule, styles.hrMarginLarge]}/>

                {/*<FlatList
                    data={[
                        {
                            key: 0,
                            color: "#00b359", // Green
                            text: "Positive effect goes here for the shits and giggles. \n (+10 Engineering strength)"
                        }, {
                            key: 1,
                            color: "#b30000", // Red
                            text: "Negative effect goes here because screw life. \n (-10 Engineering strength)"
                        }, {
                            key: 2,
                            color: "#0059b3", // Blue
                            text: "An interesting effect that wasn't positive or negative \n (New events may fire)"
                        }
                    ]}
                    renderItem={({item}) => {
                        return (
                            <CustomText color={item.color}>- {item.text}</CustomText>
                        )
                    }}
                />*/}

                <View style={[styles.horizontalRule, styles.hrMarginLarge]}/>

                <FlatList
                    data={[
                        {
                            key: "1",
                            choiceTitle: "Choice I: Organize with the crew",
                            choiceText: "You start talking with the others, slowly and surely making your way" +
                            " around to everyone nearby ... ",
                            eventStyle: "Passive"
                        }, {
                            key: "2",
                            choiceTitle: "Choice II: Scout for other survivors",
                            choiceText: "You move to a ship wide scanner ... ",
                            eventStyle: "Aggressive"
                        }
                    ]}
                    renderItem={({item}) => {
                        return (
                            <TouchableOpacity
                                onPress={() => {/*TODO add in click event for an action.*/
                                }}
                            >
                                <View style={[styles.eventChoice, styles[item.eventStyle]]}>
                                    <Text style={{
                                        textDecorationLine: "underline",
                                        color: "#FFF",
                                        textAlign: "center"
                                    }}>{item.choiceTitle}</Text>
                                    <Text style={{color: "#FFF"}}>
                                        {item.choiceText}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                />

            </View>
    )
    }
    }