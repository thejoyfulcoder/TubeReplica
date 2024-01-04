"use client";
import VideoGrid from "./Components/VideoGrid";
import SideBar from "./Components/SideBar";
import AppBar from "./Components/AppBar";
import { RecoilRoot } from "recoil";
import CategoryPills from './Components/CategoryPills';
import { categories, videos } from "@/data/home";
import { mainLinks, otherLinks } from "@/data/Sidebar";
import { useState } from "react";
export default function Home() {
  const[selectedCategory,setSelectedCategory]= useState("All");
  return (
    <RecoilRoot>
      <div id="wrapper" className="flex max-h-screen flex-col text-white">
        <AppBar />
        <div className="grid grid-cols-[auto,1fr] overflow-auto no-scrollbar">
          <SideBar mainLinks={mainLinks} otherLinks={otherLinks}/>
          <div className="overflow-y-auto feed">
            <CategoryPills categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
            <VideoGrid VIDEOS={videos}/>
          </div>
        </div>
      </div>
    </RecoilRoot>
  );
}
