import Header from "pages/Header/Header";
import Footer from "pages/Footer/Footer";

// Pages
import Card from "pages/Home/Card/Card";

// Params
import { useParams } from "react-router-dom";

// Hooks
import { useState, useEffect } from "react";

// API
import api from "services/api";

const Search = () => {
  const { word_search } = useParams();

  // State variables
  // const [word, setWord] = useState(word_search);
  const [search, setSearch] = useState([]);

  useEffect(() => {
    if (word_search) {
      api.get(`/posts?q=${word_search}`)
        .then(response => {
          setSearch(response.data);
        })
    }
  }, [word_search]);

  return (
    <>
      <Header />
      <section className="container">

        <h3 className="text-center mb-4">Pesquisa</h3>
        <h6 className="uppercase color-primary text-center">
          {search.length}
          {
            search.length === 1 ? ' resultado' : ' resultados'
          }
        </h6>

        <h4 className="text-center">"{word_search}"</h4>

        <div className="row mt-4">
          {search != 0 ? (
            search.map((item) => {
              return <Card key={item.id} content={item} />
            })
          )
            : 
            (
              <h3 className="text-center w-100">Nenhum resultado encontrado</h3>
            )}


        </div>
      </section>
      <Footer />
    </>
  );
}

export default Search;