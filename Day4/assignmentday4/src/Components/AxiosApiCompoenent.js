import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AxiosApiComponent() {
    const [count, setCount] = useState(0);
    const [data, setData] = useState([]);

    useEffect(() => {
        console.log( count);
    }, [count]); 
    useEffect(() => {
        
        
        // fetch("https://jsonplaceholder.typicode.com/users")
        //     .then((response) => response.json())
        //     .then((data) => setData(data));

        // getting data using with axios 
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(function (response) {
                setData(response.data);
                console.log(response);
            })
    }, []); 

    return (
        < div className="container" >
            <h4>Use Effect Example</h4>
            <p> Clicked {count} times.</p>
            <button className="btn btn-warning" onClick={() => setCount(count + 1)}>
                Click !
            </button>
            <hr />
            <h2>Fetching data using Axios</h2>
            <div className="container">
                <table className="table table-bordered" style={{ width: "100%", border: "1px solid #CCC" }}>
                    <thead>
                        <tr>
                            <th>Employee Name</th>
                            <th>Employee Email</th>
                            <th>Employee Website</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, i) => (<tr key={i}>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.website}</td>
                        </tr>))}
                    </tbody>
                </table>
            </div>
        </div >
    )
}

export default AxiosApiComponent;