import { useNavigate } from 'react-router-dom';
import InicioIMG from "../../assets/img-inicio.jpeg";
import Musica from "../../assets/MusicaPantera.mp3";
import * as S from "./Inico_Style";

export default function Inicio() {
  const navigate = useNavigate();
  const audio = new Audio(Musica);

  const handleClick = () => {
    audio.play();
    navigate("/conteudo");
  };

  return (
    <S.SectionInicio img={InicioIMG}>
      <button onClick={handleClick}>
        Abrir Convite
      </button>
    </S.SectionInicio>
  );
}