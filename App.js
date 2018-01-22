import React, {Component} from 'react';
import {ScrollView, View} from 'react-native';

import GameCore from "./containers/game-core";

import styles from './utils/styles'


export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ScrollView style={{backgroundColor: "#000"}}>
                <View style={styles.container}>
                    <GameCore/>
                </View>
            </ScrollView>);
    }
}