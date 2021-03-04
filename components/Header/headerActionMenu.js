import useOuterClick from "../../hooks/useOuterClick";

export default function HeaderActionMenu({ toggleMenuActions }) {
  const innerRef = useOuterClick((e) => {
    toggleMenuActions();
  });

  return (
    <div
      ref={innerRef}
      className="absolute bg-white flex flex-col w-64 rounded-2xl  py-2 right-1 top-2 shadow-2xl"
    >
      <div className="border-b py-2 cursor-pointer">
        <ul>
          <li className="h-8 px-4 hover:bg-gray-200">
            <a>Registrate</a>
          </li>
          <li className="h-8 px-4 hover:bg-gray-200">
            <a>Inicia Sesion</a>
          </li>
        </ul>
      </div>
      <div className=" py-2 cursor-pointer">
        <ul>
          <li className="h-8 px-4 hover:bg-gray-200">
            <a>Hospeda tu Alojamiento</a>
          </li>
          <li className="h-8 px-4 hover:bg-gray-200">
            <a>Organiza tu Experienca</a>
          </li>
          <li className="h-8 px-4 hover:bg-gray-200">
            <a>Ayuda</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
