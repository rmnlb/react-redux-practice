import React, {Component} from 'react'
import './style.scss';

class PopUp extends Component{
    state = {
        name: '',
        description: ''
    };

    componentDidMount() {
        this.editedTask = this.props.todos.filter((todo) => (todo.isEditing))[0];
        this.editedIndex = this.props.todos.indexOf(this.editedTask);

        if(this.editedIndex >= 0) {
            this.setState({
                name: this.editedTask.name,
                description: this.editedTask.description
            })
        }
    }

    setName = (e) => {
        this.setState({
            name: e.target.value
        })
    };

    setDescription = (e) => {
        this.setState({
            description: e.target.value
        })
    };

    saveNewTask = () => {
        if(this.state.name) {
        this.props.closePopup();
        this.props.createNewTask({
            name: this.state.name,
            description: this.state.description
        })
        } else {
            alert("You can't create task with empty name");
        }
    };

    saveEditedTask = (index) => {
        if(this.state.name) {
        this.props.closePopup();
        this.props.saveEdited({
            index: index,
            name: this.state.name,
            description: this.state.description
        })
        } else {
            alert("You can't set task with empty name");
        }
    };

    render () {

        return (
            <div className='popup'>
                <div className='popup__field'>
                    <h2 className='popup__title'>Add new task</h2>
                    <input
                        type="text"
                        placeholder='Name'
                        className='popup__input'
                        value={this.state.name}
                        onChange={this.setName}
                    />
                    <textarea
                        className='popup__description'
                        name="description"
                        id="desc"
                        placeholder='Description'
                        cols="30"
                        rows="10"
                        value={this.state.description}
                        onChange={this.setDescription}
                    ></textarea>
                    <button
                        className='popup__btn'
                        onClick={this.editedIndex >= 0 ? () => this.saveEditedTask(this.editedIndex) : this.saveNewTask}
                    >Submit</button>
                </div>
            </div>
        )
    }
}

export default PopUp;