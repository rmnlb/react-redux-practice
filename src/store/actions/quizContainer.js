import {CHECK_ANSWER, NEXT_QUESTION} from './types';

export function nextQuestion(index) {
    return {
        type: NEXT_QUESTION,
        payload: index
    }
}

export function checkAnswer(data) {
    return {
        type: CHECK_ANSWER,
        payload: data
    }
}