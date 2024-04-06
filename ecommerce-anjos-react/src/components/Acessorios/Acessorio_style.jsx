import styled from 'styled-components';

export const SectionConteudo = styled.section`


h2{
    text-align: center;
}
.items-acessorios {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
  
  .items-acessorios .item-acessorio {
    padding: 20px;
    margin: 90px 60px;
    height: 300px;
  }
  
  .items-acessorios .item-acessorio .acessorio-image img {
    height: 250px;
  }
  
  .items-acessorios .item-acessorio .acessorios-body {
    margin-top: 15px;
  }
  
  .items-acessorios .item-acessorio .acessorios-body h4 {
    font-weight: 400;
    margin-bottom: 5px;
    color: gray;
  }
  
  .items-acessorios .item-acessorio .acessorios-body .preco label {
    font-size: 15px;
  }
  
  .items-acessorios .item-acessorio .acessorios-body .preco label .oferta {
    display: inline-block;
    margin: 10px;
    text-decoration: line-through;
    color: gray;
  }
  
  .acessorios-box .botao-mais-popular {
    margin-top: 30px;
    text-align: center;
    margin-bottom: 50px;
    
  }
  
  .acessorios-box .botao-mais-popular button {
    display: inline-block;
    padding: 12px 25px;
    background: #dbcfcf;
    border-radius: 5px;
    border: none;
    font-size: 16px;
    color: black;
    cursor: pointer;
    transition: 0.2s all ease-in;
    letter-spacing: 1px;
  }
  
  .acessorios-box .botao-mais-popular button:hover {
    background: #f8dcdc;
  }
`;
