import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import history from '../history';
import Navigation from './Navigation';
import Jumbotron from './Jumbotron';
import Feed from './Feed';
import Contact from './Contact';
import About from './About';
// import data from '../data/data.json';
import Loading from './Loading';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Manny Henri - LIN",
      jumbotronTitle: "List of courses",
      feeds: [],
    }
  }

  // UNSAFE_componentWillMount() {
  //   this.setState({
  //     feeds: data,
  //   })
  // }
  async componentDidMount() {
    const url = 'http://localhost:3001/courses';
    const response = await axios.get(url);
    return this.setState({ feeds: response.data });
  }

  render() {
    // useAuth for class component:
    // `this.props.auth0` has all the same properties as the `useAuth0` hook
    const { isLoading, error } = this.props.auth0;

    if (isLoading) {
      console.log('...loading...withAuth0 HOC.')
      return <Loading />
    }
    // Error scenario
    if (error) {
      return <div>Oops... {error.message}</div>;
    }
    return (
      <React.StrictMode>
        <Router history={history}>
          <div className="container">
            <Navigation />
            <Jumbotron title={this.state.jumbotronTitle} />
            {/* <Loading /> */}
            <Switch>
              <Route path="/contact" component={Contact} />
              <Route path="/about" component={About} />
              <Route exact path="/" render={(props) => (
                <Feed feeds={this.state.feeds} />
              )} />
            </Switch>
            <div className="footer">
              <p>&copy; {this.state.name} Inc.</p>
            </div>
          </div>
        </Router>
      </React.StrictMode>
    );
  }
}

export default withAuth0(App);
