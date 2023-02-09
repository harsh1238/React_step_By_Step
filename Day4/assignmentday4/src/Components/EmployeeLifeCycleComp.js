import React from "react";
import Employee from "./Employee";
import ReactDOM from "react-dom";

class EmployeeLifeCycleComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
    };
  }

  mountEmployeeComponent() {
   
      
      this.setState({
        isVisible: true,
      });
    
  }

   unmountComponent() 
{
 this.setState({
    isVisible: false,
 });
};


  render() {
    return (
      <>
        <div className="App">
          <h2>Lifecycle Example</h2>
          <button
            className="btn btn-primary"
            onClick={() => this.mountEmployeeComponent()}
          >
            Mount Employee component
          </button>
          <button
            className="btn btn-primary"
            onClick={() => this.unmountComponent()}
          >
            Unmount Employee component
          </button>
          {/* <button
            className="btn btn-primary"
            onClick={() => this.mountEmployeeComp("props")}
          >
            Change Props
          </button> */}

          {/* <div id="employee"></div> */}
          {this.state.isVisible && <Employee />}
          <hr />
        </div>
      </>
    );
  }
}
export default EmployeeLifeCycleComp;