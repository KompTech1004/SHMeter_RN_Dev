import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';
import styleGuide, {
  COLOR_BLACK,
  SMALL_IPHONE
} from '../constants/style';
import Accordion from 'react-native-collapsible/Accordion';
import Icon from 'react-native-vector-icons/Entypo';

class Info extends React.Component {
  static propTypes = {
    title: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ]),
    sections: PropTypes.array.isRequired
  };

  state = {
    activeSections: []
  };

  _renderHeader = ({ id, title }) => (
    <View style={styles.title}>
      <Text style={styles.textMediumSmall}>
        {title}
      </Text>
      <Icon
        style={styles.icon}
        name={this.state.activeSections[0] === id ? 'chevron-thin-up' : 'chevron-thin-down'}
        size={SMALL_IPHONE ? 22 : 24}
        color="rgb(176, 180, 192)"
      />
    </View>
  );

  _renderContent = ({ content }) => (
    <View>
      <Text style={styles.textRegular}>
        {content}
      </Text>
    </View>
  );

  _updateSections = activeSections => this.setState({ activeSections });

  render() {
    const { title, sections } = this.props;

    return (
      <React.Fragment>
        <Text style={styles.textRegularInfo}>
          {title}
        </Text>
        <View style={styles.wrapperAccordion}>
          <Accordion
            sections={sections}
            activeSections={this.state.activeSections}
            renderHeader={this._renderHeader}
            renderContent={this._renderContent}
            onChange={this._updateSections}
            underlayColor="#eee"
            containerStyle={{ width: '100%' }}
          />
        </View>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  ...styleGuide,
  textRegularInfo: {
    ...styleGuide.textRegular,
    color: COLOR_BLACK,
    paddingTop: 15,
    paddingBottom: 5,
    paddingRight: SMALL_IPHONE ? 15 : 16,
    paddingLeft: SMALL_IPHONE ? 15 : 16,
    width: '100%'
  },
  wrapperAccordion: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    margin: 0,
    paddingBottom: SMALL_IPHONE ? 25 : 30,
    paddingTop: SMALL_IPHONE ? 13 : 15
  },
  title: {
    position: 'relative',
    paddingRight: 50,
    paddingTop: SMALL_IPHONE ? 15 : 17,
    paddingBottom: SMALL_IPHONE ? 15 : 17,
    paddingLeft: SMALL_IPHONE ? 15 : 16
  },
  textMediumSmall: {
    ...styleGuide.textMediumSmall,
    textTransform: 'uppercase',
    textAlign: 'left'
  },
  icon: {
    position: 'absolute',
    right: SMALL_IPHONE ? 16 : 21,
    top: SMALL_IPHONE ? 11 : 14
  },
  textRegular: {
    ...styleGuide.textRegular,
    flex: 1,
    flexWrap: 'wrap',
    color: COLOR_BLACK,
    paddingLeft: SMALL_IPHONE ? 15 : 16,
    paddingRight: SMALL_IPHONE ? 15 : 16,
    paddingTop: 8,
    paddingBottom: 5,
  }
});

export default Info;
