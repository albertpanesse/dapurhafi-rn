import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Container, View} from 'native-base';
import {FlatList} from 'react-native';

import {AppHeader, TextContent} from '@/components/base';
import {AndroidStatusBar, ContainerCenter, RetailerCard} from '@/components/UI';
import {Actions as retailerActions} from '@/reducers/retailer';

import styles from './styles';

class Retailer extends Component {

  static navigationOptions = {
    header: () => <AppHeader header screenTitle="Retailer" type="empty" />,
  };

  componentDidMount() {
    const {getRetailers} = this.props;

    getRetailers();
  }

  _renderProduct = ({item}) => {
    return(
      <View style={styles.itemContainer}>
        <ContainerCenter>
          <RetailerCard data={item}/>
        </ContainerCenter>
      </View>
    )
  };

  render() {
    const {retailers} = this.props;

    return (
      <Container>
        <AndroidStatusBar />
        {retailers.length > 0 ? (
          <FlatList
            data={retailers}
            renderItem={this._renderProduct}
            keyExtractor={item => item.ID}
            contentContainerStyle={styles.content}
          />
        ) : (
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
            Tidak ada data retailer
          </TextContent>
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  user: state.sessionReducer.user,
  retailers: state.retailerReducer.retailers,
});

const mapDispatchToProps = dispatch => ({
  getRetailers: () => dispatch(retailerActions.getRetailers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Retailer);
