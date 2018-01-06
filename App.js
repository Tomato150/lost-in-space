import React, {Component} from 'react';
import {ScrollView, View, FlatList, Text} from 'react-native';
import CustomText from './components/utils/custom-text'
import styles from './components/styles'

export default class App extends Component {
    render() {
        return (
            <SelectedChoice/>
        );
    }
}

class EventPhase extends Component {
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={[styles.content, {alignItems: "center"}]}>
                        <CustomText>Lost in Space</CustomText>
                        <View style={styles.horizontalRule}/>
                        <CustomText>Event Phase</CustomText>
                    </View>

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
                                }, {
                                    key: "3",
                                    choiceTitle: "Choice III: Organize with the crew",
                                    choiceText: "You start talking with the others, slowly and surely making your way" +
                                    " around to everyone nearby ... ",
                                    eventStyle: "Passive"
                                }, {
                                    key: "4",
                                    choiceTitle: "Choice IV: Organize with the crew",
                                    choiceText: "You start talking with the others, slowly and surely making your way" +
                                    " around to everyone nearby ... ",
                                    eventStyle: "Passive"
                                }, {
                                    key: "5",
                                    choiceTitle: "Choice V: Organize with the crew",
                                    choiceText: "You start talking with the others, slowly and surely making your way" +
                                    " around to everyone nearby ... ",
                                    eventStyle: "Passive"
                                }, {
                                    key: "6",
                                    choiceTitle: "Choice VI: Organize with the crew",
                                    choiceText: "You start talking with the others, slowly and surely making your way" +
                                    " around to everyone nearby ... ",
                                    eventStyle: "Passive"
                                }
                            ]}
                            renderItem={({item}) => {
                                return (
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
                                )
                            }}
                        />
                    </View>
                </View>
            </ScrollView>
        )
    }
}

class SelectedChoice extends Component {
    render() {
        return (
            <ScrollView style={{backgroundColor: "#000"}}>
                <View style={styles.container}>
                    <View style={[styles.content, {alignItems: "center"}]}>
                        <CustomText>Lost in Space</CustomText>
                        <View style={styles.horizontalRule}/>
                        <CustomText>Event Phase - Choice selected</CustomText>
                        <CustomText>Choice I: Organize with the crew</CustomText>
                    </View>

                    <View style={styles.content}>
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
                        />


                    </View>

                    <View style={[styles.content, {alignItems: "center"}]}>
                        <View style={[styles.eventChoice, {width:"20%"}]}>
                            <CustomText center>Continue</CustomText>
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }
}