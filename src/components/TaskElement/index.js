import React, {Component} from 'react';
import './style.scss';

class TaskElement extends Component {

    startEdition = () => {
        this.props.toggleEditionStatus(this.props.index);
        this.props.openPopup();
    };


    render() {
        return (
            <div
                draggable={true}
                onDragStart={() => this.props.drag(this.props.index)}
                className='item-task'
            >
                <h5>{this.props.taskName}</h5>
                <pre>{this.props.description}</pre>
                <div className='item-task__btn-group'>
                    <span
                        className='item-task__btn edit'
                        onClick={this.startEdition}
                    >Edit
                    </span>
                    <span
                        className='item-task__btn'
                        onClick={() => this.props.removeTask(this.props.index)}
                    >Delete
                    </span>
                </div>
            </div>
        )
    }
}

export default TaskElement