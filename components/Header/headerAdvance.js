import Head from "next/head";
import { HeaderAvancedSearch } from "./headerAvancedSearchy";
import { HeaderLogo } from "./headerLogo";
import { HeaderSearchOptions } from "./headerSearchOptions";
import useOuterClick from "../../hooks/useOuterClick";
import HeaderActions from "./headerActions";

export default function HeaderAdvance({ handleChangeSearch }) {
  const innerRef = useOuterClick((e) => {
    handleChangeSearch();
  });

  return (
    <div className="border-b mb-10 fixed z-10 w-full bg-white" ref={innerRef}>
      <div className="container mx-auto">
        <Head>
          <title>Create Next App</title>
        </Head>
        <nav className="h-20 grid grid-cols-4 items-center  ">
          <div className="col-span-1">
            <HeaderLogo />
          </div>

          <div className="col-span-2">
            <HeaderAvancedSearch />
          </div>
          <div className="flex justify-end col-span-1">
            <HeaderActions />
          </div>
        </nav>
      </div>
      <HeaderSearchOptions />
    </div>
  );
}
