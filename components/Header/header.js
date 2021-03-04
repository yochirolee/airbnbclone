import Head from "next/head";
import { HeaderAvancedSearch } from "./headerAvancedSearchy";
import { HeaderLogo } from "./headerLogo";
import { HeaderSearch } from "./headerSearch";
import { useState } from "react";
import { HeaderSearchOptions } from "./headerSearchOptions";
import HeaderAdvance from "./headerAdvance";
import HeaderActions from "./headerActions";

export default function Header() {
  const [isAdvanceSearch, setIsAdvanceSearch] = useState(false);

  const handleChangeSearch = () => {
    setIsAdvanceSearch(!isAdvanceSearch);
  };

  return (
    <>
      {isAdvanceSearch ? (
        <HeaderAdvance handleChangeSearch={handleChangeSearch} />
      ) : (
        <div className="border-b mb-10 fixed z-10 w-full bg-white">
          <div className="container mx-auto">
            <Head>
              <title>Create Next App</title>
            </Head>
            <nav className="h-20 grid grid-cols-4 items-center  ">
              <div className="col-span-1">
                <HeaderLogo />
              </div>

              <div className="col-span-2">
                <HeaderSearch handleChangeSearch={handleChangeSearch} />
              </div>
              <div className="flex justify-end col-span-1">
                <HeaderActions />
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
