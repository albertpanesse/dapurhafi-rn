import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {Thumbnail, Text, View} from 'native-base';
import {TouchableOpacity, Image} from 'react-native';
import {API_HOST} from 'react-native-dotenv';

import {TextContent} from '@/components/base';

import styles from './styles';

const ProductCard = ({product, onPreview}) => {
  const imageUrl = `${API_HOST}/image/${product.ProductPicts[0].Filename}`;

  return (
    <View style={styles.container}>
      <TouchableOpacity style={{ borderRadius: 10, overflow: 'hidden' }} activeOpacity={0.7}>
        <View style={styles.imageContainer}>
          <Thumbnail
            source={{ uri: imageUrl }}
            style={styles.image}
            square
          />
        </View>
        <View style={styles.cardBody}>
          <View style={styles.titleContainer}>
            <TextContent
              style={{ marginBottom: 5 }}
              type="regular"
              color="darkGray"
              bold
              textStyle={{fontSize: 21}}
            >
              {product.Name}
            </TextContent>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

ProductCard.propTypes = {
  Product: PropTypes.object,
  onPreview: PropTypes.func.isRequired,
};

export default ProductCard;
