import {CHECK_ANSWER, NEXT_QUESTION} from '../actions/types';
import {initState} from '../initState'


export default function (state = initState, action) {
    switch (action.type) {
        case NEXT_QUESTION: {
            if(action.payload < state.quiz.length-1) {
            state.quiz[action.payload+1].isActive = true;
            }
            state.quiz[action.payload].isActive = false;
            return {...state}
        }
        case CHECK_ANSWER: {
            if(action.payload.index < state.quiz.length-1) {
                state.quiz[action.payload.index+1].isActive = true;
            }

            state.quiz[action.payload.index].isActive = false;
            state.quiz[action.payload.index].userAnswer = action.payload.userAnswer;

            if(action.payload.userAnswer === state.quiz[action.payload.index].correct) {
                state.grade += 1
            }
            return {...state}
        }
        default: {
            return state
        }
    }
}