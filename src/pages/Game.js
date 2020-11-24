import React, { useEffect, useState } from 'react';
import Question from '../components/Question';
import api from '../services/api';

const Game = () => {
  const [state, setState] = useState({});
  const [isLastQuestion, setIsLastQuestion] = useState(false);

  function getQuestion(kind) {
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
      setIsLastQuestion(true);
    }
  }, [state]);

  return (
    <>
      <h1>Esta é a página do jogo</h1>
      <hr />
      <p>Aqui é o componente de pergutna</p>
      <pre>{state.node}</pre>
      {/* <p>é a ultima {isLastQuestion}</p> */}

      {isLastQuestion !== true && (
        <Question
          item={state}
          nextQuestion={kind => getQuestion(kind)}
          kickAnswer={() => console.log('Chutar resposta')}
        />
      )}
    </>
  );
};

export default Game;
