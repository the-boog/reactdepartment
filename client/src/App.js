import React, { Component, Fragment } from 'react';
import Department from './components/Department';
import Navbar from './components/Navbar';
import { Container } from 'semantic-ui-react';
import { Route, Switch } from 'react-router-dom';
import NoMatch from './components/NoMatch';
import Items from './components/Items';
import Item from './components/Item';
import ItemForm from './components/ItemForm';
import UpdateDepartment from './components/UpdateDepartment';
// import DepartmentForm from './components/DepartmentForm';


// import Show from './components/Show';

class App extends Component {
  

 
  render() {
    return (
      <Fragment>
       <Navbar />
       <Container>
       <Switch>
         <Route exact path="/" component={Department} />
         {/* <Route exact path="/api/departments/new" component={DepartmentForm} /> */}
         <Route exact path="/api/departments/:department_id/items" component={Items} />
         <Route exact path="/api/departments/:id" component={UpdateDepartment} />
         <Route exact path="/api/departments/:department_id/items/new" component = {ItemForm} />
         <Route exact path="/api/departments/:department_id/items/:id" component = {Item} />
         
         
         <Route component={NoMatch} />

       </Switch>
     </Container>
     </Fragment>
      
    );
  }
}

export default App;
