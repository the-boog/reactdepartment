import React from 'react'
import axios from 'axios'
import { Header, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';



class Items extends React.Component {
  state = {items: []}

  componentDidMount() {
    axios.get(`/api/departments/${this.props.match.params.department_id}/items`)
    .then( res => {
      this.setState({items: res.data})
    })
  }

  deleteItem = (id) => {
    axios.delete(`/api/departments/${this.props.match.params.department_id}/items/${id}`)
      .then( res => {
        const { items, } = this.state;
        this.setState({ Items: items.filter(d => d.id !== id), })
        this.props.history.push("/")
        
      })
  }

  renderItems = () => {
    const {items} = this.state 
    return items.map( i => {
      return <Header key={i.id} >
              <Header  as="h2" style={{padding: "6px"}} as={ Link } to={`/api/departments/${this.props.match.params.department_id}/items/${i.id}`}>
                {i.name}
                
              </Header>
              <Button color="red" inverted onClick={() => this.deleteItem(i.id)}>Delete</Button>
              
            </Header>
    })
  }

  render () {
    return (
      <div>
        <Button as = { Link } to={`/api/departments/${this.props.match.params.department_id}/items/new`} >New</Button>
        {this.renderItems()}
      </div>
    )
  }
}

export default Items;

