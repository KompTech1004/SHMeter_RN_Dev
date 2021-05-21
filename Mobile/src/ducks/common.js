import { call, cancelled, put, race, take, takeLatest, spawn, select, delay } from 'redux-saga/effects';
import NetInfo from '@react-native-community/netinfo';
import { eventChannel } from 'redux-saga';
import { name as appName } from '../../app';
import { Record } from 'immutable/dist/immutable';
import firebase from 'react-native-firebase';
import { TARGET_TESTFLIGHT } from '../consts';

const firebaseConfigDev = require('../config/develop/firebase');
const firebaseConfigTestflight = require('../config/testflight/firebase');

export const Firebase = {};

/**
 * Constants
 * */
const delayReachable = 10000;
const delayNotReachable = 6666;

export const moduleName = 'common';
const prefix = `${appName}/${moduleName}`;

export const LOCATION_CHANGE = `${prefix}/LOCATION_CHANGE`;
export const UPDATE_NETWORK_STATUS = `${prefix}/UPDATE_NETWORK_STATUS`;
export const CANCELABLE_SAGA_ERROR = `${prefix}/CANCELABLE_SAGA_ERROR`;
export const CANCELABLE_LOCATION_DELAY = 0; // create auto ( delayReachable || delayNotReachable )
export const ERROR_TIMEOUT_CANCEL = 'Response timed out';
export const ERROR_CUSTOM_CANCEL = 'Custom cancel. Name: ';
export const SET_TARGET = `${prefix}/SET_TARGET`;

const CANCELABLE_OPTIONS = {
  time: CANCELABLE_LOCATION_DELAY,
  cancel: {},
  locationCancel: true
};

/**
 * Reducer
 * */
export const ReducerRecord = Record({
  network: null,
  target: null
});

export default function reducer(state = new ReducerRecord(), action) {
  const { type, payload } = action;

  switch (type) {
    case UPDATE_NETWORK_STATUS:
      return state.set('network', payload);

    case SET_TARGET:
      return state.set('target', payload.target);

    default:
      return state;
  }
}

/**
 * Selectors
 * */
export const networkSelector = state => state[moduleName].network;

/**
 * Action Creators
 * */
export const locationChange = () => ({
  type: LOCATION_CHANGE
});

export const setTarget = target => ({
  type: SET_TARGET,
  payload: { target }
});

/**
 * Sagas
 * */
export function* networkConnectivitySaga() {
  const channel = yield call(createNetworkChangeChannel);

  try {
    while (true) {
      const connected = yield take(channel);

      yield put({
        type: UPDATE_NETWORK_STATUS,
        payload: connected
      });
    }
  } finally {
    if (yield cancelled()) {
      channel.close();
    }
  }
}

export function createNetworkChangeChannel() {
  return eventChannel(emitter => NetInfo.addEventListener(emitter));
}

/**
 * Generator that cancels the function at a certain interval or to change the route.
 *
 * @param {(Generator|Function|Promise)} saga // return yield call(saga, actions)
 * @param {(Generator|Function|Promise|String)} error // return yield call(error, actions, event)
 * @param {Object} options // optional
 *        default: {
 *          time: Number, // timeout cancels the function
 *          cancel: {
 *            ...
 *            // example - position: take(GET_CURRENT_POSITION_ERROR)
 *            ...
 *          },
 *          locationCancel: true
 *        }
 * @param {Any} actions // call(saga, ACTIONS) and call(error, ACTIONS, event)
 *
 * @returns {Any}
 */
export const cancelableLocationSaga = (() => {
  function* tryCatch(saga, error, actions) {
    try {
      return yield call(saga, actions);
    } catch (event) {
      return yield errorCatch(error, actions, event);
    }
  }
  function* errorCatch(error, actions, event) {
    if (typeof error === 'function') {
      return yield call(error, actions, event);
    } else {
      return yield put({
        type: error || CANCELABLE_SAGA_ERROR,
        payload: event
      });
    }
  }

  return function* cancelable(saga, error, options, actions) {
    const { time, cancel, locationCancel } = { ...CANCELABLE_OPTIONS, ...(!options ? {} : options) };
    const { isConnected } = yield select(networkSelector);
    const timeout = parseInt(time, 10) || (isConnected ? delayReachable : delayNotReachable);
    const raceList = {
      ...cancel,
      timeoutCancel: delay(timeout),
      taskLoad: call(tryCatch, saga, error, actions)
    };

    if (locationCancel) {
      Object.assign(raceList, {
        locationCancel: take(LOCATION_CHANGE)
      });
    }

    const list = yield race(raceList);

    for (let key in list) {
      if (list.hasOwnProperty(key) && list[key]) {
        if (key === 'taskLoad') {
          return list[key];
        } else {
          if (key !== 'locationCancel') {
            if (key === 'timeoutCancel') {
              return yield errorCatch(error, actions, {
                message: ERROR_TIMEOUT_CANCEL,
                timeout
              });
            } else {
              return yield errorCatch(error, actions, {
                message: ERROR_CUSTOM_CANCEL + key
              });
            }
          }

          return null;
        }
      }
    }
  };
})();

export const initFirebaseSaga = function* ({ payload: { target } }) {
  let config = target === TARGET_TESTFLIGHT ? firebaseConfigTestflight : firebaseConfigDev;

  Firebase.App = firebase.initializeApp(config);
  Firebase.Database = firebase.database();
  Firebase.Firestore = firebase.firestore();
};

export const saga = function* () {
  yield spawn(networkConnectivitySaga);
  yield takeLatest(SET_TARGET, initFirebaseSaga);
};
