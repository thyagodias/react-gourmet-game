import React from 'react';
import Game from './pages/Game';

function App() {
  // let round = 0;
  // const state = [
  //   {
  //     pergunta: 'massa',
  //     chute: 'macarrao',
  //     proximaPergunta: 'bolo',
  //   },
  //   {
  //     pergunta: 'bolo',
  //     chute: null,
  //     proximaPergunta: null,
  //   },
  // ];

  // console.log(state[round]);

  // function chutar() {
  //   console.log('sue prato é', state[round].chute);
  // }

  // function handleAddResposta(parentQuestion) {
  //   state[round] = {
  //     pergunta: 'Nova Pergunta',
  //     chute: 'Novo chute',
  //     proximaPergunta: parentQuestion,
  //   };

  //   round = 0;
  //   console.log('vou Adicionar uma nova resposta para', parentQuestion);
  // }

  // function handleNextPergunta() {
  //   round += 1;
  //   if (!state[round].proximaPergunta) {
  //     chutar();
  //     handleAddResposta(state[round].pergunta);
  //     round = 0;
  //     return;
  //   }
  //   console.log(state);
  // }

  return (
    <div className="App">
      <Game />
    </div>
  );
}

export default App;
