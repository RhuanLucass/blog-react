import Header from "pages/Header/Header";
import Footer from "pages/Footer/Footer";

// Images
import profile01 from 'img/profile/ny.jpg';

const Profile = () => {
  return (
    <>
      <Header />
      <section className="container">
        <div className="row">
          <div className="grid-6">
            <div className="flex-start-row">
              <div className="profile-big">
                <img src={profile01} alt="" className="profile-img" />
              </div>
              <div className="ml-3">
                <h3>Násser Yousef Ali</h3>
                <h6 className="color-gray">@nasseryousef</h6>
              </div>
            </div>
            <p className="mt-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. In non tempora minima.</p>
          </div>
          <div className="grid-6 flex-center flex-end-row">
            <a href="#" className="btn">Meus dados</a>
            <a href="#" className="btn ml-3">Adicionar post</a>
          </div>
        </div>
      </section>

      <section className="container">
        <h3>Adicionar um novo post</h3>
        <p className="mt-1">Preencha os campos abaixo para adicionar um novo post ao blog.</p>

        <form>
          <div className="row">
            <div className="grid-3 p-0">
              <label for="date"><h6>Data</h6></label>
              <input type="date" id="date" name="date" className="mt-1" />
            </div>
            <div className="grid-3 p-0">
              <label for="gategory"><h6>Categoria</h6></label>
              <select id="gategory" name="gategory" className="mt-1">
                <option value="tecnologia">tecnologia</option>
                <option value="games">games</option>
                <option value="cinema">cinema</option>
                <option value="fotografia">fotografia</option>
              </select>
            </div>
            <div className="grid-6 p-0">
              <label for="title"><h6>Título</h6></label>
              <input type="text" id="title" name="title" className="mt-1" />
            </div>
          </div>

          <div className="row">
            <div className="grid-9 p-0">
              <label for="resume"><h6>Resumo do post</h6></label>
              <input type="text" id="resume" name="resume" className="mt-1" />
            </div>
            <div className="grid-3 p-0">
              <label for="duration"><h6>Duração</h6></label>
              <select id="duration" name="duration" className="mt-1">
                <option value="5">5min</option>
                <option value="7">7min</option>
                <option value="10">10min</option>
                <option value="15">15min</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="grid-12 p-0">
              <label for="description"><h6>Descrição</h6></label>
              <textarea name="description" id="description" className="w-100 mt-1"></textarea>
            </div>
          </div>

          <div className="row flex-end-row">
            <button className="btn mr-2">Adicionar</button>
          </div>
        </form>
      </section>

      <Footer />
    </>
  );
}

export default Profile;