import './App.css';
import './components/login.css';
import React from 'react';
import {Button} from 'reactstrap';
import {HashRouter as Router, Switch, Route, Link} from 'react-router-dom';
import FbLogin from './components/fbLogin';
import Login from './components/login';

class App extends React.Component {
  state = {
    fbButton: false
  }
  showBtn = (value) => {
    this.setState({
      fbButton: value
    })
    console.log(this.state)
  }
  render() {
    const {fbButton} = this.state;
      return (
        <Router basename='/'>
          <Switch>
                <Route exact path="/">
                  {fbButton === true &&
                    <div className="form">
                    <div className="rowMine">
                      <FbLogin fbButton={fbButton} />
                    </div>
                    </div>
                  }
                  {fbButton === false &&
                    <div className="form">
                    <div className="rowMine">
                      <Login showBtn={this.showBtn} />
                    </div>
                    </div>
                  }
                </Route>       
          </Switch>
        </Router>
      )
  }
}

export default App;
