import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Container, View} from 'native-base';
import {FlatList} from 'react-native';

import {AppHeader, TextContent} from '@/components/base';
import {AndroidStatusBar, ContainerCenter, ProductCard} from '@/components/UI';
import {Actions as productActions} from '@/reducers/product';

import styles from './styles';

class Timeline extends Component {

  static navigationOptions = {
    header: () => <AppHeader header screenTitle="Garis Waktu" type="empty" />,
  };

  componentDidMount() {
    const {getLatestProducts} = this.props;

    getLatestProducts();
  }

  _renderProduct = ({item}) => {
    return(
      <View style={styles.itemContainer}>
        <ContainerCenter>
          <ProductCard data={item}/>
        </ContainerCenter>
      </View>
    )
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
            Tidak ada produk terbaru
          </TextContent>
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  latestProducts: state.product.latestProducts,
});

const mapDispatchToProps = dispatch => ({
  getLatestProducts: () => dispatch(productActions.getLatestProducts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Timeline);
