import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Container, Content, View} from 'native-base';
import {FlatList, ScrollView} from 'react-native';
import {Field, reduxForm} from 'redux-form';

import {CommonHeader, DropDown, Input, MultiLineInput, NumberInput, TextContent} from '@/components/base';
import {AndroidStatusBar, ContainerCenter, CustomRoundedButton} from '@/components/UI';
import {Actions as categoryActions} from '@/reducers/category';
import {Actions as productActions} from '@/reducers/product';

import styles from './styles';

class ProductForm extends Component {

  static navigationOptions = {
    header: () => (
      <CommonHeader
        header
        screenTitle="Form Produk"
        type="empty" />
    ),
  };

  componentDidMount() {
    const {getCategories} = this.props;

    getCategories();
  }

  _categoryOnChange = (id) => {
    const {productSearch} = this.props;
  };

  render() {
    const {categories} = this.props;

    const categoryOptions = categories ? categories.map(item => ({key: item.ID, label: item.Name})) : [];

    return (
      <ScrollView>
        <AndroidStatusBar />
        <Content style={styles.content}>
          <View style={styles.inputContainer}>
            <Field
              label="Kategori"
              name="categoryID"
              placeholder="Satuan berat ..."
              component={DropDown}
              items={categoryOptions}
              selectedItem=""
              autoCorrect={false}
              onEraseText={() =>
                reduxFormClear(
                  'product',
                  {categoryID: '0'},
                  this.props.dispatch,
                )
              }
              onChangeItem={this._categoryOnChange}
            />
            <Field
              label="Nama Produk"
              name="name"
              placeholder="..."
              component={Input}
              autoCorrect={false}
              onEraseText={() =>
                reduxFormClear(
                  'product',
                  {name: ''},
                  this.props.dispatch,
                )
              }
            />
            <Field
              label="Deskripsi"
              name="desc"
              placeholder="..."
              component={MultiLineInput}
              autoCorrect={false}
              onEraseText={() =>
                reduxFormClear(
                  'product',
                  {desc: ''},
                  this.props.dispatch,
                )
              }
            />
            <Field
              label="Harga"
              name="price"
              placeholder="Harga ..."
              component={NumberInput}
              autoCorrect={false}
              onEraseText={() =>
                reduxFormClear(
                  'product',
                  {price: '0'},
                  this.props.dispatch,
                )
              }
              defaultValue="0"
            />
            <Field
              label="Berat"
              name="weight"
              placeholder="Berat ..."
              component={NumberInput}
              autoCorrect={false}
              onEraseText={() =>
                reduxFormClear(
                  'product',
                  {weight: '0'},
                  this.props.dispatch,
                )
              }
              defaultValue="0"
            />
            <Field
              label="Satuan"
              name="weightUnit"
              placeholder="Satuan berat ..."
              component={DropDown}
              items={[{key: 'kg', label: 'Kilogram'}, {key: 'gr', label: 'Gram'}]}
              selectedItem="Kilogram"
              autoCorrect={false}
              onEraseText={() =>
                reduxFormClear(
                  'product',
                  {weightUnit: 'kg'},
                  this.props.dispatch,
                )
              }
            />
            <Field
              label="Min. Order"
              name="minOrder"
              placeholder="Min. order ..."
              component={NumberInput}
              autoCorrect={false}
              onEraseText={() =>
                reduxFormClear(
                  'product',
                  {minOrder: '1'},
                  this.props.dispatch,
                )
              }
              defaultValue="1"
            />
          </View>
          <View style={styles.buttonContainer}>
            <CustomRoundedButton
              buttonStyle={{width: '80%'}}
              onPress={() => { alert('Test!'); }}
              theme="danger">
              Simpan
            </CustomRoundedButton>
          </View>
        </Content>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categoryReducer.categories,
});

const mapDispatchToProps = dispatch => ({
  getCategories: () => dispatch(categoryActions.getCategories()),
});

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({form: 'product', destroyOnUnmount: false})(ProductForm));
