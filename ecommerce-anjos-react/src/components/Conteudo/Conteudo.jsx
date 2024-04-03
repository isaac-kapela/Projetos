import IMG1 from "../../assets/products-image/img-4.png";
import IMG2 from "../../assets/products-image/img-6.jpeg";
import IMG3 from "../../assets/products-image/img-5.jpeg";
import IMG4 from "../../assets/products-image/img-1.jpeg";
import IMG5 from "../../assets/products-image/img-2.jpeg";
import IMG6 from "../../assets/products-image/img-3.jpeg";
import IMGHORA from "../../assets/discount-news/img.png";
import Mulher from "../../assets/category-img/img-1.jpeg";
import Homen from "../../assets/category-img/img-2.jpeg";
import * as S from "./Conteudo_style";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Conteudo() {
    return (
        <>
            <S.ConteudoContainer>
                <main>
                    <div className="content">
                        <div className="content-box">
                            <h2>
                                obtenha até 45% <br />
                                de novos produtos
                            </h2>
                            <label>
                                {" "}
                                a maior venda do ano está em <span>anjosgarimpos</span>
                            </label>
                            <br />
                            <a href="">
                                Compre agora <i className="fa-solid fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>

                    <div className="categoria" id="Categoria">
                        <div className="categoria-titulo">
                            <h2>roupas anjosgarimpos categoria</h2>
                        </div>
                        <div className="categoria-box">
                            <div className="box mulher-box">
                                <div className="box-content b2 b1">
                                    <h3>Roupas mais estilosas</h3>
                                    <label>Mulher</label>
                                    <a href="#">Veja aqui</a>
                                </div>
                                <img src={Mulher} alt="" />
                            </div>
                            <div className="box homem-box">
                                <div className="box-content ">
                                    <h3>tendências do ano</h3>
                                    <label>Homem</label>
                                    <a href="#">Veja aqui</a>
                                </div>
                                <img src={Homen} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="items-mais-comprados">
                        <div className="item-mais-comprado">
                            <div className="maisComprados-Image">
                                <img src={IMG4} alt="" />
                            </div>
                            <div className="maisComprados-body">
                                <h4>Blusa feminina</h4>
                                <div className="icons">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                </div>
                                <div className="preco">
                                    <label className="oferta">$60.99</label>
                                    <label>$49.99</label>
                                </div>
                            </div>
                        </div>

                        <div className="item-mais-comprado">
                            <div className="maisComprados-Image">
                                <img src={IMG1} alt="" />
                            </div>
                            <div className="maisComprados-body">
                                <h4>Blusa feminina</h4>
                                <div className="icons">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                </div>
                                <div className="preco">
                                    <label className="oferta">$60.99</label>
                                    <label>$49.99</label>
                                </div>
                            </div>
                        </div>
                        <div className="item-mais-comprado">
                            <div className="maisComprados-Image">
                                <img src={IMG2} alt="" />
                            </div>
                            <div className="maisComprados-body">
                                <h4>Blusa feminina</h4>
                                <div className="icons">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                </div>
                                <div className="preco">
                                    <label className="oferta">$60.99</label>
                                    <label>$49.99</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="produto-Mais-Populares" id="Produtos">
                        <div className="produto-popular-box">
                            <div className="produto-popular-titulo">
                                <h2>Produtos populares</h2>
                            </div>
                            <div className="items-mais-populares">
                                <div className="item-mais-popular">
                                    <div className="produto-popular-image">
                                        <img src={IMG6} alt="" />
                                    </div>
                                    <div className="produtos-popular-body">
                                        <h4>camisa feminina</h4>
                                        <div className="preco">
                                            <label>$49.99</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="item-mais-popular">
                                    <div className="produto-popular-image">
                                        <img src={IMG3} alt="" />
                                    </div>
                                    <div className="produtos-popular-body">
                                        <h4>camisa feminina</h4>
                                        <div className="preco">
                                            <label>$49.99</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="item-mais-popular">
                                    <div className="produto-popular-image">
                                        <img src={IMG1} alt="" />
                                    </div>
                                    <div className="produtos-popular-body">
                                        <h4>camisa feminina</h4>
                                        <div className="preco">
                                            <label>$49.99</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="item-mais-popular">
                                    <div className="produto-popular-image">
                                        <img src={IMG4} alt="" />
                                    </div>
                                    <div className="produtos-popular-body">
                                        <h4>camisa feminina</h4>
                                        <div className="preco">
                                            <label>$49.99</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="item-mais-popular">
                                    <div className="produto-popular-image">
                                        <img src={IMG5} alt="" />
                                    </div>
                                    <div className="produtos-popular-body">
                                        <h4>camisa feminina</h4>
                                        <div className="preco">
                                            <label>$49.99</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="item-mais-popular">
                                    <div className="produto-popular-image">
                                        <img src={IMG2} alt="" />
                                    </div>
                                    <div className="produtos-popular-body">
                                        <h4>camisa feminina</h4>
                                        <div className="preco">
                                            <label>$49.99</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="botao-mais-popular">
                                    <button
                                        onClick={() =>
                                            window.open(
                                                "https://api.whatsapp.com/send?phone=5511990223515&#038;text=Ol%C3%A1,%20estava%20no%20site%20e%20gostaria%20de%20obter%20mais%20informações","_blank")}>  Mais </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="novos-Descontos" id="Novos">
                        <div className="novos-Descontos-box">
                            <div className="novos-Descontos-content">
                                <p>
                                    80% Todos descontos desse <br />
                                    mês
                                </p>
                                <div className="tempo">
                                    <label>
                                        15 <span>:</span>
                                    </label>
                                    <label>
                                        12 <span>:</span>
                                    </label>
                                    <label>
                                        56<span>:</span>
                                    </label>
                                    <label>02</label>
                                </div>
                            </div>
                            <div className="desconto-iamge">
                                <img src={IMGHORA} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="nossoServicos">
                        <div className="nossoServicos-box">
                            <div className="item-nossoServicos">
                                <div className="icon-nossoServicos">
                                    <img
                                        width="50"
                                        height="50"
                                        src="https://img.icons8.com/ios/50/gender-neutral-user--v1.png"
                                        alt="gender-neutral-user--v1"
                                    />
                                </div>
                                <div className="nossoServicos-body">
                                    <h3>30/03 Avaliações dos clientes</h3>
                                    <label>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    </label>
                                </div>
                            </div>
                            <div className="item-nossoServicos">
                                <div className="icon-nossoServicos">
                                    <img
                                        width="50"
                                        height="50"
                                        src="https://img.icons8.com/ios/50/bank-card-back-side--v1.png"
                                        alt="bank-card-back-side--v1"
                                    />
                                </div>
                                <div className="nossoServicos-body">
                                    <h3>Pagamento seguro</h3>
                                    <label>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    </label>
                                </div>
                            </div>
                            <div className="item-nossoServicos">
                                <div className="icon-nossoServicos">
                                    <img
                                        width="50"
                                        height="50"
                                        src="https://img.icons8.com/ios/50/exchange-dollar.png"
                                        alt="exchange-dollar"
                                    />
                                </div>
                                <div className="nossoServicos-body">
                                    <h3>Sem garantia de devolução</h3>
                                    <label>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </S.ConteudoContainer>
        </>
    );
}
