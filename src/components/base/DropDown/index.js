import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import * as Animatable from 'react-native-animatable';
import {TouchableOpacity} from 'react-native';
import {View, Content, Icon, Text} from 'native-base';

import styles from './styles';

class DropDown extends Component {

  state = {
    showOptions: false,
    initial: "",
  }

  componentDidUpdate() {
    const {onItemSelected, meta} = this.props;
    const {initial} = this.state;

    if (meta && meta.initial && initial === "") {
      onItemSelected(meta.initial);
      this.setState({initial: meta.initial});
    }
  }

  _onToggleOptions = () => {
    this.setState(prevState => ({ showOptions: !prevState.showOptions }));
  }

  _onSelectItem = (id) => {
    const {input, change, onItemSelected} = this.props;
    change(input.name, id);
    onItemSelected(id);
    this.setState({showOptions: false});
  }

  render() {
    const {items, label, selectedItem, style} = this.props;
    const {showOptions} = this.state;

    return (
      <Fragment>
        <View style={{ height: 26}}>
          <Text style={styles.label}>{label}</Text>
        </View>
        <TouchableOpacity onPress={this._onToggleOptions}>
          <View style={styles.button}>
            <View style={styles.buttonContent}>
              <Text style={styles.textContent}>{selectedItem}</Text>
              {
                showOptions ?
                <Icon
                  style={styles.icon}
                  name="ios-arrow-up"
                /> :
                <Icon
                  style={styles.icon}
                  name="ios-arrow-down"
                />
              }
            </View>
          </View>
        </TouchableOpacity>
        {
          showOptions ?
            <View style={styles.animationContainer}>
              <Content contentContainerStyle={styles.dropDownContent}>
                {items.map((item, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => this._onSelectItem(item.key)}
                    style={styles.dropDownItem}
                  >
                    <Text style={styles.textContent}>{item.label}</Text>
                  </TouchableOpacity>
                ))}
              </Content>
            </View> :
            null
        }
      </Fragment>
    );
  }
}

DropDown.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedItem: PropTypes.string.isRequired,
  onChangeItem: PropTypes.func.isRequired,
};

export default DropDown;
