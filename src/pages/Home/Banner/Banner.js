
const Banner = ({content}) => {
  return (
    <>
      <section className="container">
        <div className="img-banner hidden">
          <img src={content.imageUrl} alt="" />
        </div>
        <div className="row mt-3">
          <div className="grid-12 flex-center">
            <h6 className="color-gray text-center">{content.date}</h6>
            <h6 className="uppercase color-primary text-center">{content.category}</h6>

            <a href="" className="link-title">
            <h2 className="mt-1text-center">{content.title}</h2>
            </a>
            <p className="my-2 text-center">{content.resume}</p>
            <div className="flex-center">
              <a href="" className="link p-0">Ler mais</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner;