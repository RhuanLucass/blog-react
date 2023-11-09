// Components
import Hero from './Hero/Hero';
import Banner from './Banner/Banner';
import Card from './Card/Card';
import Main from './Main/Main';

// Images
import iconStar from 'svg/icon-star.svg';

// API
import api from 'services/api';

// Hooks
import { useState, useEffect } from 'react';


const Home = () => {

  // State Variables
  const [main, setMain] = useState([]);
  const [mostseen, setMostseen] = useState([]);
  const [banner, setBanner] = useState([]);

  // Do this when the component mounts
  useEffect(() => {
    // Main
    api.get('/posts?star=5&_limit=2&_order=desc')
    .then((response) => {
      setMain(response.data);
    });

    // Banner
    api.get('/posts?_sort=date&_order=desc&_limit=1')
    .then((response) => {
      setMain(response.data);
    });

    // Most Seen
    api.get('/posts?star=5&_limit=3')
    .then((response) => {
      setMostseen(response.data);
    });
  }, []);


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

      <Banner />
    </>
  );
}

export default Home;