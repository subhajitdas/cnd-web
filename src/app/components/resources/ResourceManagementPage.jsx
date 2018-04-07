import React from 'react';
import PropTypes from 'prop-types';

class ResourceManagementPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.match.params.category}
            </div>
        );
    }
}

export default ResourceManagementPage;