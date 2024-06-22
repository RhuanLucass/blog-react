import logo from 'svg/blog-logo.svg';

// Link
import { Link, useNavigate, } from 'react-router-dom';

// Hooks
import { useState } from 'react';

const Header = () => {

  // Variáveis de estado
  const [form, setForm] = useState('');

  // useNavigate para redirecionar
  const navigate = useNavigate();

  function onChange(event){
    // Desestruturação do nome e valor da propriedade input do campo
    const {value, name} = event.target;
    // Pegando o valor antigo e adicionando o caractere novo
    setForm({...form, [name]: value});
  }

  function handleSearch(event){
    event.preventDefault();

    navigate(`/buscar/${form.search}`)

  }

  

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
            <form className="flex" onSubmit={handleSearch}>
              <input type="text" name="search" onChange={onChange} placeholder="Buscar" />
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
              <form className="flex" onSubmit={handleSearch}>
                <input type="text" name="search" onChange={onChange} placeholder="Buscar" />
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