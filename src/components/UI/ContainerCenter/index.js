import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'native-base';

import styles from './styles';

 const ContainerCenter = ({children, style}) => {
  return (
    <View style={[styles.container, style]}>
      {children}
    </View>
  );
};

ContainerCenter.propTypes = {
  children: PropTypes.node,
};

export default ContainerCenter;
