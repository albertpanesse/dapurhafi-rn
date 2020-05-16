import React, {Component} from 'react';
import {connect} from 'react-redux';

import {Container} from 'native-base';
import {Logo} from '@/components/UI';
import {AndroidStatusBar} from '@/components/UI/StatusBars';
import styles from './styles';

class Splash extends Component {
  static navigationOptions = {
    headerShown: false,
  };

  componentDidMount() {
    this.timeout = setTimeout(() => {
      this.props.navigation.navigate('Latest');
    }, 2000);
  }

  render() {
    return (
      <Container style={styles.container}>
				<AndroidStatusBar />
        <Logo color="white" />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.commonReducer.isAuthenticated
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
