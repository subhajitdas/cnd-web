import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as serviceDefinitionActions from '../../actions/serviceDefinitionActions';

class ServiceManagementPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.actions.getServiceDefinitions();
    }

    render() {
        const { definitions, match: { params } } = this.props;
        return (
            <div>
                {params.category}
                <ul>
                    {
                        definitions.map(definition => (
                            <li key={definition._id}>{definition.name}</li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

function mapStateToProps({ service }, ownProps) {
    return {
        definitions: service.definitions
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(serviceDefinitionActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ServiceManagementPage);