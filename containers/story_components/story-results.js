import React, {Component} from 'react';
import {View, FlatList} from 'react-native';
import CustomText from '../../utils/custom-text';
import styles from "../../utils/styles";

export default class StoryResults extends Component {
    render () {
        const {handleResultEffect, results} = this.props;

        if (!(results)) {
            return null;
        }

        let effects_data = [];

        for (let result of results) {
            const {result_text, result_type, effect} = result;
            handleResultEffect(effect);
            if (result_text) {
                effects_data.push({
                    key: effects_data.length,
                    text: result_text,
                    color: result_type
                });
            }
        }

        if (effects_data.length > 0) {
            return [
                <View key={1000} style={[styles.horizontalRule, styles.hrMarginLarge]}/>,
                <FlatList
                    key={1001}
                    data={effects_data}
                    renderItem={({item}) => {
                        return (<CustomText style={{color: item.color}}>- {item.text}</CustomText>)
                    }}
                />
            ];
        }
    }
}
