import React, {Component} from 'react'
import TasksColumn from '../../components/TasksColumn'
import './style.scss'

class ToDoField extends Component {

    state = {
        dropableIndex: 0,
    };

    drop = (ev, status) => {
        ev.preventDefault();
        this.props.changeProgressStatus({
            index: this.state.dropableIndex,
            status: status
        })
    };

    drag = (index) => {
        this.setState({
            dropableIndex: index
        })
    };

    render() {
        return (
            <div className='tasks'>
                <TasksColumn
                    drop={this.drop}
                    drag={this.drag}
                    title={'New tasks'}
                    status={100}
                    openPopup={this.props.openPopup}
                />
                <TasksColumn
                    drop={this.drop}
                    drag={this.drag}
                    title={'At work'}
                    status={200}
                    openPopup={this.props.openPopup}
                />
                <TasksColumn
                    drop={this.drop}
                    drag={this.drag}
                    title={'Checking'}
                    status={300}
                    openPopup={this.props.openPopup}
                />
                <TasksColumn
                    drop={this.drop}
                    drag={this.drag}
                    title={'Finished'}
                    status={400}
                    openPopup={this.props.openPopup}
                />
            </div>
        )
    }
}

export default ToDoField