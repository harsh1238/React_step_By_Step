import React from 'react';

class TaskUserDetails extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            dob: "",
            gender: ""
        }
    }

    handleDelete(id) {
        console.log(id);
    }

    handleChange(event, type) {
        if (type === "name") {
            this.setState({
                name: event.target.value
            })
        } else if (type === "dob") {
            this.setState({
                dob: event.target.value
            })
        } else if (type === "gender") {
            this.setState({
                gender: event.target.value
            })
        }
    }

    handleSubmit(event) {
        console.log(this.state);
        // this.setState = this.state;
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <h2>Task - 1</h2>
                <form >
                    <input type="text" onChange={(event) => this.handleChange(event, "name")} value={this.state.name} placeholder="Name" /> <br />

                    <input type="text" onChange={(event) => this.handleChange(event, "dob")} value={this.state.dob} placeholder="dob" /> <br />

                    <input type="text" onChange={(event) => this.handleChange(event, "gender")} value={this.state.gender} placeholder="gender" /> <br />

                    <button onClick={(event) => this.handleSubmit(event)}>Submit</button>
                </form>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>DOB</th>
                            <th>Gender</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.data.map((object, i) => (
                            <tr key={i}>
                                <td>{object.id}</td>
                                <td>{object.name}</td>
                                <td>{object.dob}</td>
                                <td>{object.gender}</td>
                                <td>
                                    <button onClick={() => this.handleDelete(object.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TaskUserDetails;