import React, {Component} from 'react';
import {View, TouchableOpacity} from 'react-native';
import CustomText from '../utils/custom-text';
import styles from "../utils/styles";

export default class ManagementPhaseWindow extends Component {
    eventFinished = () => {
        // TODO
        const {changePhase} = this.props;
        changePhase();
    };

    render (){
        return (
            <View style={{alignItems: "center"}}>


                <TouchableOpacity onPress = {() => {this.eventFinished();}}>
                    <View style={[styles.eventChoice, {width: "20%"}]}>
                        <CustomText center>Continue</CustomText>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}