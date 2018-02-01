// @flow
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, FlatList}  from 'react-native';
import CustomText from '../utils/customtext';
import {app_styles} from "../utils/appstyles";
import type {ResultObject} from "../game/stories/storyevent";


type Props = {
    dispatch: Function,
    results: false | Array<ResultObject>
}

export default function StoryResults(props: Props) {
    const {dispatch, results} = props;

    if (!(results)) return null ;

    let results_data = [];

    for (let result of results) {
        const {result_text, result_type, effect} = result;
        let effects_data = effect.split(' ');
        dispatch();
        if (result_text) {
            results_data.push({
                key: results_data.length,
                text: result_text,
                color: result_type
            });
        }
    }

    if (results_data.length > 0) {
        return [
            <View key={1000} style={[app_styles.horizontalRule, app_styles.hrMarginLarge]}/>,
            <FlatList
                key={1001}
                data={results_data}
                renderItem={({item}) => {
                    return (<CustomText style={{color: item.color}}>- {item.text}</CustomText>)
                }}
            />
        ];
    }
}