import { MdHomeFilled, MdOutlineExpandMore, MdSubscriptions, MdOutlineMovie, MdOutlineWatchLater } from "react-icons/md";
import {SiYoutubeshorts} from 'react-icons/si'
import {PiDownloadSimple} from 'react-icons/pi'
import {LuHistory} from 'react-icons/lu'
import {BsPersonVideo} from 'react-icons/bs'
import {RiVideoLine} from 'react-icons/ri'
import {BiLike} from 'react-icons/bi'
import { ImFilePlay } from "react-icons/im";

import { SidebarLinkProps } from "@/app/Components/SideBar";

export const mainLinks: SidebarLinkProps[]=[
    {
      Icon: MdHomeFilled,
      name: "Home",
      link:"#"
    },
    {
      Icon: SiYoutubeshorts,
      name: "Shorts",
      link:"#"
    },
    {
      Icon: MdSubscriptions,
      name: "Subscriptions",
      link:"#"
    },
    {
      Icon: ImFilePlay,
      name:"You",
      link:"#"
    },
    {
      Icon:PiDownloadSimple,
      name:"Downloads",
      link:"#"
    }
]

export const otherLinks: SidebarLinkProps[]=[
   {
     Icon: BsPersonVideo,
     name:"Your channel",
     link:"#"
   },
   {
     Icon: LuHistory,
     name:"History",
     link:"#"
   },
   {
     Icon: RiVideoLine,
     name:"Your videos",
     link:"#"
   },
   {
     Icon: MdOutlineMovie,
     name:"Your movies",
     link:"#"
   },
   {
     Icon: MdOutlineWatchLater,
     name:"Watch later",
     link:"#"
   },
   {
     Icon: PiDownloadSimple,
     name:"Downloads",
     link:"#"
   },
   {
     Icon: BiLike,
     name:"Liked videos",
     link:"#"
   }
]
