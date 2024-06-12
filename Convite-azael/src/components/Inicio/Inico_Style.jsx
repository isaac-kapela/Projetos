import styled from 'styled-components';

export const SectionInicio = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-image: url(${props => props.img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1rem 2rem;
  border-radius: 50px;
  background-color: black;
  color: white; 
  font-weight:bold;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.5);
}
`;