import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { STYLE_BTN, SMALL_IPHONE, ButtonCustomFeedback, STYLE_BTN_PRESS } from '../../constants/style';
import styles from './style';
import Title from './Common/Title';
import ContentWrapper from './Common/ContentWrapper';

class ComplexQuestion extends React.Component {
  static propTypes = {
    data: PropTypes.object,
    goToNextQuestion: PropTypes.func,
    isLastQuestions: PropTypes.bool
  };

  render() {
    const { isLastQuestions, goToNextQuestion, data: { title, answers } } = this.props;

    return (
      <ContentWrapper isLastQuestions={isLastQuestions}>
        <View style={{ paddingTop: 10 }}>
          <Title title={title} />
        </View>
        <View style={styles.buttomBox}>
          {answers.map(({ title, id }) => (
            <ButtonCustomFeedback
              key={title}
              {...STYLE_BTN}
              propsOnPressIn={STYLE_BTN_PRESS}
              containerStyle={{ marginTop: SMALL_IPHONE ? 12 : 15 }}
              title={title}
              onPress={() => goToNextQuestion(id)}
            />
          ))}
        </View>
      </ContentWrapper>
    );
  }
}

export default ComplexQuestion;
