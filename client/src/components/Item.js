import React from 'react'
import axios from 'axios'
import { Header } from 'semantic-ui-react';


class Item extends React.Component {
  state = {item: []}

  componentDidMount() {
    axios.get(`/api/departments/${this.props.match.params.department_id}/items/${this.props.match.params.id}`)
    .then( res => {
      this.setState({item: res.data})
    })
  }


  render () {
    return (
      <div>
        <Header as="h1">{this.state.item.name}</Header>
        <Header as="h4">{this.state.item.description}</Header>
        ${this.state.item.price}
        
      </div>
    )
  }
}

export default Item;
