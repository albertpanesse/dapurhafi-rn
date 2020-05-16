import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {Thumbnail, Text, View} from 'native-base';
import {TouchableOpacity, Image} from 'react-native';
import {API_HOST} from 'react-native-dotenv';

import {TextContent} from '@/components/base';

import styles from './styles';

const ProductCard = ({data, onPreview}) => {
  const imageUrl = `${API_HOST}/image/${data.ProductPicts[0].Filename}`;
  const logoUrl = `${API_HOST}/image/${data.Retailer.ProfileImage}`;

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
              textStyle={{fontSize: 18}}
            >
              {data.Name}
            </TextContent>
          </View>
          <View style={styles.iconContainer}>
            <Image source={{ uri: logoUrl }} style={styles.brand} />
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