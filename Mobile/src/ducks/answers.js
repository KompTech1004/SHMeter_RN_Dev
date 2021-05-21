import { name as appName } from '../../app';
import { put, takeLatest, select } from 'redux-saga/effects';
import { createSelector } from 'reselect';
import { cancelableLocationSaga, Firebase } from './common';
import { Record, OrderedMap } from 'immutable';

/**
 * Constants
 * */
export const moduleName = 'answers';
const prefix = `${appName}/${moduleName}`;

export const RESET = `${prefix}/RESET`;

export const PUSH = `${prefix}/PUSH`;
export const POP = `${prefix}/POP`;

export const SEND_DATA_REQUEST = `${prefix}/SEND_DATA_REQUEST`;
export const SEND_DATA_START = `${prefix}/SEND_DATA_START`;
export const SEND_DATA_SUCCESS = `${prefix}/SEND_DATA_SUCCESS`;
export const SEND_DATA_ERROR = `${prefix}/SEND_DATA_ERROR`;

/**
 * Reducer
 * */
export const ReducerRecord = Record({
  success: false,
  loading: false,
  error: null,
  answers: new OrderedMap()
});

export default function reducer(state = new ReducerRecord(), action) {
  const { type, payload } = action;
  const { answers } = state;

  switch (type) {
    case RESET:
      return new ReducerRecord();

    case PUSH:
      return state.set('answers', answers.set(answers.size + 1, payload));

    case POP:
      return state.set('answers', answers.delete(answers.size));

    case SEND_DATA_START:
      return state.set('error', null).set('success', false).set('loading', true);

    case SEND_DATA_SUCCESS:
      return state.set('loading', false).set('success', true);

    case SEND_DATA_ERROR:
      return state.set('loading', false).set('success', false).set('error', payload);

    default:
      return state;
  }
}

/**
 * Selectors
 * */
export const answersSelector = state => state[moduleName].answers;
export const answersCountSelector = createSelector(answersSelector, list => list.size);
export const answersArraySelector = createSelector(answersSelector, list => list.toArray().map(([ _, value ]) => value));

/**
 * Action Creators
 * */
export const resetAnswer = () => ({
  type: RESET
});

export const pushAnswer = payload => ({
  type: PUSH,
  payload
});

export const popAnswer = () => ({
  type: POP
});

export const sendAnswers = () => ({
  type: SEND_DATA_REQUEST
});

/**
 * Sagas
 * */
export const checkName = (answers, name) => new Promise(resolve =>
  answers.doc(name).get().then(snapshot =>
    snapshot.data() ? resolve(true) : resolve(false)
  )
);

export const createDocument = function* (answersDB) {
  let now = Date.now();

  while (yield checkName(answersDB, (now += 1) + '')) {}

  return answersDB.doc(now + '');
};

export const sendDataSaga = function* () {
  yield put({
    type: SEND_DATA_START
  });

  const answersDB = Firebase.Firestore.collection('user_answers');
  const document = yield createDocument(answersDB);
  const list = yield select(answersArraySelector);

  yield document.set({
    answers: list
  });

  yield put({
    type: SEND_DATA_SUCCESS
  });

  Firebase.App.auth().signOut();
};

export const saga = function* () {
  yield takeLatest(SEND_DATA_REQUEST, cancelableLocationSaga, sendDataSaga, SEND_DATA_ERROR, false);
};

