import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'native-base';
import {TouchableOpacity} from 'react-native';
import {API_HOST} from 'react-native-dotenv';

import {Image, TextContent} from '@/components/base';

import styles from './styles';

const ProductCard = ({data, onProductPressed}) => {
  const imageUrl = `${API_HOST}/${data.ProductPicts[0].Filename}`;

  return (
    <View style={styles.container}>
      <TouchableOpacity style={{ borderRadius: 10, overflow: 'hidden' }} onPress={onProductPressed} activeOpacity={0.7}>
        <Image
          source={imageUrl}
        />
        <View style={styles.cardBody}>
          <View style={styles.titleContainer}>
            <TextContent
              style={{ marginBottom: 5 }}
              type="regular"
              color="darkGray"
              bold
              textStyle={{fontSize: 18}}
            >
              {data.Name}
            </TextContent>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

ProductCard.propTypes = {
  data: PropTypes.object,
};

export default ProductCard;
