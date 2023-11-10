import Header from "pages/Header/Header";
import Footer from "pages/Footer/Footer";

// Images
import blog from 'svg/blog.svg';

const About = () => {
  return (
    <>
      <Header />
      <section className="container flex-center">
        <div className="row flex-start-row align-items-start flex-resp-column mt-9">
          <div className="grid-4">
            <h1 className="h0">blog<span>.</span></h1>
            <p>O blog é um projeto desenvolvido em React.js para o curso FrontPUSH.
              <br/>Clique a baixo para saber mais informações.</p>
            <a href="#" className="btn mt-2">Saber mais</a>
          </div>
          <div className="grid-1"></div>
          <div className="grid-6 m-resp-auto flex-center">
            <img className="illustration" src={blog} alt="" />
          </div>
          <div className="grid-1"></div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default About;