import React, {Component} from 'react';
import {connect} from 'react-redux';
import PopUp from '../../components/PopUp';
import ToDoField from '../../containers/ToDoField';
import {
    addNewTask, changeTaskProgressStatus,
    saveEditedTask,
} from '../../store/actions/todos'
import './style.scss'

class ToDoPage extends Component {
    state = {
        isPopupOpen: false,
    };

    showPopup = () => {
        this.setState({
            isPopupOpen: true,
        })
    };

    closePopup = () => {
        this.setState({
            isPopupOpen: false,
        })
    };

    render() {
        return (
            <div className='todo'>
                <button
                    className='todo__newTask-btn'
                    onClick={this.showPopup}
                >Add new task
                </button>
                {
                    this.state.isPopupOpen
                        ? (
                            <PopUp
                                todos={this.props.todos}
                                closePopup={this.closePopup}
                                createNewTask={this.props.addTask}
                                saveEdited={this.props.saveEdited}
                            />
                        )
                        : null
                }
                <ToDoField
                    openPopup={this.showPopup}
                    changeProgressStatus={this.props.changeProgressStatus}
                />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        todos: state.todos
    }
}

function mapActionsToProps(dispatch) {
    return {
        addTask: (data) => dispatch(addNewTask(data)),
        saveEdited: (data) => dispatch(saveEditedTask(data)),
        changeProgressStatus: (data) => dispatch(changeTaskProgressStatus(data))
    }
}

export default connect(
    mapStateToProps,
    mapActionsToProps
)(ToDoPage)
