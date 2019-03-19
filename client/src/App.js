import React, { Component, Fragment } from 'react';
import Department from './components/Department';
import Navbar from './components/Navbar';
import { Container } from 'semantic-ui-react';
import { Route, Switch } from 'react-router-dom';
import NoMatch from './components/NoMatch';
import Items from './components/Items';
import Item from './components/Item';
// import Show from './components/Show';

class App extends Component {
  

 
  render() {
    return (
      <Fragment>
       <Navbar />
       <Container>
       <Switch>
         <Route exact path="/" component={Department} />
         <Route exact path="/api/departments/:department_id/items" component={Items} />
         <Route exact path="/api/departments/:department_id/items/:id" component = {Item} />
         <Route component={NoMatch} />

       </Switch>
     </Container>
     </Fragment>
      
    );
  }
}

export default App;
