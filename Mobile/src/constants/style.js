import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import PropTypes from 'prop-types';

const widthSmallIphone = 320;

export const WIDTH = Dimensions.get('window').width;
export const HEIGHT = Dimensions.get('window').height;
export const SMALL_IPHONE = WIDTH <= widthSmallIphone;

export const COLOR_WHITE = 'rgb(255, 255, 255)';
export const COLOR_BLACK = 'rgb(51, 51, 51)';
export const COLOR_GRAY = 'rgb(148, 151, 155)';
export const COLOR_WARM_GRAY = 'rgb(126, 126, 126)';
export const COLOR_TURQUOISE = 'rgb(0, 172, 193)';

export const COLOR_GREEN = 'rgb(0, 152, 62)';
export const COLOR_BLUE = 'rgb(49, 143, 249)';
export const COLOR_ORANGE = 'rgb(255, 171, 10)';
export const COLOR_ORANGE_WARM = 'rgb(255, 171, 10)';
export const COLOR_RED = 'rgb(228, 13, 21)';

export const DEFAULT_PADDING = SMALL_IPHONE ? 30 : 35;
export const WIDTH_WITHOUT_PADDING = WIDTH - DEFAULT_PADDING * 2;

export const MAIN_COLOR_BTN = COLOR_TURQUOISE;
export const MAIN_COLOR_TEXT_BTN = COLOR_TURQUOISE;
export const MAIN_COLOR_ICON = COLOR_TURQUOISE;

export const STYLE_BTN = {
  type: 'outline',
  buttonStyle: {
    borderColor: MAIN_COLOR_BTN,
    borderWidth: 2,
    borderRadius: SMALL_IPHONE ? 7 : 8,
    height: SMALL_IPHONE ? 44 : 48
  },
  titleStyle: {
    fontSize: SMALL_IPHONE ? 14 : 16,
    lineHeight: SMALL_IPHONE ? 16 : 19,
    color: MAIN_COLOR_TEXT_BTN,
    fontFamily: 'Montserrat-Medium'
  },
  iconProps: {
    size: SMALL_IPHONE ? 16 : 19,
    color: MAIN_COLOR_ICON
  }
};

export const STYLE_BTN_PRESS = {
  ...STYLE_BTN,
  buttonStyle: {
    ...STYLE_BTN.buttonStyle,
    backgroundColor: MAIN_COLOR_BTN
  },
  titleStyle: {
    ...STYLE_BTN.titleStyle,
    color: COLOR_WHITE
  },
  iconProps: {
    ...STYLE_BTN.iconProps,
    color: COLOR_WHITE
  }
};

export class ButtonCustomFeedback extends React.Component {
  static propTypes = {
    children: PropTypes.array,
    propsOnPressIn: PropTypes.object
  };

  state = {
    press: false
  };

  onPress = press => this.setState({ press });

  render = () => (
    <Button
      {...this.props}
      {...(this.state.press ? this.props.propsOnPressIn : {})}
      activeOpacity={1}
      onPressIn={() => this.onPress(true)}
      onPressOut={() => this.onPress(false)}
    />
  );
}

export default StyleSheet.create({
  h1: {
    fontSize: SMALL_IPHONE ? 60 : 80,
    lineHeight: SMALL_IPHONE ? 90 : 130,
    fontFamily: 'Montserrat-SemiBold',
    color: COLOR_BLACK,
    letterSpacing: .59
  },
  h3: {
    fontSize: SMALL_IPHONE ? 18.5 : 20,
    lineHeight: SMALL_IPHONE ? 40 : 45,
    color: COLOR_BLACK,
    fontFamily: 'Montserrat-SemiBold'
  },
  h6: {
    fontSize: 10,
    fontFamily: 'Montserrat-Regular'
  },
  textMedium: {
    fontSize: SMALL_IPHONE ? 16 : 19,
    lineHeight: SMALL_IPHONE ? 24 : 32,
    color: COLOR_BLACK,
    fontFamily: 'Montserrat-Medium'
  },
  textMediumSmall: {
    fontSize: SMALL_IPHONE ? 13 : 14,
    lineHeight: SMALL_IPHONE ? 16 : 21,
    color: COLOR_BLACK,
    fontFamily: 'Montserrat-Medium'
  },
  textRegular: {
    fontSize: SMALL_IPHONE ? 13 : 14,
    lineHeight: SMALL_IPHONE ? 16 : 21,
    color: COLOR_WARM_GRAY,
    fontFamily: 'Montserrat-Regular'
  },
  textCheckbox: {
    fontSize: SMALL_IPHONE ? 15 : 16,
    lineHeight: SMALL_IPHONE ? 18 : 21,
    color: COLOR_WARM_GRAY,
    fontFamily: 'Montserrat-Medium'
  },
  textWarning: {
    fontSize: SMALL_IPHONE ? 13 : 14,
    lineHeight: SMALL_IPHONE ? 16 : 21,
    color: COLOR_ORANGE,
    fontFamily: 'Montserrat-Medium'
  },
  textBold: {
    fontSize: SMALL_IPHONE ? 17 : 20,
    lineHeight: SMALL_IPHONE ? 25 : 32,
    color: COLOR_BLACK,
    fontFamily: 'Montserrat-Bold'
  },
  textSmall: {
    fontSize: SMALL_IPHONE ? 12 : 13,
    fontFamily: 'Montserrat-Medium'
  },
  bottomBtn: {
    position: 'absolute',
    bottom: DEFAULT_PADDING,
    width: WIDTH_WITHOUT_PADDING
  },
  textLink: {
    textDecorationLine: 'underline'
  }
});
