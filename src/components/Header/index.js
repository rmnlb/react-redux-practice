import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './style.scss'


class Header extends Component {
    render () {
        return (
            <div className='header'>
                    <Link to='/' className='nav__link'>Home</Link>
                    <Link to='/tests' className='nav__link'>Tests</Link>
                    <Link to='/todolist' className='nav__link'>ToDoList</Link>
            </div>
        )
    }
}

export default Header;