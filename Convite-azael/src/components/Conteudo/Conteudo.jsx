
import { useNavigate } from 'react-router-dom';
import Video from "../../assets/videoConvite.mp4";
import * as S from "./Conteudo_Style";

function Conteudo() {
  const navigate = useNavigate();

  return (
    <S.SectionConteudo>
      <video autoPlay loop muted>
        <source src={Video} type="video/mp4"/>
      </video>

      <button onClick={() => navigate('/convite')}>
        Opções
      </button>
    </S.SectionConteudo>
  );
}

export default Conteudo;