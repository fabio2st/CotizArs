import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Router extends Component {

      render(){
    <Route path="/dashboard" component={Dashboard} />
          return (
              {this:props.location}
                  )
              }
}

export default withRouter(Router)