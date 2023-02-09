import React from 'react';

class FormComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue: "",
            selectValue: "Mango",
            textareaValue: ""
        }
    }

    handleChange(event, type) {
        if (type === "input") {
            this.setState({
                inputValue: event.target.value
            })
        } else if (type === "textarea") {
            this.setState({
                textareaValue: event.target.value
            })
        } else if (type === "select") {
            this.setState({
                selectValue: event.target.value
            })
        }
    }

    handleSubmit(event) {
        console.log(this.state);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form >
                    <input type="text" onChange={(event) => this.handleChange(event, "input")} value={this.state.inputValue} /> <br />
                    <textarea
                        onChange={(event) => this.handleChange(event, "textarea")} value={this.state.textareaValue} >
                    </textarea> <br />

                    <select onChange={(event) => this.handleChange(event, "select")} value={this.state.selectValue}>
                        <option>Banana</option>
                        <option>Orange</option>
                        <option>Mango</option>
                    </select> <br />

                    <button onClick={(event) => this.handleSubmit(event)}>Submit</button>
                </form>
            </div >
        );
    }
}

export default FormComponent;