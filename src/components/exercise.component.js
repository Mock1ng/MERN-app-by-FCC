import React from 'react';

const Exercise = ({ username, description, duration, date }) => {

    return (
        <tbody>
            <tr>
                <th itemScope="row">{username}</th>
                <td>{description}</td>
                <td>{duration}</td>
                <td>{date}</td>
            </tr>
        </tbody>
    )
}

export default Exercise;