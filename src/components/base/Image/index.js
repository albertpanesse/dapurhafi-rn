import React, {Component, Fragment} from 'react';
import {Text, View} from 'native-base';
import {Image as ImageNative} from 'react-native';
import {API_HOST} from 'react-native-dotenv';

import styles from './styles';

class Image extends Component {
  render() {
    const {input, source, label, style} = this.props;

    let imageUrl = "";
    if (input) {
      imageUrl = `${API_HOST}/${input.value}`;
    } else if (source) {
      imageUrl = `${source}`;
    }

    console.log('imageUrl', imageUrl);

    return (
      <Fragment>
        {label && label !== "" && (
          <View style={{ height: 26}}>
            <Text style={styles.label}>{label}</Text>
          </View>
        )}
        <View style={styles.imageContainer}>
          <ImageNative
            source={{uri: imageUrl}}
            style={[style, styles.image]}
          />
        </View>
      </Fragment>
    );
  }
}

export default Image;
