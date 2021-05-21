import React from 'react';
import PropTypes from 'prop-types';
import { STYLE_BTN, ButtonCustomFeedback, STYLE_BTN_PRESS } from '../../constants/style';
import { connect } from 'react-redux';
import { resetAnswer } from '../../ducks/answers';
import { resetQuestions } from '../../ducks/questions';
import { screenName as screenNameStartPage } from '../../screens/StartPage';
import { NavigationActions } from 'react-navigation';
import { blockedDoubleCall } from '../../common';

class ReTakeTest extends React.Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    resetQuestions: PropTypes.func.isRequired,
    resetAnswer: PropTypes.func.isRequired,
    btnProps: PropTypes.object
  };

  blockedButton = blockedDoubleCall();

  onPressReTake = () => {
    if (this.blockedButton()) return;

    const { navigation, resetQuestions, resetAnswer } = this.props;

    resetAnswer();
    resetQuestions();
    navigation.reset([NavigationActions.navigate({ routeName: screenNameStartPage })], 0);
  };

  render() {
    const { btnProps } = this.props;

    return (
      <ButtonCustomFeedback
        {...STYLE_BTN}
        propsOnPressIn={STYLE_BTN_PRESS}
        title="RE-TAKE TEST"
        onPress={this.onPressReTake}
        {...btnProps}
      />
    );
  }
}

export default connect(null, {
  resetQuestions,
  resetAnswer
})(ReTakeTest);
