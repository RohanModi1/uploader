import { ActivitySquare, Cog, FileVideo, Home, LibraryBig, PiggyBank, RadioTower } from "lucide-react";
import Sidebar, { SidebarItem } from "./components/Sidebar";

import { Route, Routes } from "react-router-dom";
import {Home1} from "./components/pages/Home1";
import Upload from "./components/pages/upload";
import ContentPage from "./components/pages/ContentPage";




export default function App() {

  return (
    <>
      <div className="flex">
        <Sidebar>
          <SidebarItem icon={<Home size={20}/>} text="Home" name="/"/>
          <SidebarItem icon={<ActivitySquare size={20}/>} text="Action Page" name="/action-page"/>
          <SidebarItem icon={<LibraryBig size={20}/>} text="Brand Library" name="/brand-library"/>
          <SidebarItem icon={<FileVideo size={20}/>} text="My Content" active alert name="/my-content"/>
          <SidebarItem icon={<RadioTower size={20}/>} text="Live Campaign" name="/live-campaign"/>
          <SidebarItem icon={<PiggyBank size={20}/>} text="Earnings" name="/earnings"/>
          <hr className="my-3"/>
          <SidebarItem icon={<Cog size={20}/>} text="Settings" name="/settings"/>
        </Sidebar>
        <div>
        <Routes>
          <Route path="/" element={<Home1 />}/>
          <Route path="/my-content" element={<ContentPage />} />
          <Route path="/upload" element={<Upload />} />
        </Routes>
        </div>
        {/* <Upload /> */}
      </div>
    </>
  )
}