import React from 'react';
import { Form } from 'semantic-ui-react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class DepartmentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: ""}
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const department = { ...this.state, };
    axios.post("/api/departments", department)
      .then( res => {
        // this.props.history.push("/")
    
        
      })
    this.setState({name: ""})
  }


  handleChange = (e) => {
    this.setState({name: e.target.value})

  }
  

  render () {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          label="Department"
          placeholder="Create a New Department"
          required
          value={this.state.name}
          onChange={this.handleChange}
          />
      </Form>
    )
  }
}

export default DepartmentForm;