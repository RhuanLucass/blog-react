import iconStar from 'svg/icon-star.svg';

// Components
import Hero from './Hero/Hero';
import Banner from './Banner/Banner';
import Card from './Card/Card';
import Main from './Main/Main';

const Home = () => {
  return (
    <>
      <Hero />

      <section className="container">
        <div className="row">
          <div className="grid-5 pt-5 pb-3 bb-black">
            <img src={iconStar} className="icon-l" alt="" />
            <h2 className="mt-1">Os melhores e mais bem votados posts do mês.</h2>
            <p className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum deleniti quas, fuga ut illo quidem.</p>
          </div>
          <div className="grid-7">
            <Main />
            <Main />
          </div>
        </div>
      </section>


      <div className="bg-section">
        <section className="container">
          <h3>Posts com mais visitas</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, optio!</p>

          <div className="row mt-4">
            <Card />
            <Card />
            <Card />
          </div>
        </section>
      </div>

    </>
  );
}

export default Home;