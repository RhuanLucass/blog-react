import img01 from 'img/01.png';

const Card = () => {
  return (
    <>
      <div className="grid-4 card p-0">
        <div className="thumb hidden">
          <a href="">
            <img src={img01} alt="" />
          </a>
        </div>
        <div className="mt-2 px-2">
          <h6 className="color-gray">06 NOV 2023</h6>
          <h6 className="uppercase color-primary">tecnologia</h6>

          <h4>O que esperar do cinema para 2021?</h4>
          <p className="mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum delectus eius numquam.</p>
          <div className="my-3">
            <a href="" className="link color-primary mt-4">Ler mais</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;