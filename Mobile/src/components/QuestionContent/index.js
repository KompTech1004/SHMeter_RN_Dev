import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { answersCountSelector } from '../../ducks/answers';
import ComplexQuestion from './ComplexQuestion';
import SimpleQuestion from './SimpleQuestion';
import RadioQuestion from './RadioQuestion';
import CheckBoxQuestion from './CheckBoxQuestion';

class QuestionContent extends React.Component {
  static propTypes = {
    answersCount: PropTypes.number,
    data: PropTypes.object,
    goToNextQuestion: PropTypes.func,
    isLastQuestions: PropTypes.bool
  };

  shouldComponentUpdate = ({ answersCount }) => answersCount === this.props.answersCount;

  render() {
    const { answersCount, goToNextQuestion, data: { type, title, answers }, isLastQuestions } = this.props;
    const componentProps = {
      goToNextQuestion,
      data: { title, answers },
      isLastQuestions
    };

    switch (type) {
      case 'complex' :
        return <ComplexQuestion {...componentProps} answersCount={answersCount} />;

      case 'radio' :
        return <RadioQuestion {...componentProps} />;

      case 'checkbox' :
        return <CheckBoxQuestion {...componentProps} />;

      default:
        return <SimpleQuestion {...componentProps} answersCount={answersCount} />;
    }
  }
}

export default connect(state => ({
  answersCount: answersCountSelector(state)
}))(QuestionContent);
