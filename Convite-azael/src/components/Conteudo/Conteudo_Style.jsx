import styled from "styled-components";
import ImgPantera from "../../assets/img-pantera.jpeg";

export const SectionConteudo = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-image: url(${ImgPantera}); 
  background-size: cover;
  background-position: center;

  video {
    position: absolute;
    z-index: 1;
    width: 80vw;
    height: 70vh;
    object-fit: cover;
    border-radius: 20px;
  }
  button {
  position: absolute;
  z-index: 2; 
  top: 65%; 
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1rem 2rem;
  border-radius: 50px;
  background-color: black;
  color: white;
  font-weight: bold;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.5);
}
`;