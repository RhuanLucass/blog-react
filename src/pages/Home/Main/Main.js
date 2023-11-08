import user from 'img/profile/ny.jpg';

const Main = () => {
  return (
    <>
      <div className="bb-black py-4">
        <h6 className="color-gray">06 NOV 2023</h6>
        <h6 className="uppercase color-primary">tecnologia</h6>

        <h4>O que esperar do cinema para 2021?</h4>
        <p className="mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum delectus eius numquam.</p>
        <div className="flex-start-row mt-2">
          <div className="profile">
            <img src={user} className="profile-img" alt="" />
          </div>
          <div className="ml-1">
            <h6 className="color-primary">Násser Yousef</h6>
            <h6 className="color-gray">@nasseryousef</h6>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;