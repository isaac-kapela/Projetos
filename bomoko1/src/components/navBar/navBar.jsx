

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-4 py-5 bg-gray-900 text-white">
      <h1 className="text-lg font-bold">Fondation Anciens élèves du Collège William Booth* </h1>
      <ul className="flex items-center space-x-6">
        <li className="font-bold"><a href="#">Home</a></li>
        <li><a href="#">Trabalhos</a></li>
        <li><a href="#">sobre-nos</a></li>
        <li className="px-3 py-1 bg-pink-500 text-white rounded-full"><a href="">Contato</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
