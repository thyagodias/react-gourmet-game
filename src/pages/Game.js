import React, { useEffect, useState } from 'react';
import Pergunta from '../components/Pergunta';
import api from '../services/api';

const Game = () => {
  const [state, setState] = useState({});

  function getQuestion(kind) {
    api
      .get(`/kind/${kind}`)
      .then(response => {
        console.log('request: ', response);
        setState(response.data.data);
      })
      .catch(error => console.log(error));
  }

  useEffect(() => {
    getQuestion('massa');
  }, []);

  return (
    <>
      <h1>Esta é a página do jogo</h1>
      <hr />
      <p>Aqui é o componente de pergutna</p>
      <pre>{state.node}</pre>
      <Pergunta
        item={state}
        nextQuestion={kind => getQuestion(kind)}
        kickAnswer={() => console.log('Chutar resposta')}
      />
    </>
  );
};

export default Game;
