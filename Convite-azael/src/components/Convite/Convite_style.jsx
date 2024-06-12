// Convite_style.js
import styled from 'styled-components';

export const SectionConvite = styled.section`
  display: flex;
  justify-content: center; 
  align-items: center;
  height: 100vh;

  .botoes {
    top: 50%;
    display: flex;
    flex-direction: column; 
    align-items: center;
  }

  button {
    margin-bottom: 20px; 
    height: 100px; 
    width: 200px;
    background-color: #f5f5f5;
    color: purple;
    font-size: 1.5rem;
    font-weight: bold;
    border: none;
    cursor: pointer;
    transition: 0.5s;
  }
`;
