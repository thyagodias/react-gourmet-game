import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import api from '../services/api';

const FormNewQuestion = ({ wrongAnswer }) => {
  const [kind, setKind] = useState('');
  const [dish, setDish] = useState('');
  const [formSubmitStatus, setFormSubmitStatus] = useState(false);

  function handleSubmitForm(event) {
    api
      .post(`kind/${wrongAnswer}`, { dish, kind })
      .then(() => {
        setFormSubmitStatus(true);
      })
      .catch(error => {
        console.log(error);
        alert('Houve um erro ao tentar salvar o formulário');
      });
    event.preventDefault();
  }

  return (
    <>
      {formSubmitStatus === false ? (
        <form onSubmit={handleSubmitForm}>
          <label>
            O que o prato que pensou tem de diferente de {wrongAnswer}:
            <br />
            <input
              type="text"
              value={kind}
              onChange={event => setKind(event.target.value)}
            />
          </label>
          <br />
          <br />
          <label>
            Em que prato pensou?
            <br />
            <input
              type="text"
              value={dish}
              onChange={event => setDish(event.target.value)}
            />
          </label>
          <br />
          <br />
          <button type="submit">Responder</button>
        </form>
      ) : (
        <div>
          <h3>Resposta enviada com sucesso!</h3>
          <p>Espero acertar na próxima</p>
          <Link to="/">Recomeçar</Link>
        </div>
      )}
    </>
  );
};

FormNewQuestion.propTypes = {
  wrongAnswer: PropTypes.string.isRequired,
};

export default FormNewQuestion;
