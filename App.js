import React, {Component} from 'react';
import {View, FlatList, Button, Text} from 'react-native';
import CustomText from './components/utils/text'
import styles from './components/styles'

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <CustomText>Lost in Space</CustomText>
                    <View style={styles.horizontalRule}/>
                    <CustomText>Event Phase</CustomText>
                </View>

                <View style={styles.content}>
                    <CustomText>
                        You wake up on your ship. You see a few stumbling next to you, heaving the contents of their
                        stomachs. The first thing to hit your senses is the stark coldness of the room.
                    </CustomText>
                    <CustomText>You glance around to see many other of your crew are 'asleep', acryogenically frozen next to
                        you. You, as captain, deduct that there must be a ship wide catastrophe to have so many
                        teleported to this one room. You don't find the room to be the bridge, either, indicating the
                        containment shielding failed there as well.</CustomText>
                    <CustomText>It's easy to tell that something bad happened, and you need to take the lead in fixing
                        whatever went down. As an unfortunate side effect of the cryogenic sleep, you've forgotten
                        recent memories, ranging all the way back to what you think is the time you left the waryards,
                        supposedly on this mission. Who knows how long you've been out.</CustomText>
                </View>

                <View style={[styles.horizontalRule, styles.hrMarginLarge]}/>

                <View style={styles.content}>
                    <FlatList
                        data={[{
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
                        }]}
                        renderItem={({item}) => {
                            return (
                            <View style={[styles.eventChoice, styles[item.eventStyle]]}>
                                <CustomText>
                                    <Text style={{textDecorationLine: "underline"}}>{item.choiceTitle}</Text>
                                    {"\n     -"} {item.choiceText}
                                </CustomText>
                            </View>)
                        }
                        }
                    />
                </View>
            </View>
        );
    }
}
