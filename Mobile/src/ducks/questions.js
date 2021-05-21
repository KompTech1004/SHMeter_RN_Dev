import { put, takeLatest, select } from 'redux-saga/effects';
import { name as appName } from '../../app';
import { cancelableLocationSaga, Firebase, moduleName as moduleNameCommon } from './common';
import { Record } from 'immutable';
import { TARGET_TESTFLIGHT } from '../consts';

const authConfigDevelop = require('../config/develop/auth');
const authConfigTestflight = require('../config/testflight/auth');

/**
 * Constants
 * */
export const moduleName = 'questions';
const prefix = `${appName}/${moduleName}`;

export const RESET = `${prefix}/RESET`;

export const LOAD_DATA_REQUEST = `${prefix}/LOAD_DATA_REQUEST`;
export const LOAD_DATA_START = `${prefix}/LOAD_DATA_START`;
export const LOAD_DATA_SUCCESS = `${prefix}/LOAD_DATA_SUCCESS`;
export const LOAD_DATA_ERROR = `${prefix}/LOAD_DATA_ERROR`;

/**
 * Reducer
 * */
export const ReducerRecord = Record({
  data: null,
  loading: false,
  error: null
});

export default function reducer(state = new ReducerRecord(), action) {
  const { type, payload } = action;

  switch (type) {
    case RESET:
      return new ReducerRecord();

    case LOAD_DATA_START:
      return state.set('error', null).set('loading', true);

    case LOAD_DATA_SUCCESS:
      return state.set('loading', false).set('data', payload.data);

    case LOAD_DATA_ERROR:
      return state.set('loading', false).set('error', payload);

    default:
      return state;
  }
}

/**
 * Selectors
 * */
export const questionsSelector = state => state[moduleName].data;

/**
 * Action Creators
 * */
export const loadData = () => ({
  type: LOAD_DATA_REQUEST
});

export const resetQuestions = () => ({
  type: RESET
});

/**
 * Sagas
 * */
export const getData = () => new Promise((resolve, reject) => {
  Firebase.Database.ref('/').once('value', snapshot => {
    const result = snapshot.val();

    if (result) {
      resolve(result);
    } else {
      reject(result);
    }
  });
});

export const loadSaga = function* () {
  yield put({
    type: LOAD_DATA_START
  });

  const target = yield select(state => state[moduleNameCommon].target);
  const { email, password } = target === TARGET_TESTFLIGHT ? authConfigTestflight : authConfigDevelop;

  yield Firebase.App.auth().signInWithEmailAndPassword(email, password);

  const data = yield getData();

  if (data) {
    yield put({
      type: LOAD_DATA_SUCCESS,
      payload: { data }
    });
  } else {
    yield put({
      type: LOAD_DATA_ERROR,
      payload: {
        message: data
      }
    });
  }
};

export const saga = function* () {
  yield takeLatest(LOAD_DATA_REQUEST, cancelableLocationSaga, loadSaga, LOAD_DATA_ERROR, false);
};
