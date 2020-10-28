import React from 'react'

function User(props) {
    return (
        <div>
            <p>
                Hello {props.match.params.name}
            </p>
        </div>
    );
}

export default User;