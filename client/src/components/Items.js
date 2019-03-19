import React from 'react'
import axios from 'axios'
import { Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


class Items extends React.Component {
  state = {items: []}

  componentDidMount() {
    axios.get(`/api/departments/${this.props.match.params.department_id}/items`)
    .then( res => {
      this.setState({items: res.data})
    })
  }

  renderItems = () => {
    const {items} = this.state 
    return items.map( i => {
      return <Header key={i.id} as={ Link } to={`/api/departments/${this.props.match.params.department_id}/items/${i.id}`}>{i.name}</Header>
    })
  }

  render () {
    return (
      <div>
        {this.renderItems()}
      </div>
    )
  }
}

export default Items;

