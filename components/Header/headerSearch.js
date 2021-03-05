 
 export const HeaderSearch =({handleChangeSearch})=>{
     return (
        <button onClick={handleChangeSearch} className=" flex flex-row mx-auto flex-wrap items-center justify-end pr-2 md:justify-between float w-full md:w-3/4 h-14 rounded-full  hover:shadow-md border border-gray-200">
        <p className="md:ml-10 hidden md:block font-light text-gray-600">
          Empieza tu Busqueda
        </p>
        <div  className="airbnb-bg rounded-full   text-white h-8 w-8 md:mr-3 flex items-center justify-center ">
          <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              display: "block",
              fill: "none",
              height: "12px",
              width: "12px",
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
      </button>
     )
 }