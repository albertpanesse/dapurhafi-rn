import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import {Text, TouchableOpacity} from 'react-native';
import {Container, View} from 'native-base';

import {CommonHeader, Input, PhoneField, TextContent} from '@/components/base';
import {ButtonTransparent, ContentScroll, CustomRoundedButton} from '@/components/UI';
import withNotification from '@/hoc/withNotification';
import reduxFormClear from '@/utils/helpers/reduxFormClear';
import {passwordValidation, mobileNumberValidation} from '@/utils/helpers/inputDataValidation';
import appSetup from '@/setup';

import styles from './styles';

class SignUp extends Component {
  static navigationOptions = {
    header: <CommonHeader screenTitle="Sign Up" />,
  };

  state = {
    passwordDoesNotMatch: false,
  };

  _onSignUp = async values => {
    if (values.password !== values.repeatPassword) {
      this.setState({passwordDoesNotMatch: true});
    } else {
      this.setState({passwordDoesNotMatch: false});
      this.props.navigation.navigate('Interests');
    }
  };

  changeCallingCode = obj => {
    const submitObj = {ISOcode: obj.cca2, callingCode: obj.callingCode};
    this.props.editPhoneCode(submitObj);
  };

  render() {
    const {handleSubmit, navigation, ISOcode, callingCode} = this.props;
    const {loading} = this.props.request;
    return (
      <Container>
        <ContentScroll style={styles.content}>
          <View style={styles.inputContainer}>
            <Field
              label="Phone number"
              name="mobileNumber"
              component={PhoneField}
              keyboardType="numeric"
              placeholder="Phone"
              autoCorrect={false}
              onEraseText={() =>
                reduxFormClear(
                  'signup',
                  {mobileNumber: ''},
                  this.props.dispatch,
                )
              }
              ISOcode={ISOcode}
              callingCode={'+'+callingCode}
              onChangeCallingCode={this.changeCallingCode}
              validate={mobileNumberValidation}
            />
            <Field
              label="Password"
              name="password"
              placeholder="Password"
              component={Input}
              returnKeyType="done"
              autoCorrect={false}
              secure
              validate={passwordValidation}
            />
            <Field
              label="Confirm password"
              name="repeatPassword"
              placeholder="Confirm password"
              component={Input}
              returnKeyType="next"
              autoCorrect={false}
              secure
            />
            {this.state.passwordDoesNotMatch ? (
              <TextContent type="subtext" color="danger">
                Password doesn't match
              </TextContent>
            ) : null}
          </View>
          <View style={{...styles.centerInOneRow, marginTop: 30}}>
            <Text style={{color: appSetup.default}}>
              By signing up you agree to our{' '}
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('TermsOfUse')}>
              <Text style={{fontWeight: 'bold', color: appSetup.danger}}>
                {' Privacy Policy'}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <CustomRoundedButton
              buttonStyle={{width: '80%'}}
              onPress={handleSubmit(this._onSignUp)}
              theme="danger"
              loading={loading}>
              Next
            </CustomRoundedButton>
          </View>
        </ContentScroll>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  user: sessionSelectors.user(state),
  request: state.request,
  ISOcode: editProfileSelectors.ISOcode(state),
  callingCode: editProfileSelectors.callingCode(state),
});

const mapDispatchToProps = dispatch => ({
  signup: navigation => dispatch(sessionActions.signup(navigation)),
  editPhoneCode: obj => dispatch(editProfileActions.editPhoneCode(obj))
});

export default connect(mapStateToProps, mapDispatchToProps)(withNotification(reduxForm({form: 'signup', destroyOnUnmount: false})(SignUp)));
