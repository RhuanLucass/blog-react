import logo from 'svg/blog-logo.svg';

// Link
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header className="px-2 py-1">
        <nav>
          <div className="logo">
            <Link to="/"><img src={logo} alt="" /></Link>
          </div>
          <ul className="menu">
            <li><Link to="/sobre">Sobre</Link></li>
            <li><Link to="/contato">Contato</Link></li>
          </ul>
        </nav>

        <div className="bx"></div>

        <div className="flex-start-row">
          <div className="search">
            <form className="flex">
              <input type="text" name="search" placeholder="Buscar" />
              <button className="btn-search"></button>
            </form>
          </div>

          <div className="cta-desktop ml-3">
            <Link to="/entrar" className="btn">Login</Link>
          </div>

          <div className="cta-mobile">
            <Link to="/entrar" className="link color-primary">Login</Link>
          </div>
        </div>
      </header>

      <div className="relative">
        <div className="menu-mobile">
          <ul className="nav-mobile">
            <li><Link to="/sobre" className="link-menu-mobile">Sobre</Link></li>
            <li><Link to="/contato" className="link-menu-mobile">Contato</Link></li>
            <li className="py-2 px-2">
              <form className="flex">
                <input type="text" name="search" placeholder="Buscar" />
                <button className="btn-search"></button>
              </form>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;