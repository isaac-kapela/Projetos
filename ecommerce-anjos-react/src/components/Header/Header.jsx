import * as S from './Header_style';
import Logo from "../../assets/logo.png";
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <S.HeaderContainer>
        <header>
          <div className="nav-container">
            <div className="logo">
              <a href="#"><img src={Logo} alt="" /></a>
            </div>

            <div className="hamburger" onClick={handleMenuClick}>
              <div className="linha"></div>
              <div className="linha"></div>
              <div className="linha"></div>
            </div>
            <nav className={`navBar ${isMenuOpen ? 'ativa' : ''}`}>
              <ul>
                <li><a href="#" className="ativa">Home</a></li>
                <li><a href="#Categoria">Categoria</a></li>
                <li><a href="#Produtos">Produtos</a></li>
                <li><a href="#Novos">Descontos</a></li>
                <li><a href="#Footer">Contatos</a></li>
              </ul>
            </nav>
          </div>
        </header>
      </S.HeaderContainer>
    </>
  );
}
