import React from 'react'
import axios from 'axios';
import { Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';



class Department extends React.Component {
  state = {department: []}
  
  componentDidMount() {
    axios.get("/api/departments")
    .then( res => {
      this.setState({department: res.data})
    })
  }

  renderDepartment = () => {
    const {department} = this.state 
    return department.map( department => {
      return <Header key={department.id} as= {Link} to={`/api/departments/${department.id}/items`}>{department.name} </Header>
    })
  }

  render () {
    return (
      <div>
        {this.renderDepartment()}
      </div>
    
    
      )    
  }
}

export default Department;