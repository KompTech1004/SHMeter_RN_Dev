import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, Animated, Easing, Image, ScrollView } from 'react-native';
import styleGuide, {
  WIDTH_WITHOUT_PADDING,
  DEFAULT_PADDING,
  STYLE_BTN,
  SMALL_IPHONE,
  COLOR_GREEN,
  COLOR_BLUE,
  COLOR_ORANGE,
  COLOR_ORANGE_WARM,
  COLOR_RED,
  COLOR_BLACK,
  ButtonCustomFeedback,
  STYLE_BTN_PRESS,
  COLOR_TURQUOISE,
  HEIGHT
} from '../constants/style';
import Arrow from '../resources/arrow.svg';
import meter from '../resources/meter.png';
import { screenName as screenNameSteps } from '../screens/Steps';
import ReTakeTest from '../components/Btn/ReTakeTest';
import ReadMore from 'react-native-read-more-text';
import { blockedDoubleCall } from '../common';

const sizeArrow = WIDTH_WITHOUT_PADDING * (172 / (375 - DEFAULT_PADDING * 2));
const translateY = -sizeArrow * .333333;

class ResultIssue extends React.Component {
  static propTypes = {
    navigation: PropTypes.object,
    status: PropTypes.object,
  };

  state = {
    height: 0,
    rotateAnim: new Animated.Value(0)
  };

  componentDidMount() {
    const { status: { id } } = this.props;

    Animated.timing(
      this.state.rotateAnim,
      {
        toValue: 1,
        duration: 700 + Math.abs(-90 - (36 * id - 108)) * 5,
        delay: 500,
        easing: Easing.easeInOutCubic
      }
    ).start();
  }

  getColorStatus = id => {
    switch (id) {
      case 1 : return COLOR_GREEN;
      case 2 : return COLOR_BLUE;
      case 3 : return COLOR_ORANGE;
      case 4 : return COLOR_ORANGE_WARM;
      case 5 : return COLOR_RED;
      default: return COLOR_BLACK;
    }
  };

  getTextStatus = id => {
    switch (id) {
      case 1 :
        return (
          <Text style={styles.textRegular}>
            This doesn’t appear to be sexual harassment.
            However, we want to empower you to clarify your feelings and set clear boundaries.
            {'\n'}{'\n'}
            The following is a list of possible
            {'\n'}
            <Text style={styles.textRegularLink} onPress={this.onPressSteps}> ACTION STEPS </Text>
            to help you move forward with confidence.
          </Text>
        );

      case 2 :
        return (
          <Text style={styles.textRegular}>
            Your current situation does not appear to have risen to the level of sexual harassment.
            Still, you are clearly feeling uncomfortable and we encourage you to address the
            situation before it escalates. Everyone has the right to feel safe and worthy of respect.
            You may need to set boundaries and speak your truth to co-workers who are making
            you feel uncomfortable.
            {'\n'}{'\n'}
            The following is a list of possible
            {'\n'}
            <Text style={styles.textRegularLink} onPress={this.onPressSteps}> ACTION STEPS </Text>
            to help you
            {'\n'}
            move forward with confidence.
          </Text>
        );

      case 3 :
        return (
          <Text style={styles.textRegular}>
            The result is hovering close.
            This situation is hovering close to the legal definition for Sexual Harassment.
            You should take immediate action to address the situation in a safe and effective manner.
            {'\n'}{'\n'}
            The following are
            <Text style={styles.textRegularLink} onPress={this.onPressSteps}> ACTION STEPS </Text>
            to help you move forward with confidence.
          </Text>
        );

      case 4 :
        return (
          <Text style={styles.textRegular}>
            Your result is sexual harassment.
            Your score indicates a likely sexual harassment situation.
            You should take immediate action to address this situation in a safe and effective manner.
            You must first accept this truth and permit yourself to deal with it.
            {'\n'}{'\n'}
            The following are
            <Text style={styles.textRegularLink} onPress={this.onPressSteps}> ACTION STEPS </Text>
            to help you move forward with confidence.
          </Text>
        );

      case 5 :
        return (
          <Text style={styles.textRegular}>
            A sexual assault has been committed when an individual engages in sexual activity
            without the explicit consent of the other individual involved.
            Sexual activity is any touching of a sexual or other intimate part of a person for the purpose
            of gratifying sexual desire of either party.
            This includes coerced touching of the perpetrator by the victim, as well as the touching of the
            victim by the perpetrator, whether directly or through clothing.
            {'\n'}{'\n'}
            Below are
            <Text style={styles.textRegularLink} onPress={this.onPressSteps}> ACTION STEPS </Text>
            to deal effectively with the situation so that you may move forward with confidence.
          </Text>
        );

      default: return '';
    }
  };

  blockedButton = blockedDoubleCall();

  onPressSteps = () => {
    if (this.blockedButton()) return;

    this.props.navigation.push(screenNameSteps, {
      status: this.props.status
    });
  };

  getNumberOfLines = () => {
    if (this.state.height) {
      return (SMALL_IPHONE ? (this.state.height - 138) / 20.3 : (this.state.height - 150) / 23.87)|0;
    }

    return SMALL_IPHONE ? 6 : (7 + (HEIGHT > 667 ? ((HEIGHT - 667) / 23.87)|0 : 0));
  };

  render() {
    const { rotateAnim } = this.state;
    const { navigation, status: { id, title } } = this.props;
    const rotate = rotateAnim.interpolate({
      inputRange: [0, 1],
      outputRange: ['-90deg', (36 * id - 108) + 'deg']
    });

    return (
      <View style={styles.content}>
        <View style={styles.graphicsWrp}>
          <Image
            resizeMode="contain"
            style={styles.meterBg}
            source={meter}
          />
          <Animated.View
            style={{
              ...styles.animated,
              transform: [
                { rotate: rotate },
                { translateX: 0 },
                { translateY }
              ]
            }}
          >
            <Arrow style={styles.arrow} />
          </Animated.View>
        </View>
        <Text style={{ ...styles.textBold, color: this.getColorStatus(id) }}>
          {title}
        </Text>
        <ScrollView
          style={{ flex: 1, width: '100%' }}
          onLayout={({ nativeEvent: { layout: { height } } }) => this.setState({ height })}
        >
          <View style={styles.scrollView}>
            <View style={styles.textWrp}>
              <ReadMore
                numberOfLines={this.getNumberOfLines()}
                renderTruncatedFooter={this._renderTruncatedFooter}
                renderRevealedFooter={this._renderRevealedFooter}
              >
                {this.getTextStatus(id)}
              </ReadMore>
            </View>
            <ButtonCustomFeedback
              {...STYLE_BTN}
              propsOnPressIn={STYLE_BTN_PRESS}
              containerStyle={{
                ...styles.bottomBtn,
                bottom: SMALL_IPHONE ? 86 : 95
              }}
              title="ACTION STEPS"
              onPress={this.onPressSteps}
            />
            <ReTakeTest
              navigation={navigation}
              btnProps={{
                containerStyle: styles.bottomBtn
              }}
            />
          </View>
        </ScrollView>
      </View>
    );
  }

  _renderTruncatedFooter = handlePress => (
    <Text onPress={handlePress} style={styles.moreText}>
      More
    </Text>
  );

  _renderRevealedFooter = () => null;
}

const heightImg = WIDTH_WITHOUT_PADDING * (152 / 305);

const styles = StyleSheet.create({
  ...styleGuide,
  content: {
    flex: 1,
    paddingTop: WIDTH_WITHOUT_PADDING / 12,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  graphicsWrp: {
    flex: 1,
    alignItems: 'center',
    minHeight: heightImg,
    maxHeight: heightImg
  },
  meterBg: {
    width: WIDTH_WITHOUT_PADDING,
    height: heightImg
  },
  animated: {
    position: 'absolute',
    top: heightImg - sizeArrow / 2,
    width: sizeArrow,
    height: sizeArrow
  },
  arrow: {
    width: sizeArrow,
    height: sizeArrow
  },
  textBold: {
    ...styleGuide.textBold,
    paddingTop: WIDTH_WITHOUT_PADDING / 8,
    paddingBottom: 10
  },
  textWrp: {
    paddingBottom: 20
  },
  textRegular: {
    ...styleGuide.textRegular,
    textAlign: 'center'
  },
  textRegularLink: {
    ...styleGuide.textRegular,
    color: COLOR_ORANGE,
    fontFamily: 'Montserrat-SemiBold'
  },
  scrollView: {
    flex: 1,
    position: 'relative',
    minHeight: '100%',
    alignItems: 'center',
    alignContent: 'stretch',
    paddingTop: 5,
    paddingRight: SMALL_IPHONE ? 23 : 30,
    paddingLeft: SMALL_IPHONE ? 23 : 30,
    paddingBottom: SMALL_IPHONE ? 133 : 145
  },
  moreText: {
    ...styleGuide.textRegular,
    color: COLOR_TURQUOISE
  }
});

export default ResultIssue;
