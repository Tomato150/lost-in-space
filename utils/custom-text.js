import React, {Component} from 'react';
import ReactNative from 'react-native';

// TODO make it so that style can be overridden with other stuff but colour still gets added.

export default class Text extends Component {
    constructor(props) {
        super(props);

        this.state = {
            color: props.color || "#FFF"
        }
    }

    render() {
        const {style, color} = this.props;
        let newStyle = new Object(style);

        if (!(style.color) || color) {
            newStyle = {
                ...newStyle,
                color: this.state.color
            };
        }
        if (this.props.center) {
            newStyle = {
                ...newStyle,
                textAlign: "center"
            }
        }

        const newProps = {
            ...this.props,
            style: newStyle
        };

        return (
            <ReactNative.Text {...newProps}>{this.props.children}</ReactNative.Text>
        )
    }
}

Text.defaultProps = {
    style: {color: "#FFF"}
};
