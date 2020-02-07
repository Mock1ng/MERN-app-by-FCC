import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
const Exercise = ({ username, description, duration, date, id }) => {

    const deleteExercise = id => {
        axios.delete('http://localhost:5000/exercises/' + id)
            .then(response => console.log(response.data));
    }

    return (
        <tbody>
            <tr>
                <td>{username}</td>
                <td>{description}</td>
                <td>{duration}</td>
                <td>{date.substring(0, 10)}</td>
                <td>
                    <Link to={'/edit/' + username}>Edit</Link> | <a href="#">Delete</a>
                </td>
            </tr>
        </tbody>
    )
}

export default Exercise;