import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Container, View} from 'native-base';
import {FlatList} from 'react-native';

import {CommonHeader, TextContent} from '@/components/base';
import {AndroidStatusBar, ContainerCenter, ProductCard} from '@/components/UI';
import {actions as productActions} from '@/reducers/product';

import styles from './styles';

class Latest extends Component {

  static navigationOptions = {
    header: () => <CommonHeader header screenTitle="Latest" type="empty" />,
  };

  componentDidMount() {
    this.props.getLatestProducts();
  }

  _onPreviewPressHandler = (ProductId, location) => {
    statisticsAddView(ProductId);
    this.props.navigation.navigate('ProductPreview', {backRoute: 'Latests'});
    this.props.getProductById(ProductId, location);
  };

  _renderProduct = ({ item }) => {
    const { id } = this.props.user
    let like = false
    if (item.following && item.following.indexOf(id) > -1) {
      like = true
    }
    item.Latest = true
    return(
    <View style={styles.itemContainer}>
      <ContainerCenter>
        <ProductCard
         Product={item}
         onPreview={() => this._onPreview(item.id, item.locations)}
         addToLatests={() => this.props.postLatestProduct(item)}
         removeFromLatests={() => this.props.deleteLatestProduct(item)}
         onReport={() => this._handleReport(item.id)}
         onFollowing={() => this._handleFollowing(item.id)}
         like={like}
        />
      </ContainerCenter>
    </View>
  )};

  _handleFollowing = ProductId => {
    const { user } = this.props
    this.props.followingProduct(user.id, ProductId)
  }

  _onPreview = (ProductId, location) => {
    statisticsAddView(ProductId);
    this.props.navigation.navigate('ProductPreview', { backRoute: 'Home' });
    this.props.getProductById(ProductId, location);
  };

  render() {
    const {latestProducts} = this.props;

    const createProductsContent = () => (
      <FlatList
        data={latestProducts}
        renderItem={this._renderProduct}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.content}
      />
    );

    return (
      <Container>
        <AndroidStatusBar />
        {latestProducts.length > 0 ? (
          createProductsContent()
        ) : (
          <TextContent
            type="regular"
            color="dark"
            style={{
              width: '60%',
              margin: '20%',
              alignItems: 'center',
            }}
            center>
            You haven't selected Latest Products yet
          </TextContent>
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  user: state.sessionReducer.user,
  latestProducts: state.productReducer.latestProducts,
});

const mapDispatchToProps = dispatch => ({
  getLatestProducts: () => dispatch(productActions.getLatestProducts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Latest);
