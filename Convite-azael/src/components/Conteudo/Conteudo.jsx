
import { SectionConteudo } from "./Conteudo_Style";
import { useNavigate } from 'react-router-dom';
import Video from "../../assets/videoConvite.mp4";

function Conteudo() {
  const navigate = useNavigate();

  return (
    <SectionConteudo>
      <div>
        <video autoPlay loop muted>
          <source src={Video} type="video/mp4"/>
        </video>
        <button onClick={() => navigate('/convite')}>
          Opções
        </button>
      </div>
    </SectionConteudo>
  );
}

export default Conteudo;
