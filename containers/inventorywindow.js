// @flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View} from "react-native";

import CustomText from '../utils/customtext';


const InventoryWindow = connect(

)(class InventoryWIndow extends Component {
    render() {
        return (
            <View>
                <CustomText>Hey there</CustomText>
            </View>
        )
    }
});

export default InventoryWindow