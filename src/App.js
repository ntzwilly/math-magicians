import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { FaCalculator } from 'react-icons/fa';
import { BsBlockquoteLeft } from 'react-icons/bs';
import Calculator from './components/Calculator';
import Home from './components/Home';
import Quote from './components/Quote';
import './index.css';

const links = [
  {
    id: 1,
    path: '/home',
    text: <AiFillHome />,
  },
  {
    id: 2,
    path: '/calculator',
    text: <FaCalculator />,
  },
  {
    id: 3,
    path: '/quotes',
    text: <BsBlockquoteLeft />,
  },
];
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Router>
          <div className="header">
            <h1>Math Magicians</h1>
            <nav className="navbar">
              <ul className="navbar-ul">
                {links.map((link) => <li key={links.id}><NavLink to={link.path} activeClassName="active-link">{link.text}</NavLink></li>)}
              </ul>
            </nav>
          </div>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/calculator">
              <Calculator />
            </Route>
            <Route path="/quotes">
              <Quote />
            </Route>
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
