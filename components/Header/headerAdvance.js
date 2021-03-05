import Head from "next/head";
import { HeaderAvancedSearch } from "./headerAvancedSearchy";
import { HeaderLogo } from "./headerLogo";
import useOuterClick from "../../hooks/useOuterClick";
import HeaderActions from "./headerActions";
import { HeaderSearchOptions } from "./headerSearchOptions";

export default function HeaderAdvance({ handleChangeSearch }) {
  const innerRef = useOuterClick((e) => {
    handleChangeSearch();
  });

  return (
    <div
      className="border-b mb-10 fixed  z-10 w-full bg-white "
      ref={innerRef}
    >
      <div className="container mx-auto">
        <Head>
          <title>Create Next App</title>
        </Head>
        <nav className=" grid md:grid-cols-4 grid-cols-2 md:h-48 h-64   ">
          <div className="md:col-span-1 align-baseline mt-5">
            <HeaderLogo />
          </div>

          <div className="md:col-span-2 md:col-start-2 md:row-start-1 col-start-1 col-span-4 row-start-2 align-baseline md:mt-7 mt-6 ">
            <HeaderAvancedSearch />
          </div>
          <div className="flex justify-end md:col-span-1 align-baseline">
            <HeaderActions />
          </div>
          <div className="md:col-start-1 md:row-start-2 row-start-3 col-span-4">
            <HeaderSearchOptions />
          </div>
        </nav>
      </div>
    </div>
  );
}
