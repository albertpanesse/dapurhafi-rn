import React, {Component} from 'react';
import {connect} from 'react-redux';

import {Container} from 'native-base';
import {Logo} from '@/components/UI';
import {AndroidStatusBar} from '@/components/UI/StatusBars';
import styles from './styles';

class Splash extends Component {
  componentDidMount() {
    const {navigation} = this.props;

    this.timeout = setTimeout(() => {
      navigation.navigate('App', {screen: 'ProductTab'})
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
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
