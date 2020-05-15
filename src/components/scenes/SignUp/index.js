import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import {Text, TouchableOpacity} from 'react-native';
import {Container, View} from 'native-base';

import {CommonHeader, Input, PhoneField, TextContent} from '@/components/base';
import {ButtonTransparent, ContentScroll, CustomRoundedButton} from '@/components/UI';
import withNotification from '@/hoc/withNotification';
import reduxFormClear from '@/utils/helpers/reduxFormClear';
import {emailValidation, fullNameValidation, mobileNumberValidation, passwordValidation} from '@/utils/helpers/inputDataValidation';
import {actions as sessionActions} from '@/reducers/session';
import {actions as profileActions} from '@/reducers/profile';
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
    const {loading} = this.props;

    return (
      <Container>
        <ContentScroll style={styles.content}>
          <View style={styles.inputContainer}>
            <Field
              label="Full name"
              name="fullName"
              placeholder="Full name"
              component={Input}
              returnKeyType="done"
              autoCorrect={false}
              validate={fullNameValidation}
            />
            <Field
              label="Email"
              name="email"
              placeholder="Email"
              component={Input}
              returnKeyType="done"
              autoCorrect={false}
              validate={emailValidation}
            />
            <Field
              label="Phone number"
              name="mobileNumber"
              component={PhoneField}
              keyboardType="numeric"
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
              <Text style={{fontWeight: 'bold', color: appSetup.darkGreen}}>
                {' Privacy Policy'}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <CustomRoundedButton
              buttonStyle={{width: '80%'}}
              onPress={handleSubmit(this._onSignUp)}
              theme="darkGreen"
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
  user: state.sessionReducer.user,
  loading: state.commonReducer.loading,
  ISOcode: state.profileReducer.ISOcode,
  callingCode: state.profileReducer.callingCode,
});

const mapDispatchToProps = dispatch => ({
  signUp: navigation => dispatch(sessionActions.signUp(navigation)),
  editPhoneCode: obj => dispatch(profileActions.editPhoneCode(obj))
});

export default connect(mapStateToProps, mapDispatchToProps)(withNotification(reduxForm({form: 'signup', destroyOnUnmount: false})(SignUp)));
