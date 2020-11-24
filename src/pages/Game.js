import React, { useEffect, useState } from 'react';
import api from '../services/api';
import Kick from '../components/Kick';
import Question from '../components/Question';
import FormNewQuestion from '../components/FormNewQuestion';

const Game = () => {
  const [state, setState] = useState({});
  const [isLastQuestion, setIsLastQuestion] = useState(false);
  const [answer, setAnswer] = useState('');
  const [answerStatus, setAnswerStatus] = useState('');

  function getQuestion(kind) {
    console.log('proxima pergunta', kind);
    api
      .get(`/kind/${kind}`)
      .then(response => {
        setState(response.data.data);
      })
      .catch(error => console.log(error));
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
          kickAnswer={kick => getQuestion(kick)}
        />
      )}

      {isLastQuestion !== false && answerStatus !== 'incorrect' && (
        <Kick
          kick={answer}
          onWrongAnswer={() => setAnswerStatus('incorrect')}
        />
      )}

      {answerStatus === 'incorrect' && <FormNewQuestion wrongAnswer={answer} />}
    </>
  );
};

export default Game;
