import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Container, View} from 'native-base';
import {FlatList} from 'react-native';

import {AppHeader, DropDown, TextContent} from '@/components/base';
import {AndroidStatusBar, ContainerCenter} from '@/components/UI';
import {Actions as categoryActions} from '@/reducers/category';
import {Actions as productActions} from '@/reducers/product';

import styles from './styles';

class Category extends Component {

  static navigationOptions = {
    header: () => <AppHeader header screenTitle="Kategori" type="empty" />,
  };

  componentDidMount() {
    const {getCategories} = this.props;

    getCategories();
  }

  _categoryOnChange = (id) => {
    const {searchProduct} = this.props;

    searchProduct("", id);
  };

  render() {
    const {categories} = this.props;

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
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  user: state.sessionReducer.user,
  categories: state.categoryReducer.categories,
});

const mapDispatchToProps = dispatch => ({
  getCategories: () => dispatch(categoryActions.getCategories()),
  searchProduct: (keyword, categoryId) => dispatch(productActions.search(keyword, categoryId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Category);
