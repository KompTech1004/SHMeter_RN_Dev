import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Image, Text, View } from 'react-native';
import styleGuide, {
  STYLE_BTN,
  ButtonCustomFeedback,
  STYLE_BTN_PRESS,
  COLOR_BLACK,
  SMALL_IPHONE
} from '../constants/style';
import { SafeAreaView, ScrollView } from 'react-navigation';
import logo from '../resources/logo.png';
import { screenName as screenNameQuestion } from './Question';
import { blockedDoubleCall } from '../common';

export const screenName = 'Information';

class Information extends React.Component {
  static propTypes = {
    navigation: PropTypes.object
  };

  blockedButton = blockedDoubleCall();

  onPressBtn = () => {
    if (this.blockedButton()) return;

    this.props.navigation.push(screenNameQuestion, {
      branchId: 1,
      question: 0
    });
  };

  render() {
    return (
      <SafeAreaView style={styles.container} forceInset={{ bottom: 'always', top: 'always' }}>
        <ScrollView style={{ flex: 1, width: '100%' }}>
          <View style={styles.content}>
            <Image
              resizeMode="contain"
              style={styles.logo}
              source={logo}
            />
            <View style={{ height: SMALL_IPHONE ? 18 : 20 }}/>
            <Text style={styles.textRegular}>
              <Text style={styles.textBold}>
                THE SEXUAL HARASSMENT METER
              </Text>
              &nbsp;can accurately assess the level of any sexual harassment complaint in the workplace. This
              diagnostic tool also provides custom Action Steps and Empowerment Tools to help users proactively deal
              with the severity of any complaint with clarity and confidence.
            </Text>
            <View style={{ height: 20 }}/>
            <Text style={styles.textRegular}>
              This is meant to be a guideline and not a replacement for legal advice. Your score on this meter is
              determined by your perception of events. Based upon your personal level of objectivity, your score may
              not be an accurate indicator of legal sexual harassment. However, The Sexual Harassment Meter can offer
              clarity, whether the ‘outcome’ is&nbsp;
              <Text style={styles.textBold}>
                An Annoyance, Just Creepy, Hovering Close, Sexual Harassment or Sexual Assault.
              </Text>
            </Text>
            <View style={{ height: 20 }}/>
            <Text style={styles.textRegular}>
              After you view the EMPOWERMENT TOOLS, please click on 'LEAVE FEEDBACK' to fill out the survey.
            </Text>
            <View style={{ height: 20 }}/>
            <Text style={styles.textBold}>
              Please proceed to question One...
            </Text>
          </View>
        </ScrollView>
        <ButtonCustomFeedback
          {...STYLE_BTN}
          titleStyle={{ ...STYLE_BTN.titleStyle, letterSpacing: 2 }}
          containerStyle={styles.bottomBtn}
          propsOnPressIn={{
            ...STYLE_BTN_PRESS,
            titleStyle: {
              ...STYLE_BTN_PRESS.titleStyle,
              letterSpacing: 2
            }
          }}
          title="NEXT"
          onPress={this.onPressBtn}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  ...styleGuide,
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    width: '100%',
    height: '100%',
    paddingBottom: SMALL_IPHONE ? 95 : 105,
    backgroundColor: '#fff'
  },
  content: {
    flex: 1,
    padding: 15,
    paddingBottom: 5,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'relative'
  },
  logo: {
    width: 128,
    height: 77,
    margin: 10
  },
  textRegular: {
    ...styleGuide.textRegular,
    color: COLOR_BLACK,
    textAlign: 'left',
    width: '100%'
  },
  textBold: {
    ...styleGuide.textBold,
    fontSize: SMALL_IPHONE ? 13 : 14,
    lineHeight: SMALL_IPHONE ? 16 : 21
  }
});

export default Information;
