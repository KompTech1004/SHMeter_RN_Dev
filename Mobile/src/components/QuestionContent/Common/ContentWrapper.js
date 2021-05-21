import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import styles from '../style';

const ContentWrapper = ({ isLastQuestions, children }) => (
  <View style={styles.contentWrp}>
    {isLastQuestions ? (
      <View style={styles.content}>
        {children}
      </View>
    ) : (
      <View style={styles.contentPosition}>
        <View style={styles.backgroundContent_1} />
        <View style={styles.content}>
          {children}
        </View>
      </View>
    )}
  </View>
);

ContentWrapper.propTypes = {
  isLastQuestions: PropTypes.bool,
  children: PropTypes.array
};

export default ContentWrapper;
