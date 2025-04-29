import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components.css';

const RestartButton = ({ label = 'Скинути гру', onClick, disabled = false }) => {
    return (
        <button
            className="game-button restart-button"
            onClick={onClick}
            disabled={disabled}
        >
            {label}
        </button>
    );
};

RestartButton.propTypes = {
    label: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool
};

export default RestartButton;