import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, TouchableOpacity, Animated, Easing } from 'react-native';
import styleGuide, { COLOR_BLACK, SMALL_IPHONE } from '../constants/style';
import GestureRecognizer from 'react-native-swipe-gestures';
import { openURL } from '../common';

const LINK = 'https://forms.gle/1b6ACgJacbmr9by59';

class Toast extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    sections: PropTypes.array
  };

  state = {
    close: false,
    animation: new Animated.Value(-150)
  };

  componentDidMount() {
    this.timeoutId = setTimeout(this.closeToast, 10000);
    Animated.timing(
      this.state.animation,
      {
        toValue: 5,
        duration: 500,
        delay: 333,
        easing: Easing.easeInOutBack
      }
    ).start();
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  closeToast = () => this.setState({ close: true });

  onPress = () => {
    openURL(LINK);
    this.closeToast();
  };

  render() {
    if (this.state.close) {
      return null;
    }

    return (
      <Animated.View
        style={{
          ...styles.animated,
          top: this.state.animation
        }}
      >
        <GestureRecognizer onSwipeLeft={this.closeToast} onSwipeRight={this.closeToast}>
          <View style={styles.content}>
            <TouchableOpacity onPress={this.onPress}>
              <Text style={styles.title}>
                Freyja Solutions
              </Text>
              <Text style={styles.name}>
                Please leave your feedback by clicking on the link:
              </Text>
              <Text style={styles.link}>
                {LINK}
              </Text>
            </TouchableOpacity>
          </View>
        </GestureRecognizer>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  ...styleGuide,
  animated: {
    flex: 1,
    paddingLeft: 8,
    paddingRight: 8,
    position: 'absolute',
    top: -200,
    left: 0,
    width: '100%',
    backgroundColor: '#fff'
  },
  content: {
    backgroundColor: 'rgba(0, 172, 193, .26)',
    borderRadius: 4,
    shadowColor: COLOR_BLACK,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.45,
    shadowRadius: 16,
    elevation: 24,
    padding: SMALL_IPHONE ? 9 : 16
  },
  title: {
    fontFamily: 'Montserrat-Regular',
    fontSize: SMALL_IPHONE ? 11 : 12,
    color: COLOR_BLACK,
    paddingBottom: SMALL_IPHONE ? 5 : 6
  },
  name: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: SMALL_IPHONE ? 11 : 12,
    color: COLOR_BLACK,
    paddingBottom: SMALL_IPHONE ? 5 : 6
  },
  link: {
    fontFamily: 'Montserrat-Regular',
    fontSize: SMALL_IPHONE ? 9 : 10,
    color: COLOR_BLACK
  }
});

export default Toast;
