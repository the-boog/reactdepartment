import React from 'react';
import { Form } from 'semantic-ui-react';
import axios from 'axios';


class ItemForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: "", description: "", price: 0}
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const items = { ...this.state, };
    axios.post(`/api/departments/${this.props.match.params.department_id}/items`, items)
      .then( res => {
        this.props.history.push(`/api/departments/${this.props.match.params.department_id}/items`);
      })
    this.setState({name: "", description: "", price: 0})
  }


  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})

  }
  

  render () {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group>
        <Form.Input
          label="Item"
          placeholder="Create a New Item"
          required
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          />
           <Form.Input
          label="Description"
          placeholder="Description"
          required
          name="description"
          value={this.state.description}
          onChange={this.handleChange}
          />
           <Form.Input
          label="Price"
          placeholder="0"
          required
          name="price"
          value={this.state.price}
          onChange={this.handleChange}
          />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
      </Form>
    )
  }
}

export default ItemForm;