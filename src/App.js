import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/navbar.component';
import ExercisesList from './components/exercises-list.component';
import UpdateExercise from './components/update-exercise.component';
import CreateExercise from './components/create-exercise.component';
import CreateUser from './components/create-user.component';

// Dummy
import Example from './dummy/hooks';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <br />
        <Route path='/' exact component={ExercisesList} />
        <Route path='/update:id' component={UpdateExercise} />
        <Route path='/create' component={CreateExercise} />
        <Route path='/user' component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
