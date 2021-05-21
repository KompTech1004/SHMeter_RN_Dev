import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { SafeAreaView } from 'react-navigation';
import TopBar from '../components/TopBar';
import styleGuide from '../constants/style';
import ResultNonIssue from '../components/ResultNonIssue';
import ResultIssue from '../components/ResultIssue';
import { answersSelector } from '../ducks/answers';
import { questionsSelector } from '../ducks/questions';
import Toast from '../components/Toast';

export const screenName = 'Result';

class Result extends React.Component {
  static propTypes = {
    navigation: PropTypes.object,
    answers: PropTypes.object,
    data: PropTypes.object,
    sendAnswers: PropTypes.func
  };

  constructor(...args) {
    super(...args);

    const { answers, data } = this.props;
    const { questions, results } = data;

    let value = 0;

    answers.forEach(({ questionId, answerId }) => {
      if (answerId === null || (typeof answerId === 'object' && !answerId.length)) {
        return;
      }
      const question = questions.find(({ id }) => id === questionId);
      const answer = question.answers.find(({ id }) =>
        answerId.length ? (
          answerId.some(element => id === element)
        ) : (
          id === answerId
        ));

      if (answer.value) {
        value += answer.value;
      }
    });

    let status = false;

    results.sort((a, b) => {
      if (a.start_value > b.start_value) {
        return -1;
      }
      if (a.start_value < b.start_value) {
        return 1;
      }

      return 0;
    }).some(variant => {
      const result = value >= variant.start_value;

      if (result) {
        status = variant;
      }

      return result;
    });

    this.state = {
      value,
      status
    };
  }

  render() {
    const { navigation } = this.props;
    const { status } = this.state;

    return (
      <SafeAreaView style={styles.container} forceInset={{ bottom: 'never', top: 'always' }}>
        <View style={styles.content}>
          <TopBar title="RESULTS" />
          {status ? (
            <ResultIssue navigation={navigation} status={status} />
          ) : (
            <ResultNonIssue navigation={navigation} />
          )}
          <Toast />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  ...styleGuide,
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  content: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'relative',
    width: '100%'
  }
});

export default connect(state => ({
  answers: answersSelector(state),
  data: questionsSelector(state)
}))(Result);
