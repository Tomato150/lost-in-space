import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from "../utils/styles";

export default class EventPhaseWindow extends Component {
    constructor(props) {
        super(props);

        this.state = {
            current_event: null,

        }
    }

    render() {
        return (
            <View>
                <CustomText>
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
                </CustomText>

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
                                onPress={() => {
                                    clickerEvent()
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