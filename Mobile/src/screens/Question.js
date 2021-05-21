import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import TopBar from '../components/TopBar';
import { connect } from 'react-redux';
import { SafeAreaView } from 'react-navigation';
import QuestionContent from '../components/QuestionContent';
import SeeResults from '../components/SeeResults';
import { questionsSelector } from '../ducks/questions';
import { moduleName, pushAnswer } from '../ducks/answers';
import { blockedDoubleCall } from '../common';

export const screenName = 'Question';

class Question extends React.Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    data: PropTypes.object,
    pushAnswer: PropTypes.func,
    loading: PropTypes.bool
  };

  constructor(...args) {
    super(...args);

    const { navigation, data } = this.props;
    const branchId = navigation.getParam('branchId');

    if (!branchId) {
      return;
    }

    const question = navigation.getParam('question');
    const branch = data.branches.find(({ id }) => id === branchId);
    const questionId = branch.questions[question];
    const isLastQuestions = branch.questions.length - 1 === question;
    const questionData = data.questions.find(({ id }) => id === questionId);

    this.state = {
      questionId,
      branchId,
      question,
      branch,
      questionData,
      isLastQuestions
    };
  }

  static navigationOptions = ({ navigation: { state: { params: { loading } } } }) => ({
    gesturesEnabled: !loading
  });

  componentDidUpdate() {
    const { navigation, loading } = this.props;
    const { state: { params } } = navigation;

    if (!params || params.loading !== loading) {
      navigation.setParams({ loading });
    }
  }

  blockedButton = blockedDoubleCall();

  goToNextQuestion = answerId => {
    if (this.blockedButton()) return;

    const { navigation, pushAnswer } = this.props;
    const { questionId, questionData: { answers } } = this.state;

    pushAnswer({
      questionId,
      answerId
    });

    const answer = answers.find(({ id }) => id === answerId);

    if (answerId === null || answerId.length || !answer.branch) {
      const { branchId, branch, question } = this.state;

      if (branch.questions[question + 1]) {
        navigation.push(screenName, {
          branchId,
          question: question + 1
        });
      } else {
        navigation.push(screenName, {
          branchId: 0,
          question
        });
      }
    } else {
      navigation.push(screenName, {
        branchId: answer.branch,
        question: 0
      });
    }
  };

  goBack = () => {
    if (!this.props.loading) {
      if (this.blockedButton()) return;

      this.props.navigation.pop();
    }
  };

  render() {
    const { navigation } = this.props;

    if (navigation.getParam('branchId') === 0) {
      return (
        <SafeAreaView style={styles.container} forceInset={{ bottom: 'never', top: 'always' }}>
          <TopBar title="QUESTIONNAIRE" goBack={this.goBack} />
          <SeeResults navigation={navigation} />
        </SafeAreaView>
      );
    }

    const { isLastQuestions, questionData } = this.state;

    return (
      <SafeAreaView style={styles.container} forceInset={{ bottom: 'always', top: 'always' }}>
        <TopBar title="QUESTIONNAIRE" goBack={this.goBack} />
        <QuestionContent
          isLastQuestions={isLastQuestions}
          data={questionData}
          goToNextQuestion={this.goToNextQuestion}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
  }
});

export default connect(state => ({
  data: questionsSelector(state),
  loading: state[moduleName].loading
}), {
  pushAnswer
})(Question);
