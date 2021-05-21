import { createStackNavigator } from 'react-navigation';
import Disclaimer, { screenName as screenNameDisclaimer } from './Disclaimer';
import StartPage, { screenName as screenNameStartPage } from './StartPage';
import Information, { screenName as screenNameInformation } from './Information';
import Question, { screenName as screenNameQuestion } from './Question';
import Result, { screenName as screenNameResult } from './Result';
import Steps, { screenName as screenNameSteps } from './Steps';
import Empowerment, { screenName as screenNameEmpowerment } from './Empowerment';
import store from '../store';
import { popAnswer } from '../ducks/answers';

const stackNavigation = createStackNavigator({
  [screenNameDisclaimer]: Disclaimer,
  [screenNameStartPage]: {
    screen: StartPage,
    navigationOptions: {
      gesturesEnabled: false
    }
  },
  [screenNameInformation]: {
    screen: Information,
    navigationOptions: {
      gesturesEnabled: false
    }
  },
  [screenNameQuestion]: Question,
  [screenNameResult]: {
    screen: Result,
    navigationOptions: {
      gesturesEnabled: false
    }
  },
  [screenNameSteps]: Steps,
  [screenNameEmpowerment]: Empowerment
},
{
  initialRouteName: screenNameDisclaimer,
  defaultNavigationOptions: {
    header: null,
    gestureResponseDistance: {
      horizontal: 150
    },
    gesturesEnabled: true
  }
});

const defaultGetStateForAction = stackNavigation.router.getStateForAction;

stackNavigation.router.getStateForAction = (action, state) => {
  if (state && ((action.type === 'Navigation/BACK' && action.immediate) || action.type === 'Navigation/POP')) {
    const { routes } = state;
    const { routeName } = routes[routes.length - 1];

    if (routeName === screenNameStartPage || routeName === screenNameQuestion) {
      store.dispatch(popAnswer());
    }
  }

  return defaultGetStateForAction(action, state);
};

export default stackNavigation;
