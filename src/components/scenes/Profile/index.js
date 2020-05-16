import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Container, View} from 'native-base';
import {FlatList} from 'react-native';

import {AppHeader, TextContent} from '@/components/base';
import {AndroidStatusBar, ContainerCenter} from '@/components/UI';

import styles from './styles';

class Profile extends Component {

  static navigationOptions = {
    header: () => <AppHeader header screenTitle="Profil" type="empty" />,
  };

  componentDidMount() {
  }

  render() {
    const {retailers} = this.props;

    return (
      <Container>
        <AndroidStatusBar />
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
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
