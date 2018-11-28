import {combineReducers} from 'redux';
import quizContainer from './quizContainer';
import todos from './todos';

export default combineReducers({
    quizes: quizContainer,
    todos: todos
})