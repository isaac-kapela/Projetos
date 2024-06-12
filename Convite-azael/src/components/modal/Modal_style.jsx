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
  outline-color: purple; 
  outline-width: 15px;

`;

export const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  max-width: 80%;
  max-height: 80%;
  overflow: auto;
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

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Label = styled.label`
  font-weight: bold;
`;

export const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const SubmitButton = styled.button`
  padding: 10px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const ErrorMessage = styled.p`
  color: red;
`;
