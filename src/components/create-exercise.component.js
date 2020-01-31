import React, { useState } from "react";
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CreateExercise = () => {


    const [username, setUsername] = useState('');
    const [description, setDescription] = useState('');
    const [duration, setDuration] = useState(0);
    const [date, setDate] = useState(new Date());
    const [users, setUsers] = useState([]);

    const onChangeUsername = (e) => {
        setUsername(e.target.value)
    };

    const onChangeDescription = (e) => {
        setDescription(e.target.value)
    };

    const onChangeDuration = (e) => {
        setDuration(e.target.value)
    };

    const onChangeDate = (date) => {
        setDate(date)
    };

    const onSubmit = e => {
        e.preventDefault();
        const exercise = {
            username: username,
            description: description,
            duration: duration,
            date: date
        }
        console.log(exercise);
        axios.post('http://localhost:5000/exercises/add', exercise)
            .then(res => console.log(res.data));
        window.location = '/';
    }

    return (
        <div>
            <h3>Create New Exercise Log</h3>
            <form onSubmit={onSubmit}>
                <div className="form-goup">
                    <label>Username: </label>
                    <select
                        className='custom-select'
                        value={username} onChange={onChangeUsername}
                        required>
                        <option>Open this select menu</option>

                        {users.map(user => (
                            <option value={user} key={user}>{user}</option>
                        ))}


                    </select>
                </div>

                <div className="form-group">
                    <label>Description: </label>
                    <input
                        type="text"
                        className='form-control'
                        value={description}
                        onChange={onChangeDescription}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Duration (in minute): </label>
                    <input
                        type="text"
                        className='form-control'
                        value={duration}
                        onChange={onChangeDuration}
                    />
                </div>

                <div className="form-group">
                    <label>Date: </label>
                    <div>
                        <DatePicker
                            selected={date}
                            onChange={onChangeDate}
                        />
                    </div>
                </div>

                <div className="form-group">
                    <input
                        type="submit"
                        value='Create Exercise Log'
                        className='btn btn-primary'
                    />
                </div>
            </form>
        </div>
    );


}

export default CreateExercise;