import React, { useEffect, useState } from 'react';
import Exercise from './exercise.component';

const ExercisesList = () => {
    const [exercises, setExercises] = useState([]);

    useEffect(() => {
        const getApi = async () => {
            const response = await fetch('http://localhost:5000/exercises');
            const data = await response.json();
            setExercises(data);
            console.log(data);
        };
        getApi();
    }, []);
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