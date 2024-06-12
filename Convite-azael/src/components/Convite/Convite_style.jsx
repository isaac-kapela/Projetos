import styled from "styled-components";
import imgConvite from "../../assets/img-convite.jpg";

export const SectionConvite = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url(${imgConvite}); 
  background-size: cover; 
  background-position: center; 
  background-repeat: no-repeat; 

    a {
  text-decoration: none; 
  color: inherit; 
  list-style: none;
}


  .botoes {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  button {
    margin-bottom: 20px;
    height: 100px;
    width: 200px;
    background-color: black;
    color: purple;
    font-size: 1.3rem;
    font-weight: bold;
    border: none;
    cursor: pointer;
    transition: 0.5s;
    z-index: 2;
    padding: 1rem 2rem;
    border-radius: 50px;
    box-shadow: 18px 15px 17px 1px rgba(235, 226, 226, 0.52);
    -webkit-box-shadow: 18px 15px 17px 1px rgba(235, 226, 226, 0.52);
    -moz-box-shadow: 18px 15px 17px 1px rgba(235, 226, 226, 0.52);
    outline: 2px solid transparent; 
  }

  button:active {
    transform: scale(0.95); 
    outline-color: purple; 
    outline-width: 15px;
  }
`;
