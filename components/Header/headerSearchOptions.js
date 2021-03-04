export const HeaderSearchOptions = () => {
  return (
    <div className='className="flex flex-row w-3/6  mb-4   mx-auto justify-between text-lg"'>
      <div className=" mt-6 w-full  bg-gray-50 rounded-full border ">
        <div className="grid grid-cols-5 relative cursor-pointer">
          <div className="grid rounded-full border-none place-items-center h-20 shadow-2xl bg-white">
            <div className="">
              <span className="text-gray-700 font-semibold text-sm">
                Ubicacion
              </span>
              <p className="text-gray-400">A donde Viajas</p>
            </div>
          </div>
          <div className="grid rounded-full border-none place-items-center ">
            <div className="">
              <span className="text-gray-700 font-semibold text-sm">
                Llegada
              </span>
              <p className="text-gray-400">Cuando?</p>
            </div>
          </div>
          <div className="grid rounded-full border-none place-items-center ">
            <div className="">
              <span className="text-gray-700 font-semibold text-sm">
                Salida
              </span>
              <p className="text-gray-400">Cuando?</p>
            </div>
          </div>
          <div className="grid rounded-full border-none place-items-center ">
            <div className="">
              <span className="text-gray-700 font-semibold text-sm">
                Ubicacion
              </span>
              <p className="text-gray-400">A donde Viajas</p>
            </div>
          </div>
          <div className="grid rounded-full border-none ">
            <button>Buscar</button>
          </div>
        </div>
      </div>
    </div>
  );
};
