import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Container, View} from 'native-base';
import {FlatList} from 'react-native';

import {AppHeader, TextContent} from '@/components/base';
import {AndroidStatusBar, ContainerCenter, ProductCard} from '@/components/UI';
import {Actions as productActions} from '@/reducers/product';

import styles from './styles';

class Latest extends Component {

  static navigationOptions = {
    header: () => <AppHeader header screenTitle="Latest" type="empty" />,
  };

  componentDidMount() {
    const {getLatestProducts} = this.props;

    getLatestProducts();
  }

  _renderProduct = ({item}) => {
    return(
      <View style={styles.itemContainer}>
        <ContainerCenter>
          <ProductCard product={item}/>
        </ContainerCenter>
      </View>
    )
  };

  _onPreview = (ProductId, location) => {
    statisticsAddView(ProductId);
    this.props.navigation.navigate('ProductPreview', { backRoute: 'Home' });
    this.props.getProductById(ProductId, location);
  };

  render() {
    const {latestProducts} = this.props;

    return (
      <Container>
        <AndroidStatusBar />
        {latestProducts.length > 0 ? (
          <FlatList
            data={latestProducts}
            renderItem={this._renderProduct}
            keyExtractor={item => item.ID}
            contentContainerStyle={styles.content}
          />
        ) : (
          <TextContent
            type="regular"
            color="dark"
            style={{
              width: '80%',
              marginTop: '30%',
              marginLeft: '10%',
              alignItems: 'center',
            }}
            center>
            There's no products to display
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
