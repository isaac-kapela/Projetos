import { useState } from 'react';
import PropTypes from 'prop-types';
import * as S from './Modal_style';

const ModalConfirmacaoPresenca = ({ closeModal }) => {
  const [nome, setNome] = useState('');
  const [numeroPessoas, setNumeroPessoas] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode fazer o que quiser com os dados do formulário
    console.log('Nome:', nome);
    console.log('Número de pessoas:', numeroPessoas);
    // Fechar o modal após o envio do formulário
    closeModal();
  };

  return (
    <S.ModalContainer>
      <S.ModalContent>
        <S.CloseButton onClick={closeModal}>&times;</S.CloseButton>
        <h2>Confirmar Presença</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
          <label htmlFor="numeroPessoas">Número de Pessoas:</label>
          <input
            type="number"
            id="numeroPessoas"
            value={numeroPessoas}
            onChange={(e) => setNumeroPessoas(e.target.value)}
            required
          />
          <button type="submit">Enviar</button>
        </form>
      </S.ModalContent>
    </S.ModalContainer>
  );
};

ModalConfirmacaoPresenca.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default ModalConfirmacaoPresenca;
