export const HeaderSearchOptions = () => {
  return (
    <div className="flex flex-row  mb-4  w-4/5 md:w-3/5 mx-auto text-sm   md:text-lg">
      <div className=" mt-6 w-full  bg-white rounded-full border  ">
        <div className="grid grid-cols-5 relative  h-search  cursor-pointer">
          <div className="grid rounded-full  place-items-center   hover:bg-gray-100">
            <div className="">
              <span className="text-gray-700 font-semibold text-sm">
                Ubicacion
              </span>
              <p className="text-gray-400">A donde Viajas</p>
            </div>
          </div>
          <div className="grid rounded-full  place-items-center   hover:bg-gray-100 ">
            <div className="">
              <span className="text-gray-700 font-semibold text-sm">
                Llegada
              </span>
              <p className="text-gray-400">Cuando?</p>
            </div>
          </div>
          <div className="grid rounded-full place-items-center   hover:bg-gray-100 ">
            <div className="">
              <span className="text-gray-700 font-semibold text-sm">
                Salida
              </span>
              <p className="text-gray-400">Cuando?</p>
            </div>
          </div>
          <div className="grid rounded-full  place-items-center   hover:bg-gray-100">
            <div className="">
              <span className="text-gray-700 font-semibold text-sm">
                Ubicacion
              </span>
              <p className="text-gray-400">A donde Viajas</p>
            </div>
          </div>
          <div className="grid rounded-full border-none  ">
            <button>Buscar</button>
          </div>
        </div>
      </div>
    </div>
  );
};
