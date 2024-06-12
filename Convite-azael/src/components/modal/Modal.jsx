import { useState } from 'react';
import PropTypes from 'prop-types';
import * as S from './Modal_style';
import { Document, Packer, Paragraph } from 'docx';

const ModalConfirmacaoPresenca = ({ closeModal }) => {
  const [nome, setNome] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const doc = new Document({
      sections: [
        {
          properties: {},
          children: [
            new Paragraph(`Nome: ${nome}`),
          ],
        },
      ],
    });

    try {
      const blob = await Packer.toBlob(doc);
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'Informações-presenca.docx');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Erro ao gerar o arquivo DOCX:', error);
    }

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
