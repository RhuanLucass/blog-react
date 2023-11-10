import Header from "pages/Header/Header";
import Footer from "pages/Footer/Footer";

// Images
import iconFacebook from 'svg/icon-facebook.svg';
import iconInstagram from 'svg/icon-instagram.svg';
import iconYoutube from 'svg/icon-youtube.svg';
import iconTwitter from 'svg/icon-twitter.svg';

const Contact = () => {
  return (
    <>
      <Header />

      <section className="container">
        <div className="row">
          <div className="grid-6">
            <h3>Entre em contato</h3>
            <p>Aqui você vai conseguir mais informações sobre o projeto Blog utilizando React.js.</p>
            <form>
              <input type="text" name="name" className="mt-2" placeholder="Nome" />
              <input type="email" name="email" className="mt-2" placeholder="E-mail" />
              <textarea name="content" className="mt-2" rows="8" placeholder="Mensagem"></textarea>
              <button className="btn mt-2">Enviar</button>
            </form>
          </div>
          <div className="grid-1 disappear"></div>
          <div className="grid-5">
            <h5 className="mt-4">Algumas informações</h5>

            <h6 className="color-primary mt-4">Info.</h6>
            <p>Projeto blog em React.js do curso FrontPUSH.</p>

            <h6 className="color-primary mt-4">Endereço</h6>
            <p>Brasília, DF.</p>

            <h6 className="color-primary mt-4">E-mail</h6>
            <p>contact@blog.com</p>

            <h6 className="color-primary mt-4">Redes sociais</h6>
            <div className="mt-2 w-100">
              <a href="">
                <img src={iconFacebook} className="icon-s m-1" alt="" />
              </a>
              <a href="">
                <img src={iconInstagram} className="icon-s m-1" alt="" />
              </a>
              <a href="">
                <img src={iconYoutube} className="icon-s m-1" alt="" />
              </a>
              <a href="">
                <img src={iconTwitter} className="icon-s m-1" alt="" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Contact;