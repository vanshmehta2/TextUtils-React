import React from 'react';
// import PropTypes from 'prop-types';

const propTypes = {};

const defaultProps = {};


const Alert = (props) => {
    return  props.alert && <div>
      <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{props.alert.type}</strong>: {props.alert.message}
            {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
        </div>
    </div>;
}

Alert.propTypes = propTypes;
Alert.defaultProps = defaultProps;


export default Alert;