import React from 'react';
import PropTypes from 'prop-types';

const Question = props => {
  const { item, nextQuestion, kickAnswer } = props;

  return (
    <>
      <h2>O seu prato é {item.node} ?</h2>
      <button type="button" onClick={() => kickAnswer(item.right)}>
        Sim
      </button>
      <button type="button" onClick={() => nextQuestion(item.left)}>
        Não
      </button>
    </>
  );
};

Question.propTypes = {
  item: PropTypes.shape({
    node: PropTypes.string,
    left: PropTypes.string,
    right: PropTypes.string,
  }).isRequired,
  nextQuestion: PropTypes.func.isRequired,
  kickAnswer: PropTypes.func.isRequired,
};

export default Question;
