// @flow
import * as React from 'react';
import ReactNative from 'react-native';

type Props = {
    color?: string,
    style?: {},
    children?: mixed // JSX TEXT
};


export default class Text extends React.Component<Props> {
    static defaultProps = {
        color: "#FFF"
    };

    render() {
        const {style, color, children} = this.props;
        return (
            <ReactNative.Text style={{...style, color}}>{children}</ReactNative.Text>
        )
    }
}

