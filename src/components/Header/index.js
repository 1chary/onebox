import "./index.css"
import { FaAngleDown } from "react-icons/fa";
import React from 'react'

const Header = () => {
  return (
    <div className="header-container">
      <h1 className="one-box-heading">One Box</h1>
      <div className="alignment-container">
        <p className="workspace-heading">Tim's Workspace</p>
        <FaAngleDown className="down-icon"/>
      </div>
    </div>
  )
}

export default Header
