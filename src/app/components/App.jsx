import React from 'react';
import PropTypes from 'prop-types';
import { Route, Link } from 'react-router-dom';
import DashboardPage from './DashboardPage.jsx';
import ResourceCategoryPage from './resources/ResourceManagementPage.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container-fluid">
                <nav className="navbar navbar-expand-sm navbar-light bg-light">
                    <span className="navbar-brand mb-0 h1 text-warning">CnD</span>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/dashboard">Dashboard</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/category/web">Web</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/category/database">Databases</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/storage">Storage</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/networking">Networking</Link>
                        </li>
                    </ul>
                </nav>
                <div>
                    <Route path="/dashboard" component={DashboardPage} />
                    <Route path="/category/:category" component={ResourceCategoryPage} />
                </div>
            </div >
        );
    }
}

export default App;