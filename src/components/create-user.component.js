import React, { useState } from 'react';
import axios from 'axios';

const CreateUser = () => {

    const [username, setUsername] = useState('');

    const onChangeUsername = (e) => {
        setUsername(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();

        const user = {
            username: username
        }

        console.log(user)

        axios.post('http://localhost:5000/users/add', user)
            .then(res => console.log(res.data));

        setUsername('');
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor='username'>Username</label>
                    <input type="text" className='form-control' id='username' autoComplete='off' onChange={onChangeUsername} value={username} />
                </div>
                <button type="submit" className="btn btn-primary">Create User</button>
            </form>
        </div>
    )
}

export default CreateUser;