import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, Share, Platform} from 'react-native';
import {View} from 'native-base';
import {Icon} from 'react-native-elements';

import appSetup from '@/setup';

import styles from './styles.js';

class ButtonMark extends Component {

    _handleLike = () => {

    }

    render() {
        const { icon, onPress, iconStyle, iconContainer } = this.props
        return (
            <View style={[styles.container, iconContainer]}>
                <TouchableOpacity
                    onPress={onPress}
                    style={styles.shareButton}>
                    <Icon
                        name={'bookmark'}
                        type="entypo"
                        color={appSetup.darkGray}
                        size={appSetup.textSizes.regular}
                        iconStyle={[{marginBottom:-3}, iconStyle]}
                    />
                </TouchableOpacity>
            </View>
        );
    }
}

export default ButtonMark;
