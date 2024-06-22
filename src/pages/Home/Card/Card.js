import { Link } from "react-router-dom";

const Card = ({ content }) => {
  return (
    <>
      <div className="grid-4 flex-grow-none card p-0">
        <div className="thumb hidden">
          <Link to={"/post/" + content.id} className="p-0">
            <img src={content.imageUrl} alt="" />
          </Link>
        </div>
        <div className="p-2">
          <h6 className="color-gray">{content.date}</h6>
          <h6 className="uppercase color-primary">{content.category}</h6>

          <Link to={"/post/" + content.id} className="link-title">
            <h4>{content.title}</h4>
          </Link>
          <p className="mt-1">{content.resume}</p>
          <div className="my-2">
            <Link to={"/post/" + content.id} className="link p-0">Ler mais</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;