import React from "react"

class Searcharea extends React.Component {
    constructor() {
        super();  
          
        this.state = {
            textareaInputValue: ""
        }
    }

    handleChange(e) {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }  

    render() {
        return(
          <textarea name="textareaInputValue" value={this.state.textareaInputValue} onChange={e => this.handleChange(e)}/>  
        )
    }  
}

export default Searcharea;