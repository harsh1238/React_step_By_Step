import React, { useState } from 'react';

const UserComponent = ({ }) => {
    const [name] = useState("User");
    return (
        <div>
            This is an {name} Component!
        </div>
    );
}

export default UserComponent;