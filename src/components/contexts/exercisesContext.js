import React, { useState, createContext, useEffect } from 'react';

export const ExercisesContext = createContext();

export const ExercisesProvider = props => {

    const [exercise, setExercises] = useState([]);
    const exerciseArray = [];

    useEffect(() => {
        const getExercises = async () => {
            const response = await fetch('http://localhost:5000/exercises');
            const data = await response.json();
            data.map(exercise => exerciseArray.push(exercise));
            setExercises(exerciseArray);
        }
        getExercises();
    }, []);

    return (
        <ExercisesContext.Provider value={[exercise, setExercises]}>
            {props.children}
        </ExercisesContext.Provider>
    )
}