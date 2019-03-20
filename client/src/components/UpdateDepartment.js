import React from 'react';
import { Form } from 'semantic-ui-react';
import axios from 'axios';


class UpdateDepartment extends React.Component {
  state = {name: ""}
  
  componentDidMount() {
    axios.get(`/api/departments/${this.props.match.params.id}`)
    .then( res => { 
      this.setState({name: res.data.name})
    })
  }


  handleSubmit = (e) => {
    e.preventDefault()
    axios.put(`/api/departments/${this.props.match.params.id}`, {name: this.state.name})
    .then( res => {
      this.props.history.push("/");
    })
    
  }
  
  handleChange = (e) => {
    this.setState({name: e.target.value})

  }
  

  render () {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          label="Department"
          placeholder="Edit Department"
          required
          value={this.state.name}
          onChange={this.handleChange}
          />
      </Form>
    )
  }
}

export default UpdateDepartment;