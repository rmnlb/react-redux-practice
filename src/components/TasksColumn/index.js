import React, {Component} from 'react';
import TaskElement from '../TaskElement';
import {connect} from 'react-redux'
import {deleteTask, toggleEditStatus} from "../../store/actions/todos";


class TasksColumn extends Component {

    render() {
        return (
            <div className='tasks__column'>
                <h3 className='tasks__title'>{this.props.title}</h3>
                <div
                    className={'tasks__dropable'}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => this.props.drop(e, this.props.status)}
                >
                    {this.props.todos.length
                        ? this.props.todos.map((todo, index) => {
                            return todo.status === this.props.status
                                ? (
                                    <TaskElement
                                        key={index}
                                        index={index}
                                        openPopup={this.props.openPopup}
                                        removeTask={this.props.removeTask}
                                        taskName={todo.name}
                                        description={todo.description}
                                        toggleEditionStatus={this.props.toggleEditionStatus}
                                        drag={this.props.drag}
                                    />
                                )
                                : null
                        })
                        : null
                    }
                </div>
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
        removeTask: (index) => dispatch(deleteTask(index)),
        toggleEditionStatus: (index) => dispatch(toggleEditStatus(index)),
    }
}

export default connect(
    mapStateToProps,
    mapActionsToProps
)(TasksColumn);