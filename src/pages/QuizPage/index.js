import React, {Component} from 'react';
import './styles.scss'
import QuizContainer from '../../containers/QuizContainer'
class QuizPage extends Component {

    render () {
        return (
            <div className={'QuizPage'}>
                <QuizContainer/>
            </div>
        )

    }
}

export default QuizPage