import React from 'react';
import PropTypes from 'prop-types';
import {withNavigation} from 'react-navigation';
import {Header, Left, Button, Icon, Body, Title, Right} from 'native-base';

import appSetup from '@/setup';

import styles from './styles';

const AppHeader = ({screenTitle}) => {
  return (
    <Header
      noShadow
      style={styles.header}
      androidStatusBarColor={appSetup.darkGreen}>
      <Body style={styles.headerBody}>
        <Title style={styles.title}>{screenTitle}</Title>
      </Body>
    </Header>
  );
};

AppHeader.propTypes = {
  screenTitle: PropTypes.string.isRequired,
};

export default AppHeader;
