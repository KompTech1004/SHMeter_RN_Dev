import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { ButtonCustomFeedback, STYLE_BTN, STYLE_BTN_PRESS } from '../../constants/style';
import styles, { ICON_PROPS, CheckBoxProps } from './style';
import Title from './Common/Title';
import ContentWrapper from './Common/ContentWrapper';
import Icon from 'react-native-vector-icons/MaterialIcons';

class RadioQuestion extends React.Component {
  static propTypes = {
    answersCount: PropTypes.number,
    data: PropTypes.object,
    goToNextQuestion: PropTypes.func,
    isLastQuestions: PropTypes.bool
  };

  constructor(...args) {
    super(...args);

    this.state = {
      answer: null
    };
  }

  render() {
    const { isLastQuestions, goToNextQuestion, data: { title, answers } } = this.props;

    return (
      <ContentWrapper isLastQuestions={isLastQuestions}>
        <View style={styles.titleWrp}>
          <Title title={title} />
        </View>
        <View style={styles.checkBoxWrp}>
          {answers.map(({ id, title }) => (
            <CheckBox
              key={id}
              {...CheckBoxProps}
              title={title}
              iconType='material'
              checkedIcon={<Icon name="radio-button-checked" {...ICON_PROPS} />}
              uncheckedIcon={<Icon name="radio-button-unchecked" {...ICON_PROPS} />}
              checked={this.state.answer === id}
              onPress={() => this.setState({ answer: id })}
            />
          ))}
        </View>
        <View style={styles.buttomBox}>
          <ButtonCustomFeedback
            {...STYLE_BTN}
            propsOnPressIn={STYLE_BTN_PRESS}
            disabled={this.state.answer === null}
            title="NEXT"
            onPress={() => goToNextQuestion(this.state.answer)}
          />
        </View>
      </ContentWrapper>
    );
  }
}

export default RadioQuestion;
