import { buttonStyles } from "./Button";
import { twMerge } from "tailwind-merge";
import {hamburgerState} from "../../store/appbar";
import {IconType} from 'react-icons'
import { IoIosArrowForward } from 'react-icons/io'
import Link from "next/link";
import { useRecoilValue } from "recoil";

export type SidebarLinkProps={
  Icon:IconType  //chatgpt this
  name:string,
  link:string
}

function SmallSidebarLinks({Icon,link,name}: SidebarLinkProps){
  return <Link href={link} className={ twMerge(buttonStyles({intent:"ghost", size:"default"}),"flex-col h-[4.2rem] w-[4.55rem] gap-2 text-[0.65rem] font-light p-3 rounded-xl ") }>
    <Icon size={22}/>
    <span>{name}</span>
  </Link>
}

function SideBar(props:{mainLinks:SidebarLinkProps[], otherLinks:SidebarLinkProps[]}) {
  const hamburger = useRecoilValue(hamburgerState);
  if (hamburger) {
    return <div>
     <aside className="hidden md:flex pt-1 flex-col items-center gap-[0.3rem] p-1">
      {
        props.mainLinks.map((e)=>{
           return <SmallSidebarLinks Icon={e.Icon} name={e.name} link={e.link}/>
        })
      }
    </aside>
    </div>
  } else {
    return <aside className="p-4 border-red-500 text-white">
      <LinksSection linkArray={props.mainLinks.filter((obj)=> obj.name !=="You" && obj.name!=="Downloads")}/>
        
      <hr className="mt-4 w-full border-zinc-600"/>

      <div className="flex flex-col mt-6">
         <Link href={"#"} className="flex gap-3 px-5 py-2 items-center rounded-xl hover:rounded-xl hover:bg-neutral-800">
         <div style={{fontSize:"1rem"}} className="text-white font-normal">You</div>
          <IoIosArrowForward size={24}/>
         </Link>
        <LinksSection linkArray={props.otherLinks}/>
      </div>
      
    </aside>   
  }
}


function LinksSection(props:{linkArray: SidebarLinkProps[]}){
  return  <div className=" flex flex-col gap-1"> {
    props.linkArray.map(({Icon,name,link})=>{
      return <div>
        <LargeSidebarLinks Icon={Icon} name={name} link={link}/>
      </div>
      })
      }
    </div> 
}


function LargeSidebarLinks({Icon,name,link}:SidebarLinkProps){
  return <Link href={link} className="px-5 py-3 flex gap-7 items-center rounded-xl hover:rounded-xl hover:bg-neutral-800">
    <Icon className="text-white" size={24} />
    <div style={{fontSize:"1rem"}} className="text-white font-normal">{name}</div>
  </Link>
}


export default SideBar;
