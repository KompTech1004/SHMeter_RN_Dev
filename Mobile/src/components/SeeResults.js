import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import styleGuide, {
  STYLE_BTN,
  COLOR_TURQUOISE,
  SMALL_IPHONE,
  ButtonCustomFeedback,
  STYLE_BTN_PRESS
} from '../constants/style';
import { screenName as screenNameResult } from '../screens/Result';
import { sendAnswers, moduleName } from '../ducks/answers';
import { blockedDoubleCall } from '../common';

class SeeResults extends React.Component {
  static propTypes = {
    navigation: PropTypes.object,
    sendAnswers: PropTypes.func,
    loading: PropTypes.bool,
    success: PropTypes.bool,
    error: PropTypes.object
  };

  componentDidUpdate() {
    if (this.props.success) {
      this.props.navigation.reset([NavigationActions.navigate({ routeName: screenNameResult })], 0);
    }
  }

  blockedButton = blockedDoubleCall();

  goToResult = () => {
    if (this.blockedButton()) return;

    this.props.sendAnswers();
  };

  render() {
    const { error, loading } = this.props;

    return (
      <View style={styles.container}>
        <Icon name="check" size={SMALL_IPHONE ? 110 : 124} color={COLOR_TURQUOISE} />
        <Text style={styles.textMedium}>
          The questionnaire is{'\n'}completed.
        </Text>
        {error ? (
          <Text style={styles.textWarning}>
            Sorry, your answers could not be sent.
            {'\n'}
            Check the internet connection and try again.
          </Text>
        ) : null}
        {loading ? (
          <ButtonCustomFeedback
            {...STYLE_BTN}
            propsOnPressIn={STYLE_BTN_PRESS}
            containerStyle={styles.bottomBtn}
            type="clear"
            loading={true}
          />
        ) : (
          <ButtonCustomFeedback
            {...STYLE_BTN}
            propsOnPressIn={STYLE_BTN_PRESS}
            containerStyle={styles.bottomBtn}
            title="SEE RESULTS"
            onPress={this.goToResult}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ...styleGuide,
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  textMedium: {
    ...styleGuide.textMedium,
    paddingTop: 25,
    paddingBottom: 60,
    textAlign: 'center'
  },
  textWarning: {
    ...styleGuide.textWarning,
    textAlign: 'center'
  }
});

export default connect(state => ({
  loading: state[moduleName].loading,
  success: state[moduleName].success,
  error: state[moduleName].error
}), {
  sendAnswers
})(SeeResults);
