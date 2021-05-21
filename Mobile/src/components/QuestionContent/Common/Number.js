import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text } from 'react-native';
import styleGuide from '../../../constants/style';

const Number = ({ answersCount }) => (
  <Text style={styles.numberQuestion} allowFontScaling={false}>
    {((answersCount + 1) + '').padStart(2, '0')}
  </Text>
);

Number.propTypes = {
  answersCount: PropTypes.number
};

const styles = StyleSheet.create({
  numberQuestion: {
    ...styleGuide.h1,
    color: '#eee'
  },
});

export default Number;
