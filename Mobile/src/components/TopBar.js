import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { COLOR_BLACK, SMALL_IPHONE } from '../constants/style';

class TopBar extends React.Component {
  static propTypes = {
    goBack: PropTypes.func,
    title: PropTypes.string
  };

  render() {
    const { goBack, title } = this.props;

    return (
      <View style={styles.navigation}>
        {goBack ? (
          <TouchableOpacity style={styles.arrowBackPosition} onPress={goBack}>
            <View style={styles.arrowBack}>
              <Icon name="angle-left" size={SMALL_IPHONE ? 26 : 30} color="rgba(0, 0, 0, .54)" />
            </View>
          </TouchableOpacity>
        ) : null}
        <Text style={styles.headerTitle} allowFontScaling={false}>
          {title}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  navigation: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    maxHeight: 50
  },
  arrowBackPosition: {
    position: 'absolute',
    left: 0
  },
  arrowBack: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50
  },
  headerTitle: {
    fontSize: SMALL_IPHONE ? 20 : 24,
    lineHeight: 50,
    fontFamily: 'Montserrat-SemiBold',
    color: COLOR_BLACK
  }
});

export default TopBar;
