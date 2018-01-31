// @flow
import React, {Component} from 'react';
import {ScrollView, View} from 'react-native';

import GameCore from './containers/gamecore';
import {app_styles} from "./utils/appstyles";

import {applyMiddleware, createStore, Store, Middleware} from "redux";
import {Provider} from "react-redux";
import {logger} from "redux-logger";

import reducer from './reducers/index';

const middleware: Middleware = applyMiddleware(logger);
const store: Store = createStore(reducer, middleware);

/*
    Note to self. When wanting to dispatch, simply connect or pass down props to a function that calls
    this.props.dispatch(action(payload));

    When wanting to access the store, simply connect and access as such:
    this.props.StateNameFromConnect
*/
type Props = {}

export default class App extends Component<Props> {
    render() {
        return (
            <Provider store={store}>
                <ScrollView style={{backgroundColor: "#000"}}>
                    <View style={app_styles.container}>
                        <GameCore/>
                    </View>
                </ScrollView>
            </Provider>
        );
    }
}