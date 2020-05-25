import React, {Component} from 'react';
import {TextInput, Text, View, TouchableOpacity} from 'react-native';
import {Icon} from 'native-base';
import * as Animatable from 'react-native-animatable';

import {TextContent} from '@/components/base';
import appSetup from '@/setup';

import styles from './styles';

class Input extends Component {
  state = {
    isFocused: false,
    isDataInvisible: this.props.secure ? true : false,
  };

  _onToggleDataVisibility = () => {
    this.setState(prevState => ({isDataInvisible: !prevState.isDataInvisible}));
  };

  _onToggleFocusHandler = () => {
    const {input, touch} = this.props;

    touch(input.name);

    this.setState(prevState => ({
      isFocused: !prevState.isFocused,
    }));
  };

  _getConditionalStyle = () => {
    const {meta} = this.props;
    const {isFocused} = this.state;

    if (isFocused) {
      return styles.inputOnFocus;
    } else {
      if (meta.touched && meta.error) {
        return styles.inputOnError;
      } else {
        return styles.inputOnBlur;
      }
    }
  };

  render() {
    const {input, meta, label} = this.props;
    return (
      <React.Fragment>
        <View style={styles.inputContainer}>
          <View style={{ height: 26}}>
            <Text style={styles.label}>{label}</Text>
          </View>
          <View
            style={[
              styles.inputBox,
              this._getConditionalStyle(),
            ]}>
            <TextInput
              onFocus={this._onToggleFocusHandler}
              onBlur={this._onToggleFocusHandler}
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholderTextColor={appSetup.lightDefault}
              value={input.value}
              secureTextEntry={this.state.isDataInvisible}
              onChangeText={input.onChange}
              {...this.props}
            />
            {this.props.onEraseText && input.value ? (
              <TouchableOpacity
                style={styles.additionalContainer}
                onPress={this.props.onEraseText}>
                <Icon name="ios-close" style={styles.eraseIcon} />
              </TouchableOpacity>
            ) : this.props.secure ? (
              <TouchableOpacity
                style={styles.additionalContainer}
                onPress={this._onToggleDataVisibility}>
                <Icon
                  name={this.state.isDataInvisible ? 'ios-eye-off' : 'ios-eye'}
                  style={styles.eyeIcon}
                />
              </TouchableOpacity>
            ) : null}
          </View>
        </View>
        {meta.touched && meta.error ? (
          <Animatable.View animation="lightSpeedIn">
            <TextContent type="subtext" color="danger">
              {meta.error}
            </TextContent>
          </Animatable.View>
        ) : null}
      </React.Fragment>
    );
  }
}

export default Input;
