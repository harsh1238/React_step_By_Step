import React, { useState } from 'react';

const BirdComponent = ({ }) => {
    const [name] = useState("Bird")
    return (
        <div>
            This is an {name} Component!
        </div>
    );
}

export default BirdComponent;