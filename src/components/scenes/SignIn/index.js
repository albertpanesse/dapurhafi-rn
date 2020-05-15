import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';

import {Container, View} from 'native-base';
import {Input, PhoneField, TextContent} from '@/components/base';
import {ButtonRounded, ButtonTransparent, ContentScroll, Logo} from '@/components/UI';

import appSetup from '@/setup';
import sessionActions from '@/store/reducers/session/actions';

import {emailValidation, passwordValidation} from '@/utils/helpers/inputDataValidation';
import reduxFormClear from '@/utils/helpers/reduxFormClear';

import styles from './styles';

class SignIn extends Component {
  static navigationOptions = {
    headerShown: false,
  };

  async componentDidMount() {
    await requestLocationPermission();
    if (!this.props.userLocation.addressWithoutZIP) {
      await this.props.getUserLocation();
    }
    this.props.getAllCategories();
  }

  componentDidUpdate(prevProps) {
    if (this.props.user && !prevProps.user) {
      if (this.props.user.isVerified) {
        this.props.navigation.navigate('App');
      }
    }
  }

  _changeCallingCode = obj => {
    const submitObj = {ISOcode: obj.cca2, callingCode: obj.callingCode};
    this.props.editPhoneCode(submitObj);
  };

  _onSubmit = () => {
    const {signIn} = this.props;

    signIn();
  };

  render() {
    const {handleSubmit, ISOcode, callingCode, navigation} = this.props;

    return (
      <Container>
        <ContentScroll style={styles.content}>
          <View style={styles.logoContainer}>
            <Logo color="red" />
          </View>
          <Field
            label="Email"
            name="email"
            placeholder="Email"
            autoCorrect={false}
            component={Input}
            autoCapitalize="none"
            returnKeyType="done"
            onEraseText={() =>
              reduxFormClear('signin', {email: ''}, this.props.dispatch)
            }
          />
          <Field
            label="Password"
            name="password"
            placeholder="Password"
            component={Input}
            autoCorrect={false}
            secure
            returnKeyType="next"
            onSubmitEditing={handleSubmit(this._onSubmit)}
            validate={passwordValidation}
          />
          <ButtonTransparent
            position="right"
            textStyle={{
              fontSize: appSetup.textSizes.medium,
              color: appSetup.default,
            }}
            buttonStyle={{
              borderBottomWidth: 0,
            }}
            onPress={() => navigation.navigate('ForgotPassword')}>
            Forgot password?
          </ButtonTransparent>
          <View style={styles.buttonContainer}>
            <ButtonRounded
              onPress={handleSubmit(this._onSubmit)}
              theme="darkGreen">
              Sign In
            </ButtonRounded>
          </View>
          <TextContent
            type="subtext"
            color="default"
            style={styles.bottomTextContainer}>
            Not a member yet?
          </TextContent>
          <ButtonTransparent
            textStyle={{
              fontSize: appSetup.textSizes.medium,
            }}
            position="center"
            onPress={() => navigation.navigate('SignUp')}
            danger>
            Create account
          </ButtonTransparent>
          <View style={styles.bottomSpace} />
        </ContentScroll>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  user: state.sessionReducer.user,
  userLocation: state.locationReducer.userLocation,
});

const mapDispatchToProps = dispatch => ({
  getUserLocation: () => dispatch(locationActions.getUserLocation()),
  signIn: () => dispatch(sessionActions.signIn()),
});

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({form: 'signin'})(SignIn));
