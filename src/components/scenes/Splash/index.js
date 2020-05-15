import React, {Component} from 'react';
import {connect} from 'react-redux';

import {Container} from 'native-base';
import {Logo} from '@/components/UI';
import {AndroidStatusBar} from '@/components/UI/StatusBars';
import styles from './styles';

class Splash extends Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <Container style={styles.container}>
				<AndroidStatusBar />
        <Logo color="white" />
      </Container>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
