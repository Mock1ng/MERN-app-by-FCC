import React, { useState, useEffect, createContext } from 'react';

export const UsersContext = createContext();

export const UsersProvider = props => {

    const [users, setUsers] = useState([]);
    let usernameArray = [];

    useEffect(() => {
        const getUsernames = async () => {
            const response = await fetch('http://localhost:5000/users');
            const data = await response.json();
            data.map(username => usernameArray.push(username.username));
            setUsers(usernameArray);
        };
        getUsernames();
    }, []);

    return (
        <UsersContext.Provider value={[users, setUsers]}>
            {props.children}
        </UsersContext.Provider>
    )
}