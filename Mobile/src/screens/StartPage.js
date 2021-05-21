import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Image, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { moduleName, loadData, questionsSelector } from '../ducks/questions';
import styleGuide, {
  WIDTH_WITHOUT_PADDING,
  DEFAULT_PADDING,
  STYLE_BTN,
  ButtonCustomFeedback,
  STYLE_BTN_PRESS
} from '../constants/style';
import { SafeAreaView } from 'react-navigation';
import logo from '../resources/logo.png';
import { screenName as screenNameInformation } from './Information';
import { blockedDoubleCall } from '../common';

export const screenName = 'StartPage';

class StartPage extends React.Component {
  static propTypes = {
    navigation: PropTypes.object,
    loadData: PropTypes.func,
    loading: PropTypes.bool,
    data: PropTypes.object,
    error: PropTypes.object,
  };

  componentDidUpdate() {
    const { loading, error, data, navigation } = this.props;

    if (!loading && !error && data) {
      navigation.push(screenNameInformation);
    }
  }

  blockedButton = blockedDoubleCall();

  onPressBtn = () => {
    if (this.blockedButton()) return;

    this.props.loadData();
  };

  render() {
    const { loading, error } = this.props;

    return (
      <SafeAreaView style={styles.container} forceInset={{ bottom: 'always', top: 'always' }}>
        <Image
          resizeMode="contain"
          style={{ width: WIDTH_WITHOUT_PADDING, bottom: DEFAULT_PADDING }}
          source={logo}
        />
        {error ? (
          <Text style={styles.textWarning}>
            Sorry, could not get the questions.
            {'\n'}
            Check the internet connection and try again.
          </Text>
        ) : null}
        {loading ? (
          <Button
            containerStyle={styles.bottomBtn}
            type="clear"
            loading={true}
          />
        ) : (
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
            title="START"
            onPress={this.onPressBtn}
          />
        )}
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
    backgroundColor: '#fff'
  },
  textWarning: {
    ...styleGuide.textWarning,
    position: 'absolute',
    bottom: 100,
    textAlign: 'center'
  }
});

export default connect(state => ({
  loading: state[moduleName].loading,
  data: questionsSelector(state),
  error: state[moduleName].error
}), {
  loadData
})(StartPage);
