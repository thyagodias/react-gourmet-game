import React, { useEffect, useState } from 'react';
import Kick from '../components/Kick';
import Question from '../components/Question';
import api from '../services/api';

const Game = () => {
  const [state, setState] = useState({});
  const [isLastQuestion, setIsLastQuestion] = useState(false);
  const [answer, setAnswer] = useState('');

  function getQuestion(kind) {
    api
      .get(`/kind/${kind}`)
      .then(response => {
        setState(response.data.data);
      })
      .catch(error => console.log(error));
  }

  function handleKick(payload) {
    setAnswer(payload);
    setIsLastQuestion(true);
  }

  useEffect(() => {
    getQuestion('massa');
  }, []);

  useEffect(() => {
    if (state.left === null && state.right === null) {
      setAnswer(state.node);
      setIsLastQuestion(true);
    }
  }, [state]);

  return (
    <>
      <h1>Jogo Gourmet</h1>
      <hr />

      {isLastQuestion !== true && (
        <Question
          item={state}
          nextQuestion={kind => getQuestion(kind)}
          kickAnswer={kick => handleKick(kick)}
        />
      )}

      {isLastQuestion !== false && <Kick kick={answer} />}
    </>
  );
};

export default Game;
