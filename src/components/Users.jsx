import React from 'react'
import {Link} from "react-router-dom";

function Users() {
    const users = [
        {
            id: 1,
            name: 'Toto'
        },
        {
            id: 2,
            name: 'Pina'
        },
        {
            id: 3,
            name: 'Ohdjadja'
        }
    ]
    return (
        <div>
            <h2>
                Users
            </h2>
            <ul>
                {
                    users.map(user => (
                        <li key={user.name}>
                            <Link to={`/users/${user.name}`}>
                                {user.name}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Users;
