import "./index.css"
import { SiGmail,SiSimpleanalytics  } from "react-icons/si"
import { FaHome,FaInbox  } from "react-icons/fa";
import { RiUserSearchFill } from "react-icons/ri";
import { IoMailSharp } from "react-icons/io5";
import { IoIosPaperPlane } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import React from 'react'

const SideBar = () => {
  return (
    <div className="sidebar-container">   
        <SiGmail className="icon-style"  />
        <div className="side-alignment">
            <FaHome className="icon-style"/>
            <RiUserSearchFill className="icon-style"/>
            <IoMailSharp className="icon-style"/>
            <IoIosPaperPlane className="icon-style" />
            <GiHamburgerMenu className="icon-style" />
            <FaInbox className="icon-style"/>
            <SiSimpleanalytics  className="icon-style"/>
        </div>
        <div className="name-container">
            A
        </div>
    </div>
  )
}

export default SideBar
