

const Main = () => {
  return (
    <div>
      <section className="w-80 mx-auto my-80">
        <div className="text-center">
          <h1 className="text-4xl text-purple-900">titititututlolololo</h1>
          <div className="bg-pink-500 h-1 w-24 mx-auto my-4"></div>
        </div>
        <div className="flex flex-wrap justify-between">
          <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <img src="/assets/img batu.jpg" alt="" className="w-full" />
            <h4 className="text-2xl text-purple-900 mt-4">titulo titulo</h4>
            <p className="text-gray-700 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, voluptatem laboriosam! Sit, dolores, voluptate doloribus distinctio eveniet provident.</p>
            <a href="" className="block mt-4 py-2 px-4 bg-pink-500 text-white rounded-lg text-center">continue lendo</a>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <img src="/assets/batu batu.jpg" alt="" className="w-full" />
            <h4 className="text-2xl text-purple-900 mt-4">titulo titulo</h4>
            <p className="text-gray-700 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, voluptatem laboriosam! Sit, dolores, voluptate doloribus distinctio eveniet provident.</p>
            <a href="" className="block mt-4 py-2 px-4 bg-pink-500 text-white rounded-lg text-center">continue lendo</a>
          </div>
        </div>
      </section>
      <section className="w-full h-screen bg-cover bg-center flex items-center sobre">
        <div className="w-60 p-8 text-white flex flex-col items-center sobre-content">
          <h1 className="text-7xl my-10">Nossos trabalhos bla bla</h1>
          <div className="bg-white h-1 w-20 mb-10"></div>
          <p className="text-gray-300 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum expedita eaque blanditiis mollitia. Earum consequatur iure nam, repellendus porro reiciendiseaque optio adipisci impedit!</p>
          <a href="" className="mt-8 bg-pink-500 text-white px-6 py-3 rounded-lg">Veja mais</a>
        </div>
      </section>
      <section className="w-full tours">
        <div className="flex flex-wrap">
          <div className="w-full sm:w-1/2 p-8 content-coluna">
            <h1 className="text-9xl text-purple-900">titulo titulo sla nkmnobn smk</h1>
            <div className="bg-pink-500 h-1 w-20 my-10"></div>
            <p className="text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur cum odit magni. Totam est quibusdam neque voluptatem, veniam nesciunt quidem quae id magnam amet quo sit facere laboriosam mollitia dolorem que.</p>
            <a href="" className="mt-8 bg-pink-500 text-white px-6 py-3 rounded-lg">Veja mais</a>
          </div>
          <div className="w-full sm:w-1/2 p-8 img-coluna">
            <div className="grid grid-cols-2 gap-4">
              <img src="./assets/img3.png" alt="" className="w-full h-full" />
              <img src="./assets/img4.png" alt="" className="w-full h-full" />
              <img src="./assets/img5.png" alt="" className="w-full h-full" />
              <img src="./assets/img6.png" alt="" className="w-full h-full" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Main;
