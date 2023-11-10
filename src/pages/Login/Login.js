import Header from "pages/Header/Header";
import Footer from "pages/Footer/Footer";

// Images
import logo2 from 'svg/blog-logo2.svg';

const Login = () => {
  return (
    <>
      <Header />
      <section className="container">
        <div className="row flex-center">
          <div className="grid-4  flex-center">
            <div className="flex-center">
              <img src={logo2} className="icon-l" alt="" />
            </div>

            <h6 className="text-center">Olá, faça o login para continuar.</h6>
            <form>
              <input className="mt-3" type="text" name="user" placeholder="Digite seu usuário" />
              <input className="mt-2" type="password" name="password" id="" placeholder="Digite sua senha" />

              <div className="card-danger p-2 my-1">
                <h6 className="h7 color-red">Olá, isso é uma mensagem de erro</h6>
              </div>

              <div className="card-success p-2 my-1">
                <h6 className="h7 color-green">Olá, isso é uma mensagem de erro</h6>
              </div>

              <div className="card-warning p-2 my-1">
                <h6 className="h7 color-yellow">Olá, isso é uma mensagem de erro</h6>
              </div>

              <div className="card-info p-2 my-1">
                <h6 className="h7 color-primary">Olá, isso é uma mensagem de erro</h6>
              </div>

              <button className="btn w-100 mt-2">Entrar</button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Login;