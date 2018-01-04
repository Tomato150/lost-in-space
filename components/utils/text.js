import React, {Component} from 'react';
import ReactNative from 'react-native';

// TODO make it so that style can be overridden with other stuff but colour still gets added.

export default class Text extends Component {
    render() {
        return (
            <ReactNative.Text {...this.props}>{"     "}{this.props.children}</ReactNative.Text>
        )
    }
}

Text.defaultProps = {
    style: {color: "#FFF"}
};