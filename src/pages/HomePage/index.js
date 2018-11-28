import React, {Component} from 'react';
import './style.scss'
import funpic from '../../assets/bart-simpson-generator.php.gif'

class HomePage extends Component {
    render () {
        return (
            <div className='homepage'>
                <h2>Home Page</h2>
                <p>This is just a welcome page for my practice with react-redux.</p>
                <p>So I just put here funny picture</p>
                <div className='homepage__mask'>
                    <img src={funpic} alt="Funny pic about redux"/>
                </div>
            </div>
        )
    }
}

export default HomePage;