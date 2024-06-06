import * as S from './Header_style';
import Logo from "../../assets/logo.png";
import { useState } from 'react';
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Home from '../../pages/Home';
import Calcados from '../../pages/calcados';
import Feminina from '../../pages/RoupasFemininas';
import Acessorios from '../../pages/Acessorios';

export default function Header() {
  const [AbrirMenu, setAbrirMenu] = useState(false);

  const handleMenuClick = () => {
    setAbrirMenu(!AbrirMenu);
  };
  return (
    <BrowserRouter> 
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

            <nav className={`navBar ${AbrirMenu ? 'ativa' : ''}`}>
              <ul>
                <li><Link to="/" className="ativa">Home</Link></li>
                <li><Link to="/calcados">Calçados</Link></li>
                <li><Link to="/roupas-femininas">Roupas Femininas</Link></li>
                <li><Link to="/Acessorios">Acessórios</Link></li>
                <li><a href="#Footer">Contatos</a></li>
              </ul>
            </nav>
          </div>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calcados" element={<Calcados />} />
          <Route path="/roupas-femininas" element={<Feminina />} />
          <Route path="/Acessorios" element={<Acessorios />} />
        </Routes>

      </S.HeaderContainer>
    </BrowserRouter>
  );
}
