import { combineReducers } from 'redux';
import common, { moduleName as commonModule } from '../ducks/common';
import questions, { moduleName as questionsModule } from '../ducks/questions';
import answers, { moduleName as answersModule } from '../ducks/answers';

const AppReducer = combineReducers({
  [commonModule]: common,
  [questionsModule]: questions,
  [answersModule]: answers,
});

export default AppReducer;
