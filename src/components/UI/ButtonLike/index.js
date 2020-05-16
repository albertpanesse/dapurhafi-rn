import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, Share, Platform} from 'react-native';
import {View, Icon} from 'native-base';

import styles from './styles.js';

class ButtonLike extends Component {

    _handleLike = () => {

    }

    render() {
        const {icon, onPress, iconStyle, iconContainer} = this.props
        return (
            <View style={[styles.container, iconContainer]}>
                <TouchableOpacity
                    onPress={onPress}
                    style={styles.shareButton}>
                    <Icon name={icon} style={[styles.shareIcon, iconStyle]} />
                </TouchableOpacity>
            </View>
        );
    }
}

export default ButtonLike;
