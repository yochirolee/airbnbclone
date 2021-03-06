import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export const HeaderSearchOptions = () => {
  const [value, setValue] = useState("");
  const router = useRouter();

  const active = true;

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push({
      pathname: "/",
      query: { country: value },
    });
  };

  return (
    <div className="flex flex-row  mb-4  w-full md:w-4/6 mx-auto text-sm   md:text-lg">
      <div className=" mt-6 w-full  bg-white rounded-full border  ">
        {" "}
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-11  relative  h-search  cursor-pointer">
            <div
              className={
                active
                  ? "grid rounded-full  place-items-center col-span-3 border-white shadow-2xl"
                  : "grid rounded-full  place-items-center   hover:bg-gray-100"
              }
            >
              <div className="flex flex-col pl-6">
                <span className="text-gray-700 font-semibold text-sm w-64">
                  Ubicacion
                </span>
                <input
                  onChange={(e) => {
                    setValue(e.currentTarget.value);
                  }}
                  className="text-gray-500 w-40 focus:outline-none"
                  placeholder="A donde Viajas"
                ></input>
              </div>
            </div>
            <div className="grid rounded-full col-span-2 place-items-center   hover:bg-gray-100 ">
              <div className="">
                <span className="text-gray-700 font-semibold text-sm">
                  Llegada
                </span>
                <p className="text-gray-500">Cuando?</p>
              </div>
            </div>
            <div className="grid rounded-full col-span-2 place-items-center   hover:bg-gray-100 ">
              <div className="">
                <span className="text-gray-700 font-semibold text-sm">
                  Salida
                </span>
                <p className="text-gray-500">Cuando?</p>
              </div>
            </div>
            <div className="grid rounded-full col-span-2  place-items-center   hover:bg-gray-100">
              <div className="">
                <span className="text-gray-700 font-semibold text-sm">
                  Huespedes
                </span>
                <p className="text-gray-500 ">Cuantos?</p>
              </div>
            </div>

            <div className="grid  border-none place-items-center col-span-2   ">
              <button
                onClick={handleSubmit}
                className="rounded-full airbnb-bg h-10 w-10 md:h-3/4 md:w-3/4  text-white relative "
              >
                <div className="absolute right-3 md:left-6 md:mt-1 ">
                  <svg
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      display: "block",
                      fill: "none",
                      height: "16px",
                      width: "16px",
                      stroke: "currentColor",
                      strokeWidth: "5.333333333333333",
                      overflow: "visible",
                    }}
                    aria-hidden="true"
                    role="presentation"
                    focusable="false"
                  >
                    <g fill="none">
                      <path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"></path>
                    </g>
                  </svg>
                </div>
                <p className="pl-6 invisible lg:visible">Buscar</p>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
