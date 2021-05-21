import * as React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { createAppContainer } from 'react-navigation';
import store from './store';
import screens from './screens';
import { setTarget } from './ducks/common';

let Navigation = createAppContainer(screens);

export default class App extends React.Component {
  static propTypes = {
    target: PropTypes.string
  };

  componentDidMount() {
    store.dispatch(setTarget(this.props.target));
  }

  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}
