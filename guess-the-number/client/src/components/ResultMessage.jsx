import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components.css';

const ResultMessage = ({ message, type = 'success', attempts = null }) => {
    const messageClass = type === 'success'
        ? 'feedback-message correct'
        : 'feedback-message';

    return (
        <div className={messageClass}>
            {message}
            {attempts !== null && ` (${attempts} спроб)`}
        </div>
    );
};

ResultMessage.propTypes = {
    message: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['success', 'error']),
    attempts: PropTypes.number
};

export default ResultMessage;