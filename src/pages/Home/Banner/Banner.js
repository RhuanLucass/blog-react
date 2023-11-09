import img02 from 'img/02.png';

const Banner = () => {
  return (
    <>
      <section className="container">
        <div className="img-banner hidden">
          <img src={img02} alt="" />
        </div>
        <div className="row mt-3">
          <div className="grid-12 flex-center">
            <h6 className="color-gray text-center">06 NOV 2023</h6>
            <h6 className="uppercase color-primary text-center">tecnologia</h6>

            <h3 className="text-center">O que esperar do cinema para 2021?</h3>
            <p className="mt-1 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum delectus eius numquam.</p>
            <div className="my-3 flex-center">
              <a href="" className="link color-primary">Ler mais</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner;