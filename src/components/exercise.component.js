import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ExercisesContext } from './contexts/exercisesContext';

const Exercise = ({ username, description, duration, date, id }) => {

    const [exercises, setExercises] = useContext(ExercisesContext);

    const deleteExercise = idExercise => {
        axios.delete('http://localhost:5000/exercises/' + idExercise)
            .then(response => console.log(response.data));

        setExercises(exercises.filter(el => el._id !== idExercise))
    }



    return (
        <tbody>
            <tr>
                <td>{username}</td>
                <td>{description}</td>
                <td>{duration}</td>
                <td>{date.substring(0, 10)}</td>
                <td>
                    <button className='btn btn-primary' type='button' onClick={() => window.location = '/edit/' + id}>Edit</button> <button className='btn btn-danger' type='button' onClick={() => deleteExercise(id)}>Delete</button>
                </td>
            </tr>
        </tbody>
    )
}

export default Exercise;