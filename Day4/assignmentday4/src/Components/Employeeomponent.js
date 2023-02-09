import React from "react";

class Employee extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      userData: [],
    };
    console.log("constructor called");
  }

  
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps is called", state.userData);
    return null;
  }

  
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ userData: data });
      });
    console.log("componentDidMount is called");
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate is called");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate called");
    return null;
  }

  componentDidUpdate() {
    console.log("componentDidUpdate called.");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount called.");
  }

  // life cycle 3rd method
  render() {
    console.log("Render called");
    return (
      <>
        <br />
        <div className="container">
          <table
            className="table table-bordered"
            style={{ width: "100%", border: "1px solid #CCC" }}
          >
            <thead>
              <tr>
                <th>Employee Name</th>
                <th>Employee Email</th>
                <th>Employee Website</th>
              </tr>
            </thead>
            <tbody>
              {this.state.userData.map((item, i) => (
                <tr key={i}>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.website}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}
export default Employee;