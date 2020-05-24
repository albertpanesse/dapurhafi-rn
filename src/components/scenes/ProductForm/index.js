import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Container, View} from 'native-base';
import {FlatList} from 'react-native';
import {Field, reduxForm} from 'redux-form';

import {CommonHeader, Input, TextContent} from '@/components/base';
import {AndroidStatusBar, ContainerCenter, ContentScroll, CustomRoundedButton} from '@/components/UI';

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
  }

  render() {
    const {retailers} = this.props;

    return (
      <Container>
        <AndroidStatusBar />
        <ContentScroll style={styles.content}>
          <View style={styles.inputContainer}>
            <Field
              label="Nama Produk"
              name="name"
              placeholder="Nama produk ..."
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
              placeholder="Deskripsi produk ..."
              component={Input}
              autoCorrect={false}
              onEraseText={() =>
                reduxFormClear(
                  'product',
                  {desc: ''},
                  this.props.dispatch,
                )
              }
            />
          </View>
          <View style={styles.buttonContainer}>
            <CustomRoundedButton
              buttonStyle={{width: '80%'}}
              onPress={() => {}}
              theme="danger">
              Next
            </CustomRoundedButton>
          </View>
        </ContentScroll>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({form: 'product', destroyOnUnmount: false})(ProductForm));
