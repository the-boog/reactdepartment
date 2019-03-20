import React from 'react'
import axios from 'axios';
import { Header, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import DepartmentForm from './DepartmentForm';


class Department extends React.Component {


  state = {department: []}
   
  
  componentDidMount() {
    axios.get("/api/departments")
    .then( res => { 
      this.setState({department: res.data})
      
    })
  }

  deleteDepartment = (id) => {
    axios.delete(`/api/departments/${id}`)
      .then( res => {
        const { department, } = this.state;
        this.setState({ department: department.filter(d => d.id !== id), })
      })
  }

  // updateDepartment = (id) => {
  //   axios.put(`/api/items/${id}`)
  //     .then( res => {
  //       const department = this.state.department.map( d => {
  //       if (d.id === id)
  //         return res.data;
  //       return d;
  //     });
  //     this.setState({ department, });
  //   })
  // }

  


  renderDepartment = () => {
    const {department} = this.state 
    return department.map( department => {
      return <Header key={department.id}>
      <Header style={{padding: "6px"}} as= {Link}  to={`/api/departments/${department.id}/items`}>
        {department.name} 
        
      </Header>
      <Button color="yellow" inverted as={Link} to={`/api/departments/${department.id}`} name={department.name}>Edit</Button>
      <Button color="red" inverted onClick={() => this.deleteDepartment(department.id)}>Delete</Button>
      </Header>
    })
  }

  

  render () {
    return (
      <div>
        <DepartmentForm />
        {this.renderDepartment()}
      </div>
    
    
      )    
  }
}

export default Department;