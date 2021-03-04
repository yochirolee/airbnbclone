import Head from "next/head";
import { HeaderAvancedSearch } from "./headerAvancedSearchy";
import { HeaderLogo } from "./headerLogo";
import { HeaderSearch } from "./headerSearch";
import { useState } from "react";
import { HeaderSearchOptions } from "./headerSearchOptions";
import HeaderAdvance from "./headerAdvance";
import HeaderActions from "./headerActions";

export default function Header() {
  const [isAdvanceSearch, setIsAdvanceSearch] = useState(true);

  const handleChangeSearch = () => {
    setIsAdvanceSearch(!isAdvanceSearch);
  };

  return (
    <>
      {isAdvanceSearch ? (
        <HeaderAdvance handleChangeSearch={handleChangeSearch} />
      ) : (
        <div className="border-b  flex z-10 w-full  bg-white">
          <div className="container mx-auto">
            <Head>
              <title>Create Next App</title>
            </Head>
            <nav className=" grid grid-cols-4 items-center  ">
              <div className="col-span-1">
                <HeaderLogo />
              </div>

              <div className="md:col-span-2 sm:col-span-1">
                <HeaderSearch handleChangeSearch={handleChangeSearch} />
              </div>
              <div className="flex justify-end   md:col-start-4  col-span-2 md:col-span-1">
                <HeaderActions />
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
