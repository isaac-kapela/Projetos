

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-4 py-5 bg-gray-900 text-white">
      <h1 className="text-lg font-bold">Fondation Anciens élèves du Collège William Booth* </h1>
      <ul className="flex items-center space-x-6">
        <li className="font-bold"><a href="#">Home</a></li>
        <li><a href="#">Trabalhos</a></li>
        <li><a href="#">sobre-nos</a></li>
        <li><a href="#"></a></li>
        <li className="px-3 py-1 bg-pink-500 text-white rounded-full"><a href="">Contato</a></li>
      </ul>
      <img className="w-8 h-8 cursor-pointer" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/menu--v3.png" alt="menu--v3" />
    </nav>
  );
}

export default Navbar;
