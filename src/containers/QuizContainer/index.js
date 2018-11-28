import React, {Component} from 'react';
import Content from '../../components/QuizContent';
import Result from '../../components/QuizResult';
import './styles.scss';
import {connect} from 'react-redux';
import {checkAnswer, nextQuestion} from '../../store/actions/quizContainer'

class QuizContainer extends Component {

    mainClass = 'QuizContainer';

    render() {

        let currentQuestion = this.props.quizes.quiz.filter((item) => {
            return item.isActive === true
        });
        let currentIndex = this.props.quizes.quiz.indexOf(currentQuestion[0]);

        return (
            <div className={this.mainClass}>
                {currentIndex !== -1
                    ? (
                        <Content
                            titleClassName={`${this.mainClass}__title`}
                            optionsClassName={`${this.mainClass}__answers`}
                            btnClassName={`${this.mainClass}__Btn`}
                            itemClassName={`${this.mainClass}__item`}
                            data={currentQuestion[0]}
                            index={currentIndex}
                            btnClick={() => this.props.showNextQuestion(currentIndex)}
                            optionClick={this.props.checkChosenResult}
                        />
                    )
                    : (
                        <Result
                            grade={this.props.quizes.grade}
                            maxGrade={this.props.quizes.quiz.length}
                        />
                    )}
            </div>
        )

    }
}

function mapStateToProps(state) {
    return {
        quizes: state.quizes
    }
}

function mapDispatchToProps(dispatch) {
    return {
        showNextQuestion: (index) => dispatch(nextQuestion(index)),
        checkChosenResult: (data) => dispatch(checkAnswer(data)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(QuizContainer);