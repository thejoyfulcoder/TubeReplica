"use-client"
import YtLogo from "./Svg's/YtLogo";
import { Button } from "./Button";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { hamburgerState } from "../../store/appbar";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiVideoUploadLine } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import { HiMiniMicrophone } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
import { useState } from "react";
function AppBar() {
  const hamburger = useRecoilValue(hamburgerState);

  const setHamburgerState = useSetRecoilState(hamburgerState);
  const [expandedSearch, setsexpandedSearch] = useState(false);
  function expandSearch(){
      if(!expandedSearch){
        setsexpandedSearch(true);
      }
  }
   
  function switchSidebar() {
    setHamburgerState(!hamburger);
  }

  return (
    <div className=" flex w-full bg-black p-3 sm:gap-20">
      {expandedSearch=== false && <div id="left-nav" className=" flex flex-shrink-0 gap-2 fill-white px-2">
        <Button intent={"ghost"} size={"icon"} onClick={switchSidebar}>
          <RxHamburgerMenu size={21} />
        </Button>

        <button className="w-24 ">
          <YtLogo />
        </button>
      </div>}

      <div
        id="mid-nav"
        className="flex flex-grow items-center justify-end sm:gap-2  sm:justify-center"
      >
          <Button intent={"ghost"} size={"icon"} className="sm:hidden"><IoIosSearch size={24}/></Button>

        <div className="hidden sm:flex max-w-[560px] flex-grow justify-center">
          <input
            type="search"
            className="flex-grow rounded-l-full w-full border border-secondary-border bg-neutral-950 px-4 py-1 text-white outline-none  focus:border-blue-500"
          />
          <Button
            onClick={expandSearch}
            intent={"default"}
            size={"default"}
            className="flex-shrink-0 rounded-r-full border-y border-r border-secondary-border px-5 focus:bg-secondary-dark focus:text-inherit hover:bg-secondary-dark"
          >
            <IoIosSearch size={24} />
          </Button>
        </div>

        <Button
          type="button"
          intent={expandedSearch == true ? "ghost" : "default"}
          size={"icon"}
          className="hidden xs:flex bg-inherit  sm:bg-secondary-dark flex-shrink-0 text-white"
        >  
          <HiMiniMicrophone size={24} />
        </Button>
      </div>

      {/* right naviation */}
   {expandedSearch ===false && <div id="right-nav" className="flex flex-shrink-0 gap-2 px-2  text-white">
        <Button intent={"ghost"} size={"icon"}>
          <RiVideoUploadLine size={24} />
        </Button>
        <Button intent={"ghost"} size={"icon"}>
          <IoMdNotificationsOutline size={24} />
        </Button>
        <Button
          intent={"default"}
          size={"icon"}
          className="bg-amber-500"
        ></Button>
      </div>}
    </div>
  );
}

export default AppBar;

{
  /* <div
id="searchbar"
className="hidden w-6/12 items-center rounded-full bg-zinc-800 p-px sm:flex"
>
<input
  type="search"
  placeholder="Search"
  className="w-full rounded-l-full bg-black p-2 pl-4 text-gray-300"
/>
<div
  id="searchbtn"
  className=" flex w-20 items-center justify-center"
>
  <button className="flex h-6 w-6"></button>
</div>
</div> */
}
