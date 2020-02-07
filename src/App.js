import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/navbar.component';
import ExercisesList from './components/exercises-list.component';
import UpdateExercise from './components/update-exercise.component';
import CreateExercise from './components/create-exercise.component';
import CreateUser from './components/create-user.component';

import { ExercisesProvider } from './components/contexts/exercisesContext';
import { UsersProvider } from './components/contexts/usersContext';


// Dummy
import Example from './dummy/hooks';



function App() {
  useEffect(() => {
    const getApi = async () => {
      const response = await fetch('http://localhost:5000/exercises');
      const data = await response.json();
    }
    getApi();
  }, []);
  return (
    <Router>
      <ExercisesProvider>
        <UsersProvider>
          <Navbar />
          <div className="container">
            <br />
            <Route path='/' exact component={ExercisesList} />
            <Route path='/update:id' component={UpdateExercise} />
            <Route path='/create' component={CreateExercise} />
            <Route path='/user' component={CreateUser} />
          </div>
        </UsersProvider>
      </ExercisesProvider>
    </Router>
  );
}

export default App;
