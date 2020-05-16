import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {Thumbnail, Text, View} from 'native-base';
import {TouchableOpacity, Image} from 'react-native';

import {TextContent} from '@/components/base';
import {ButtonContainer, ButtonLike, ButtonMark} from '@/components/UI';

import styles from './styles';

const ProductCard = ({Product, onPreview, removeFromFavorites, addToFavorites, like, following, onFollowing, onBookMark, favorite}) => {
  const imageUrl = Product.imagesUrls[0];

  return (
    <View style={styles.container}>
      <TouchableOpacity style={{ borderRadius: 10, overflow: 'hidden' }} onPress={onPreview} activeOpacity={0.7}>
        {following && <ButtonMark icon='md-bookmark' iconContainer={styles.BookMark} onPress={addToFavorites} />}
        <View style={styles.imageContainer}>
          <Thumbnail
            source={{ uri: imageUrl }}
            style={styles.image}
            square
          />
          {Product.hasOwnProperty('discount') &&
            <View style={[styles.discount]}>
              <Text style={styles.discountText}>
                {`-${Product.discount}%`}
              </Text>
            </View>
          }
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
              {Product.title}
            </TextContent>
            {
              Product.locations.map((location, index) => (
                <TextContent style={{ marginBottom: 5 }} type="subtext" key={index} color="darkGray" textStyle={{fontWeight: '300'}}>
                  {convertAddressDataToString(location.address)}
                </TextContent>
              ))
            }
          </View>
          <View style={styles.iconContainer}>
            {following ?
              <ButtonLike icon='heart' iconStyle={{ color: '#ca212e' }} onPress={onFollowing} /> :
              <ButtonContainer
                like={like}
                favorite={favorite}
                withLike
                withBookMark
                withShare
                onAddFavorite={addToFavorites}
                onRemoveFavorite={removeFromFavorites}
                Product={Product}
                onFollowing={onFollowing}
                onBookMark={onBookMark}
                wrapperStyle={styles.buttonsContainer}
              />}
            <Image source={{ uri: Product.businessId.logoUrl }} style={styles.brand} />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

ProductCard.propTypes = {
  Product: PropTypes.object,
  onPreview: PropTypes.func.isRequired,
};

export default ProductCard;
