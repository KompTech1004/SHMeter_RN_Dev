import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text } from 'react-native';
import styleGuide from '../../../constants/style';

const Title = ({ title }) => (
  <Text style={styles.question}>
    {title}
  </Text>
);

Title.propTypes = {
  title: PropTypes.string
};

const styles = StyleSheet.create({
  question: {
    ...styleGuide.textMedium,
    paddingLeft: 15,
    paddingRight: 15,
    textAlign: 'center'
  }
});

export default Title;
