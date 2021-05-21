import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { ButtonCustomFeedback, STYLE_BTN, STYLE_BTN_PRESS } from '../../constants/style';
import styles, { CheckBoxProps, ICON_PROPS } from './style';
import Title from './Common/Title';
import ContentWrapper from './Common/ContentWrapper';
import Icon from 'react-native-vector-icons/MaterialIcons';

class CheckBoxQuestion extends React.Component {
  static propTypes = {
    data: PropTypes.object,
    goToNextQuestion: PropTypes.func,
    isLastQuestions: PropTypes.bool
  };

  constructor(...args) {
    super(...args);

    this.state = {
      answers: this.props.data.answers.reduce((accumulator, { id }) => {
        accumulator[id] = false;

        return accumulator;
      }, {})
    };
  }

  onPress = id => this.setState({
    answers: {
      ...this.state.answers,
      [id]: !this.state.answers[id]
    }
  });

  createResult = () => {
    const { answers } = this.state;
    const list = [];

    for (let id in answers) {
      if (answers[id]) {
        list.push(parseInt(id, 10));
      }
    }

    return list;
  };

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
              checkedIcon={<Icon name="check-circle" {...ICON_PROPS} />}
              uncheckedIcon={<Icon name="radio-button-unchecked" {...ICON_PROPS} />}
              checked={this.state.answers[id]}
              onPress={() => this.onPress(id)}
            />
          ))}
        </View>
        <View style={styles.buttomBox}>
          <ButtonCustomFeedback
            {...STYLE_BTN}
            propsOnPressIn={STYLE_BTN_PRESS}
            disabled={!this.createResult().length}
            title="NEXT"
            onPress={() => goToNextQuestion(this.createResult())}
          />
        </View>
      </ContentWrapper>
    );
  }
}

export default CheckBoxQuestion;
