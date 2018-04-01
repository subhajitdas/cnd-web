import React from 'react';
import PropTypes from 'prop-types';
import { Route, Link } from 'react-router-dom';
import Dashboard from './Dashboard.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <nav>
                    <Link to="/dashboard">Dashboard</Link>
                </nav>
                <div>
                    <Route path="/dashboard" component={Dashboard} />
                </div>
            </div>
        );
    }
}

export default App;