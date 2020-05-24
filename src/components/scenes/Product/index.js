import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Container, View} from 'native-base';
import {FlatList} from 'react-native';
import FAB from 'react-native-fab';
import {Icon} from 'react-native-elements';

import {AppHeader, DropDown, TextContent} from '@/components/base';
import {AndroidStatusBar, ContainerCenter, ProductCard} from '@/components/UI';
import {Actions as categoryActions} from '@/reducers/category';
import {Actions as productActions} from '@/reducers/product';
import appSetup from '@/setup';

import styles from './styles';

class Product extends Component {

  static navigationOptions = {
    header: () => <AppHeader header screenTitle="Produk" type="empty" />,
  };

  componentDidMount() {
    const {getCategories, productSearch} = this.props;

    getCategories();

    productSearch("", -1);
  }

  _categoryOnChange = (id) => {
    const {productSearch} = this.props;

    productSearch("", id);
  };

  _onProductPressed = (productId) => {
    const {getProductById, navigation} = this.props;

    navigation.navigate('FormProduk', { backRoute: 'Produk' });
    getProductById(productId);
  };
  _renderProduct = ({item}) => {
    return(
      <View style={styles.itemContainer}>
        <ContainerCenter>
          <ProductCard data={item} onProductPressed={this._onProductPressed(item.ID)}/>
        </ContainerCenter>
      </View>
    )
  };

  render() {
    const {navigation, categories, searchResults} = this.props;

    const categoryOptions = categories ? categories.map(item => ({key: item.ID, label: item.Name})) : [];

    return (
      <Container>
        <AndroidStatusBar />
        <View style={styles.dropDown}>
          <DropDown
            items={categoryOptions}
            selectedItem=""
            onChangeItem={this._categoryOnChange}
          />
        </View>
        {searchResults.length > 0 ? (
          <FlatList
            data={searchResults}
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
            Tidak ada produk
          </TextContent>
        )}
        <FAB
          buttonColor={appSetup.darkGreen}
          onClickAction={() => navigation.navigate('FormProduk')}
          visible={true}
          iconTextComponent={<Icon name="plus" type="font-awesome" />}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categoryReducer.categories,
  searchResults: state.productReducer.searchResults,
});

const mapDispatchToProps = dispatch => ({
  getCategories: () => dispatch(categoryActions.getCategories()),
  productSearch: (keyword, categoryId) => dispatch(productActions.search(keyword, categoryId)),
  getProductById: (productId) => dispatch(productActions.getProductById(productId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
