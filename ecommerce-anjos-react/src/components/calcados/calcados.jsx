//Calcados --> calcados.jsx
import IMG1 from "../../assets/Calçados-IMG/img-1.png"
import IMG2 from "../../assets/Calçados-IMG/img-2.png"
import IMG3 from "../../assets/Calçados-IMG/img-7.png"
import IMG4 from "../../assets/Calçados-IMG/calcados-img-3.png"
import IMG5 from "../../assets/Calçados-IMG/calcados-img-5.png"
import * as S from "./calcados_style";

export default function calcados() {
  return (
    <> 
     <S.SectionConteudo> 

      <section>
        <div className="container-calcados">
          <div className="calcados" id="Produtos">
            <div className="calcados-box">
              
              <div className="container-item">
              {/* <div className="calcado-titulo">
                <h2>Produtos populares</h2>
              </div> */}
              <div className="items-calcados">
                <div className="item-calcado">
                  <div className="calcado-image">
                    <img src={IMG1} alt="" />
                  </div>
                  <div className="calcados-body">
                    <h4>camisa feminina</h4>
                    <div className="preco">
                      <label>$49.99</label>
                    </div>
                  </div>
                </div>
                <div className="item-calcado">
                  <div className="calcado-image">
                    <img src={IMG2} alt="" />
                  </div>
                  <div className="calcados-body">
                    <h4>camisa feminina</h4>
                    <div className="preco">
                      <label>$49.99</label>
                    </div>
                  </div>
                </div>
                <div className="item-calcado">
                  <div className="calcado-image">
                    <img src={IMG3} alt="" />
                  </div>
                  <div className="calcados-body">
                    <h4>camisa feminina</h4>
                    <div className="preco">
                      <label>$49.99</label>
                    </div>
                  </div>
                </div>
                <div className="item-calcado">
                  <div className="calcado-image">
                    <img src={IMG4} alt="" />
                  </div>
                  <div className="calcados-body">
                    <h4>camisa feminina</h4>
                    <div className="preco">
                      <label>$49.99</label>
                    </div>
                  </div>
                </div>
                <div className="item-calcado">
                  <div className="calcado-image">
                    <img src={IMG5} alt="" />
                  </div>
                  <div className="calcados-body">
                    <h4>camisa feminina</h4>
                    <div className="preco">
                      <label>$49.99</label>
                    </div>
                  </div>
                </div>
                <div className="item-calcado">
                  <div className="calcado-image">
                    <img src={IMG2} alt="" />
                  </div>
                  <div className="calcados-body">
                    <h4>camisa feminina</h4>

                    <div className="preco">
                      <label>$49.99</label>
                    </div>
                  </div>
                </div>
                </div>
                <div className="botao-mais-popular">
                  <button
                    onClick={() =>
                      window.open(
                        "https://api.whatsapp.com/send?phone=5511990223515&#038;text=Ol%C3%A1,%20estava%20no%20site%20e%20gostaria%20de%20obter%20mais%20informações",
                        "_blank"
                      )
                    }
                  >
                    {" "}
                    Mais{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </S.SectionConteudo>
    </>
  );
}
