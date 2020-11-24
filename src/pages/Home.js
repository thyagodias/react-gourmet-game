import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <h1>Bem vindo ao Jogo Gourmet</h1>
      <h4>Gostaria de tentar adivinhar o prato em que você pensou</h4>
      <h4>Antes de começar, pense em um prato ...</h4>
      <Link itemType="button" to="/game">
        COMEÇAR
      </Link>
    </>
  );
};

export default Home;
