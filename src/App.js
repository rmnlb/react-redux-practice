import React, { Component } from 'react';
import {Switch, Route} from 'react-router';
import QuizPage from './pages/QuizPage';
import HomePage from './pages/HomePage';
import ToDoPage from './pages/ToDoPage';
import Header from './components/Header';


class App extends Component {
  render() {
    return (
      <div className={'App'}>
        <Header/>
          <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route path='/tests' component={QuizPage}/>
            <Route path='/todolist' component={ToDoPage}/>
          </Switch>
      </div>
    );
  }
}

export default App;
