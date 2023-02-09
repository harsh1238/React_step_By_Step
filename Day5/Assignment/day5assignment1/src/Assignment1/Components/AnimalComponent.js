import React, { useState } from 'react';

const AnimalComponent = ({ }) => {
    const [name] = useState("Animal");

    return (
        <div>
            This is an {name} Component!
        </div>
    );
}

export default AnimalComponent;