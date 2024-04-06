import IMG1 from '../../assets/Acessorios-img/IMG-1.png'
import IMG2 from '../../assets/Acessorios-img/IMG-2.png'
import IMG3 from '../../assets/Acessorios-img/IMG-3.png'
import IMG4 from '../../assets/Acessorios-img/IMG-4.png'
import IMG5 from '../../assets/Acessorios-img/IMG-5.png'
import IMG6 from '../../assets/Acessorios-img/IMG-6.png'
import * as S from "./Acessorio_style";

export default function Acessorio() {
    return (
        <>
            <S.SectionConteudo>

                <section>
                    <div className="container-acessorios">
                        <div className="acessorio">
                            <div className="acessorios-box">

                                <div className="container-acessorio">
                                    {/* <div className="calcado-titulo">
          <h2>Produtos populares</h2>
        </div> */}
                                    <div className="items-acessorios">
                                        <div className="item-acessorio">
                                            <div className="acessorio-image">
                                                <img src={IMG1} alt="" />
                                            </div>
                                            <div className="acessorios-body">
                                                <h4>camisa feminina</h4>
                                                <div className="preco">
                                                    <label>$49.99</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item-acessorio">
                                            <div className="acessorio-image">
                                                <img src={IMG2} alt="" />
                                            </div>
                                            <div className="acessorios-body">
                                                <h4>camisa feminina</h4>
                                                <div className="preco">
                                                    <label>$49.99</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item-acessorio">
                                            <div className="acessorio-image">
                                                <img src={IMG3} alt="" />
                                            </div>
                                            <div className="acessorios-body">
                                                <h4>camisa feminina</h4>
                                                <div className="preco">
                                                    <label>$49.99</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item-acessorio">
                                            <div className="acessorio-image">
                                                <img src={IMG4} alt="" />
                                            </div>
                                            <div className="acessorios-body">
                                                <h4>camisa feminina</h4>
                                                <div className="preco">
                                                    <label>$49.99</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item-acessorio">
                                            <div className="acessorio-image">
                                                <img src={IMG5} alt="" />
                                            </div>
                                            <div className="acessorios-body">
                                                <h4>camisa feminina</h4>
                                                <div className="preco">
                                                    <label>$49.99</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item-acessorio">
                                            <div className="acessorio-image">
                                                <img src={IMG6} alt="" />
                                            </div>
                                            <div className="acessorios-body">
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
                                            Mais
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </S.SectionConteudo>
        </>
    )
}
