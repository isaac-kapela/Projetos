

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-8 z-40">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/3 text-center md:text-left mb-8 md:mb-0">
          <h2 className="text-2xl font-bold mb-4">Fulano</h2>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
            ipsum eu nunc commodo posuere et sit amet ligula.
          </p>
        </div>
        <div className="w-full md:w-2/3">
          <hr className="border-gray-700 mb-8" />
          <div className="flex flex-wrap justify-center md:justify-between">
            <div className="w-full md:w-1/3 mb-4 md:mb-0">
              <h3 className="text-lg font-bold mb-2">Contatos</h3>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a
                    href="tel:+5511951294471"
                    className="text-white hover:text-gray-200"
                  >
                    Telefone: +55 xx xxxxx-xxxx
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="mailto:fulano@gmail.com"
                    className="text-white hover:text-gray-200"
                  >
                    Email: fulano@gmail.com
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-white hover:text-gray-200">
                    Localização: xxx
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/3 mb-4 md:mb-0">
              <h3 className="text-lg font-bold mb-2">Links</h3>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a href="#" className="text-white hover:text-gray-200">
                    Home
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-white hover:text-gray-200">
                    Serviços
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-white hover:text-gray-200">
                    Contato
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/3">
              <h3 className="text-lg font-bold mb-2">Redes Sociais</h3>
              <ul className="list-unstyled flex justify-center md:justify-start">
                <li className="mx-2">
                  <a href="#" className="text-white hover:text-gray-200">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li className="mx-2">
                  <a href="#" className="text-white hover:text-gray-200">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li className="mx-2">
                  <a href="#" className="text-white hover:text-gray-200">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>  
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 py-8">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <p className="text-center md:text-left mb-4 md:mb-0 text-gray-400">
            Copyright 2023 | - todos direitos reservados.
          </p>
          <p className="text-center md:text-left text-gray-400">
            Desenvolvido por kapela isaac
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
