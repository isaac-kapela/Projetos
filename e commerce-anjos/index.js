//hambuguer
hamburger =  document.querySelector('.hamburger');
hamburger.onclick = function() {
    navBar = document.querySelector('.navBar');
    navBar.classList.toggle('ativa')
}       




//Back para o envio do email
document.getElementById('sendEmailBtn').addEventListener('click', function() {
    var email = document.getElementById('emailInput').value;
    var subject = "Estou Interessado em um produto";
    var body = "Ola, Espero que esteja bem, me chamo: {Digite o seu nome}  , gostaria pedir mais informaçoes sobre esse pedido {digite o nome do produto}";

    var gmailUrl = 'https://mail.google.com/mail/?view=cm&fs=1&to=' + encodeURIComponent('kapelajoao4@gmail.com') + '&su=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);

    window.open(gmailUrl, '_blank');
});
