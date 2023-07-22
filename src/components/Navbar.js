import "../styles/nav.css";

function Navbar() {
  return (
    <div className="py-4">
      <nav className="flex justify-center space-x-4 border-double border-2 border-white rounded-md py-4">
        <a
          href="/"
          className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900 text-white text-lg"
        >
          <h1>Ana Sayfa</h1>
        </a>
        <a
          href="/hot"
          className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900 text-white text-lg"
        >
          <h1>Sıcak İçecekler</h1> 
        </a>
        <a
          href="/cold"
          className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900 text-white text-lg"
        >
          <h1>Soğuk İçecekler</h1> 
        </a>
        <a
          href="/dessert"
          className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900 text-white text-lg"
        >
          <h1>Tatlılar</h1>
        </a>
      </nav>
    </div>
  );
}

export default Navbar;
