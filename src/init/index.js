import React, {Fragment} from 'react';
import {Provider} from 'react-redux';

import {StyleProvider, Root} from 'native-base';

import getTheme from '@/native-base/components';
import material from '@/native-base/variables/material';

import MainApp from '@/MainApp';
import store from '@/store';

class Init extends React.Component {

	render() {
  	return (
	    <Root>
	      <Provider store={store}>
          <StyleProvider style={getTheme(material)}>
	          <Fragment>
	            <MainApp />
	          </Fragment>
	        </StyleProvider>
	      </Provider>
	    </Root>
	  );		
	}
};

export default Init;
