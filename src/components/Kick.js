import React from 'react';
import PropTypes from 'prop-types';

const Kick = props => {
  const { kick } = props;
  return (
    <>
      <h3>O prato que pensou foi ...</h3>
      <h2>{kick}</h2>
    </>
  );
};

Kick.propTypes = {
  kick: PropTypes.string.isRequired,
};

export default Kick;
