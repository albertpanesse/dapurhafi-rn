import React from 'react';
import PropTypes from 'prop-types';
import {Header, Left, Button, Icon, Body, Title, Right} from 'native-base';

import appSetup from '@/setup';

import styles from './styles';

const CommonHeader = ({navigation, screenTitle, backRoute}) => {
  return (
    <Header noShadow style={styles.header} androidStatusBarColor={appSetup.darkGreen}>
      <Left style={styles.headerLeft}>
        <Button transparent onPress={() => navigation.navigate(backRoute)}>
          <Icon name="arrow-back" style={styles.backButton} />
        </Button>
      </Left>
      <Body style={styles.headerBody}>
        <Title style={styles.title}>{screenTitle}</Title>
      </Body>
      <Right style={styles.headerRight} />
    </Header>
  );
};

CommonHeader.propTypes = {
  navigation: PropTypes.object.isRequired,
  screenTitle: PropTypes.string.isRequired,
};

export default CommonHeader;
