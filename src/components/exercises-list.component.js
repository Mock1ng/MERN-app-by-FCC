import React, { useEffect, useState, useContext } from 'react';
import Exercise from './exercise.component';
import { ExercisesContext } from './contexts/exercisesContext';
import { UsersContext } from './contexts/usersContext';

const ExercisesList = () => {
    // const [exercises, setExercises] = useState([]);
    const [exercises, setExercises] = useContext(ExercisesContext);
    const [username, setUsername] = useContext(UsersContext);
    console.log(username);

    return (
        <div>
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th itemScope="col">Name</th>
                        <th itemScope="col">Description</th>
                        <th itemScope="col">Duration</th>
                        <th itemScope="col">Date</th>
                    </tr>
                </thead>
                {exercises.map(exercise => (
                    <Exercise
                        username={exercise.username}
                        description={exercise.description}
                        duration={exercise.duration}
                        date={exercise.date}
                        key={exercise._id}
                    />
                ))}
            </table>

        </div>

    )
}

export default ExercisesList;