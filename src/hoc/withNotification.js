import React, {Component} from 'react';
import {hoistStatics} from 'recompose';
import {connect} from 'react-redux';
import {Modal, View, StyleSheet, ActivityIndicator} from 'react-native';

import {notify} from '@/utils/helpers/notification';
import appSetup from '@/setup';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
});

const notificationWrapper = WrappedComponent => {
  return connect(mapStateToProps, mapDispatchToProps)(class extends Component {

    state = {
      isLoading: false,
    }

    componentDidUpdate(prevProps) {
      if (this.props.notification) {
        notify(this.props.notification);
      }

      if (this.props.loading !== prevProps.loading) {
        this._onToggleLoadingState();
      }
    }

    _onToggleLoadingState = () => {
      this.setState({ isLoading: this.props.loading });
    }

    render() {
      return (
        <View style={styles.container}>
          <WrappedComponent {...this.props} />
          <Modal
            animationType="fade"
            transparent={true}
            visible={this.state.isLoading}
            onRequestClose={() => null}
          >
          </Modal>
        </View>
      );
    }
  });
};

const mapStateToProps = state => ({
  notification: requestSelectors.notification(state),
  loading: requestSelectors.loading(state),
});

const mapDispatchToProps = dispatch => ({
  requestStart: () => dispatch(requestActions.start()),
  requestSuccess: () => dispatch(requestActions.success()),
  requestFail: error => dispatch(requestActions.fail(error)),
});

const withNotification = WrappedComponent => {
  return hoistStatics(notificationWrapper)(WrappedComponent);
};

export default withNotification;
