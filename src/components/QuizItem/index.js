import React from 'react';

const QuizItem = (props) => (
    <li
        className={props.className}
    onClick={props.checkResult}
    >{props.answer}</li>
);

export default QuizItem