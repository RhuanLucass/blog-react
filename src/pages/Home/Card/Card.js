
const Card = ({ content }) => {
  return (
    <>
      <div className="grid-4 card p-0">
        <div className="thumb hidden">
          <a href="" className="p-0">
            <img src={content.imageUrl} alt="" />
          </a>
        </div>
        <div className="p-2">
          <h6 className="color-gray">{content.date}</h6>
          <h6 className="uppercase color-primary">{content.category}</h6>

          <a href="" className="link-title">
            <h4>{content.title}</h4>
          </a>
          <p className="mt-1">{content.resume}</p>
          <div className="my-2">
            <a href="" className="link p-0">Ler mais</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;