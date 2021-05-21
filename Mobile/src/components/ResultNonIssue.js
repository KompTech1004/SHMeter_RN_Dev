import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, Image } from 'react-native';
import styleGuide from '../constants/style';
import sun from '../resources/sun.png';
import ReTakeTest from './Btn/ReTakeTest';

class ResultNonIssue extends React.Component {
  static propTypes = {
    navigation: PropTypes.object
  };

  render() {
    return (
      <View style={styles.content}>
        <Image
          resizeMode="contain"
          style={styles.sun}
          source={sun}
        />
        <Text style={styles.textMedium}>
          NON-ISSUE
        </Text>
        <ReTakeTest
          navigation={this.props.navigation}
          btnProps={{ containerStyle: styles.bottomBtn }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ...styleGuide,
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  sun: {
    width: 200,
    height: 200
  },
  textMedium: {
    ...styleGuide.textMedium,
    paddingTop: 30,
    paddingBottom: 130,
    fontFamily: 'Montserrat-Bold'
  }
});

export default ResultNonIssue;
