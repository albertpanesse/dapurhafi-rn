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
import * as InputValidation from '@/utils/helpers/inputDataValidation';
import reduxFormClear from '@/utils/helpers/reduxFormClear';
import productDefault from '@/defaults/product';

import styles from './styles';

const weightUnits = [{key: 'kg', label: 'Kilogram'}, {key: 'gr', label: 'Gram'}];

class ProductForm extends Component {
  state = {
    selectedCategory: "",
    selectedWeightUnit: "",
  }

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
    const {categories} = this.props;

    const filteredCategories = categories.filter(item => item.ID === id);
    if (filteredCategories && filteredCategories.length > 0) {
      this.setState({selectedCategory: filteredCategories[0].Name});
    }
  };

  _WeightUnitOnChange = (id) => {
    const filteredWeightUnits = weightUnits.filter(item => item.key === id);
    if (filteredWeightUnits && filteredWeightUnits.length > 0) {
      this.setState({selectedWeightUnit: filteredWeightUnits[0].label});
    }
  };

  _onSubmit = () => {
    const {addProduct} = this.props;

    addProduct();
  };

  render() {
    const {categories, change, touch, dispatch, handleSubmit} = this.props;
    const {selectedCategory, selectedWeightUnit} = this.state;

    const categoryOptions = categories ? categories.map(item => ({key: item.ID, label: item.Name})) : [];

    return (
      <ScrollView>
        <AndroidStatusBar />
        <Content style={styles.content}>
          <View style={styles.inputContainer}>
            <Field
              label="Kategori"
              name="categoryID"
              component={DropDown}
              items={categoryOptions}
              selectedItem={selectedCategory}
              autoCorrect={false}
              change={change}
              onItemSelected={this._categoryOnChange}
              validate={[InputValidation.required]}
            />
            <Field
              label="Nama Produk"
              name="name"
              placeholder="..."
              component={Input}
              touch={touch}
              autoCorrect={false}
              onEraseText={() => reduxFormClear('product', {name: ''}, dispatch)}
              validate={[InputValidation.required]}
            />
            <Field
              label="Deskripsi"
              name="desc"
              placeholder="..."
              component={MultiLineInput}
              autoCorrect={false}
              onEraseText={() => reduxFormClear('product', {desc: ''}, dispatch)}
            />
            <Field
              label="Harga"
              name="price"
              placeholder="Harga ..."
              component={NumberInput}
              autoCorrect={false}
              onEraseText={() => reduxFormClear('product', {price: '0'}, dispatch)}
            />
            <Field
              label="Berat"
              name="weight"
              placeholder="Berat ..."
              component={NumberInput}
              autoCorrect={false}
              onEraseText={() => reduxFormClear('product', {weight: '0'}, dispatch)}
            />
            <Field
              label="Satuan"
              name="weightUnit"
              component={DropDown}
              items={weightUnits}
              selectedItem={selectedWeightUnit}
              change={change}
              onItemSelected={this._WeightUnitOnChange}
              autoCorrect={false}
            />
            <Field
              label="Min. Order"
              name="minOrder"
              placeholder="Min. order ..."
              component={NumberInput}
              autoCorrect={false}
              onEraseText={() => reduxFormClear('product', {minOrder: '1'}, dispatch)}
            />
          </View>
          <View style={styles.buttonContainer}>
            <CustomRoundedButton
              buttonStyle={{width: '80%'}}
              onPress={handleSubmit(this._onSubmit)}
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
  initialValues: state.product.product || productDefault,
  categories: state.category.categories,
});

const mapDispatchToProps = dispatch => ({
  getCategories: () => dispatch(categoryActions.getCategories()),
  addProduct: () => dispatch(productActions.addProduct()),
});

const decoratedProductForm = reduxForm({form: 'product', enableReinitialize: true})(ProductForm);

export default connect(mapStateToProps, mapDispatchToProps)(decoratedProductForm);
