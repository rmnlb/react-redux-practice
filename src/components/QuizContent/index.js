import React from 'react';
import QuizItem from '../QuizItem'

export default (props) => (
    <div>
        <h2 className={props.titleClassName}>
            {props.data.question || ''}
        </h2>

        <ul className={props.optionsClassName}>
            {props.data.options.map((answer, i) => (
                    <QuizItem
                        key={i}
                        answer={answer}
                        className={props.itemClassName}
                        checkResult={() => props.optionClick({
                            index: props.index,
                            userAnswer: i
                        })}
                    />
                )
            )}
        </ul>

        <span
            className={props.btnClassName}
            onClick={props.btnClick}
        >Next</span>
    </div>
)