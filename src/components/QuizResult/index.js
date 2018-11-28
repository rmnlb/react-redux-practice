import React from 'react';
import './style.scss'

export default function (props) {


    return (
        <div className='result'>
            <p className='result__title'>
                Your result:
            </p>
            <p className='result__percentage'>
                {Math.round((props.grade / props.maxGrade) * 100) + ' %'}
            </p>
        </div>
    )
}