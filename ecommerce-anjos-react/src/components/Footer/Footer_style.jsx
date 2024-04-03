import styled from 'styled-components';

export const FooterContainer = styled.footer`
/* Estilos padrão do footer */

.footer {
    background-color: #333;
    color: #fff;
    padding: 50px 0;
}

.footer-box {
    display: flex;
    justify-content: space-around;
}

.icon-footer {
    text-align: center;
}

.icon-footer h4 {
    font-size: 20px;
    margin-bottom: 20px;
}

.icon-footer label {
    font-size: 16px;
    line-height: 1.5;
}

.icon-footer input[type="email"],
.icon-footer button {
    width: 100%;
    padding: 10px;
    margin-top: 10px; /* Ajuste conforme necessário */
    border: none;
    border-radius: 5px;
}

.mideia-social {
    margin-top: 20px;
}

.mideia-social a {
    margin-right: 10px;
    transition: transform 0.3s ease;
}

.mideia-social a:hover {
    transform: scale(1.1);
}

.imIcon  {
    width: 25px;
    color: #fff; /* Adicionando a cor do ícone */
}

/* Estilos para telas menores */

@media screen and (max-width: 768px) {
    .footer-box {
        flex-direction: column;
        align-items: center;
    }

    .icon-footer input[type="email"],
    .icon-footer button {
        width: 80%; /* Reduz a largura para melhor ajuste em telas menores */
    }
}

@media screen and (max-width: 480px) {
    .icon-footer h4 {
        font-size: 18px; /* Reduz o tamanho do título */
    }

    .icon-footer label {
        font-size: 14px; /* Reduz o tamanho do texto */
    }
}

`;