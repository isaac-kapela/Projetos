import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* fundo escuro transparente */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

export const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  max-width: 80%;
  max-height: 80%;
  overflow: auto;
  position: relative; /* Adicionado para posicionar o botão de fechar */
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

export const CloseModalButton = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #ccc;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  float: right;
`;
