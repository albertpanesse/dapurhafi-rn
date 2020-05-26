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
  state = {
    selectedCategory: "",
  };

  componentDidMount() {
    const {getCategories, productSearch} = this.props;

    getCategories();
    productSearch("", -1);
  }

  _categoryOnChange = (id) => {
    const {categories, productSearch} = this.props;

    const filteredCategories = categories.filter(item => item.ID === id);
    if (filteredCategories && filteredCategories.length > 0) {
      this.setState({selectedCategory: filteredCategories[0].Name});
    }

    productSearch("", id);
  };

  _onProductPressed = (productId) => {
    const {getProductById, navigation} = this.props;

    getProductById(productId);

    navigation.push('ProductForm');
  };

  _renderProduct = ({item}) => {
    return(
      <View style={styles.itemContainer}>
        <ContainerCenter>
          <ProductCard data={item} onProductPressed={() => this._onProductPressed(item.ID)}/>
        </ContainerCenter>
      </View>
    )
  };

  _fabOnClick = () => {
    const {unsetProduct, navigation} = this.props;

    unsetProduct();

    navigation.push('ProductForm');
  };

  render() {
    const {navigation, categories, searchResults} = this.props;
    const {selectedCategory} = this.state;

    const categoryOptions = categories ? categories.map(item => ({key: item.ID, label: item.Name})) : [];

    return (
      <Container style={styles.wrapper}>
        <AndroidStatusBar />
        <View style={styles.dropDownWrapper}>
          <DropDown
            items={categoryOptions}
            selectedItem={selectedCategory}
            onItemSelected={this._categoryOnChange}
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
          onClickAction={() => this._fabOnClick()}
          visible={true}
          iconTextComponent={<Icon name="plus" type="font-awesome" />}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.category.categories,
  searchResults: state.product.searchResults,
});

const mapDispatchToProps = dispatch => ({
  getCategories: () => dispatch(categoryActions.getCategories()),
  productSearch: (keyword, categoryId) => dispatch(productActions.search(keyword, categoryId)),
  getProductById: (productId) => dispatch(productActions.getProductById(productId)),
  unsetProduct: (productId) => dispatch(productActions.unsetProduct()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
