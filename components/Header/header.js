import Head from "next/head";
import { HeaderLogo } from "./headerLogo";
import { HeaderSearch } from "./headerSearch";
import { useState, useRef, useEffect } from "react";
import HeaderAdvance from "./headerAdvance";
import HeaderActions from "./headerActions";

export default function Header({isHome}) {
  const [isAdvanceSearch, setIsAdvanceSearch] = useState(isHome?true:false);

  const ref = useRef(null);
  
  const handleScroll = () => {
    console.log(ref.current, window.scrollY, "ref current");
    if (window.scrollY === 0 && isHome) {
      setIsAdvanceSearch(true);
    }
    if (ref.current && window.scrollY > 20) {
      setIsAdvanceSearch(!isAdvanceSearch);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, []);

  const handleChangeSearch = () => {
    setIsAdvanceSearch(!isAdvanceSearch);
  };

  return (
    <div
      ref={ref}
    >
      {isAdvanceSearch ? (
        <HeaderAdvance handleChangeSearch={handleChangeSearch} />
      ) : (
        <div className="border-b  flex z-10 w-full fixed bg-white">
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
    </div>
  );
}
