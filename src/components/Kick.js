import React from 'react';
import PropTypes from 'prop-types';

const Kick = props => {
  const { kick, onWrongAnswer } = props;
  return (
    <>
      <h3>O prato que pensou foi ...</h3>
      <h2>{kick}</h2>
      <button type="button">CERTO</button>
      <button type="button" onClick={onWrongAnswer}>
        Errado
      </button>
    </>
  );
};

Kick.propTypes = {
  kick: PropTypes.string.isRequired,
  onWrongAnswer: PropTypes.func.isRequired,
};

export default Kick;
