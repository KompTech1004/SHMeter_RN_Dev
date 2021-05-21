import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';
import styleGuide, { STYLE_BTN, COLOR_GRAY, ButtonCustomFeedback, STYLE_BTN_PRESS } from '../../constants/style';
import GestureRecognizer from 'react-native-swipe-gestures';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import commonStyles from './style';
import Number from './Common/Number';
import Title from './Common/Title';
import ContentWrapper from './Common/ContentWrapper';

class SimpleQuestion extends React.Component {
  static propTypes = {
    answersCount: PropTypes.number,
    data: PropTypes.object,
    goToNextQuestion: PropTypes.func,
    isLastQuestions: PropTypes.bool
  };

  render() {
    const { isLastQuestions, answersCount, goToNextQuestion, data: { title, answers } } = this.props;

    return (
      <GestureRecognizer
        onSwipeUp={() => goToNextQuestion(null)}
        style={{ width: '100%', flex: 1 }}
      >
        <ContentWrapper isLastQuestions={isLastQuestions}>
          <Number answersCount={answersCount} />
          <Title title={title} />
          <View style={styles.buttomBox}>
            <View style={styles.buttonWrp}>
              <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                {answers.map(({ title, id }) => (
                  <ButtonCustomFeedback
                    key={title}
                    {...STYLE_BTN}
                    containerStyle={{ flex: 1, maxWidth: '46%' }}
                    icon={
                      <Icon
                        style={styles.iconInBtn}
                        name={id === 0 ? 'close' : 'check'}
                        {...STYLE_BTN.iconProps}
                      />
                    }
                    propsOnPressIn={{
                      ...STYLE_BTN_PRESS,
                      icon: (
                        <Icon
                          style={styles.iconInBtn}
                          name={id === 0 ? 'close' : 'check'}
                          {...STYLE_BTN_PRESS.iconProps}
                        />
                      )
                    }}
                    iconLeft
                    title={title}
                    onPress={() => goToNextQuestion(id)}
                  />
                ))}
              </View>
            </View>
            <Text style={styles.textSwipe}>
              N/A, just swipe up to advance
            </Text>
          </View>
        </ContentWrapper>
      </GestureRecognizer>
    );
  }
}

const styles = StyleSheet.create({
  ...commonStyles,
  buttonWrp: {
    paddingBottom: 20
  },
  iconInBtn: {
    top: 1,
    paddingRight: 9
  },
  textSwipe: {
    ...styleGuide.textSmall,
    color: COLOR_GRAY,
    textAlign: 'center'
  }
});

export default SimpleQuestion;
