import * as S from './Footer_style';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const EnviarEmail = () => {
    const subject = "Estou Interessado em um produto";
    const body = `Ola, Espero que esteja bem, me chamo: {Digite o seu nome}  , gostaria pedir mais informaçoes sobre esse pedido {digite o nome do produto}`;

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent('kapelajoao4@gmail.com')}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}&bcc=${encodeURIComponent(email)}`;

    window.open(gmailUrl, '_blank');
  };

  return (
    <>
      <S.FooterContainer>
        <footer>
          <div className="footer" id="Footer">
            <div className="footer-box">
              <div className="icon-footer f1">
                <h4>Contato</h4>
                <label>Rua: bla bla bla</label><br />
                <label>Cidade: São Paulo, SP</label><br />
                <label>Cep: blbla79</label><br />
                <label>Telefone: (11) 0000-0000</label><br />
              </div>
              
              <div className="icon-footer f2">
                <h4>Postagens recentes</h4>
                <label>Rua: bla bla bla</label><br />
                <label>Cidade: São Paulo, SP</label><br />
                <label>Cep: blbla79</label><br />
                <label>Telefone: (11) 0000-0000</label><br />
              </div>
              
              <div className="icon-footer f3">
                <h4>anjosgarimpos</h4>
                <label>Lorem ipsum dolor sit amet consectetur adipisi</label>
                <input id="emailInput" type="email" placeholder="Mande um email para mim" value={email} onChange={(e) => setEmail(e.target.value)} />
                <div className="social-share">
                  <button  id="sendEmailBtn" onClick={EnviarEmail}><img className='imIcon' width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/arrow.png" alt="arrow"/></button>
                  <div className="mideia-social">
                    <a href="https://www.instagram.com/anjosgarimpos/" target="_blank" rel="noopener noreferrer"><img className="imIcon" width="48" height="48" src="https://img.icons8.com/fluency/48/instagram-new.png" alt="instagram-new"/></a> 
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><img className="imIcon" width="48" height="48" src="https://img.icons8.com/color/48/facebook-new.png" alt="facebook-new"/></a>
                    <a href=""><img className="imIcon" width="50" height="50" src="https://img.icons8.com/ios-filled/50/circled-x.png" alt="circled-x"/></a>
                  </div>
                </div>
              </div>
              
            </div>
            <p className='criador'>Desenvolvido por kapela,isaac</p>
          </div>
        </footer>
      </S.FooterContainer>
    </>
  );
}
