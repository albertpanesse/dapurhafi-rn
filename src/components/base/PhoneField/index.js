import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import CountryPicker from 'react-native-country-picker-modal';
import {TextInput, TouchableOpacity} from 'react-native';
import {View, Icon, Thumbnail} from 'native-base';
import * as Animatable from 'react-native-animatable';

import {TextContent} from '@/components/base';
import appSetup from '@/setup';

import styles, {countryPickerStyle} from './styles';

class PhoneField extends PureComponent {
  state = {
    isFocused: false,
  };

  _onToggleFocusHandler = () =>
    this.setState(prevState => ({
      isFocused: !prevState.isFocused,
    }));

  _onChange = text => {
  };

  render() {
    const {
      label,
      onEraseText,
      input,
      bindValue = false,
      meta,
      placeholder,
      onRemove,
    } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.phoneNumberContainer}>
          <View style={styles.inputContainer}>
            <View
              style={[
                styles.inputBox,
                this.state.isFocused ? styles.inputOnFocus : styles.inputOnBlur,
              ]}>
              <TextInput
                onFocus={this._onToggleFocusHandler}
                onBlur={this._onToggleFocusHandler}
                style={styles.input}
                placeholder={placeholder}
                underlineColorAndroid="transparent"
                placeholderTextColor={appSetup.lightDefault}
                value={bindValue ? input.value : false}
                onChangeText={input.onChange}
                {...this.props}
              />
              {onEraseText && input.value ? (
                <TouchableOpacity
                  style={styles.additionalContainer}
                  onPress={onEraseText}>
                  <Thumbnail
                    circular
                    source={require('../../../assets/icons/icons_green/tick_icon.png')}
                    style={{width: 24, height: 24}}
                  />
                </TouchableOpacity>
              ) : null}
              {onRemove && !input.value ? (
                <TouchableOpacity
                  style={styles.additionalContainer}
                  onPress={onRemove}>
                  <Icon name="md-trash" style={styles.trashIcon} />
                </TouchableOpacity>
              ) : null}
            </View>
          </View>
        </View>
        {meta.touched && meta.error ? (
          <Animatable.View animation="lightSpeedIn">
            <TextContent color="danger" type="subtext">
              {meta.error}
            </TextContent>
          </Animatable.View>
        ) : null}
      </View>
    );
  }
}

PhoneField.propTypes = {
  ISOcode: PropTypes.string,
  callingCode: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string,
  name: PropTypes.string,
  component: PropTypes.func,
  onEraseText: PropTypes.func,
  validate: PropTypes.array,
};

export default PhoneField;
