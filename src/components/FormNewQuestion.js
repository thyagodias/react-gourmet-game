import React from 'react';
import PropTypes from 'prop-types';

const FormNewQuestion = ({ wrongAnswer }) => {
  return (
    <>
      <form action="submit">
        <p>O que o prato que pensou tem de diferente de {wrongAnswer}:</p>
        <input type="text" />
        <p>Em que prato pensou?</p>
        <input type="text" />
        <br />
        <br />
        <button type="submit">Responder</button>
      </form>
    </>
  );
};

FormNewQuestion.propTypes = {
  wrongAnswer: PropTypes.string.isRequired,
};

export default FormNewQuestion;
