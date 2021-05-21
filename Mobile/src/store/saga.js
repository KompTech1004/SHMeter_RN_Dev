import { spawn } from 'redux-saga/effects';
import { saga as common } from '../ducks/common';
import { saga as questions } from '../ducks/questions';
import { saga as answers } from '../ducks/answers';

export default function * () {
  yield spawn(common);
  yield spawn(questions);
  yield spawn(answers);
}
