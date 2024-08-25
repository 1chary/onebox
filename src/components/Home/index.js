import React, { useEffect, useState } from 'react'
import "./index.css"
import { IoMdRefresh } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import MailCard from '../MailCard';

const Home = () => {
  const [email, storeEmailData] = useState([])

  useEffect(() => {
    const getMailData = async () => {
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoiYWJoaWxhc2hjaGFyeTA0QGdtYWlsLmNvbSIsImlkIjoxMTQzLCJmaXJzdE5hbWUiOiJBYmhpbGFzaCIsImxhc3ROYW1lIjoiQ2hhcnkifSwiaWF0IjoxNzI0NDg2Mjk2LCJleHAiOjE3NTYwMjIyOTZ9.9Yvzw7aS9QQ0PLzWT2XkmvOsJVf4ZibDxAF0xn0YTck"
      const response = await fetch("https://hiring.reachinbox.xyz/api/v1/onebox/list", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      if (response.ok === true) {
        const responseData = await response.json()
        const changeCase = responseData.data.map((eachItem) => ({
          id: eachItem.id,
          body: eachItem.body,
          subject: eachItem.subject,
          fromEmail: eachItem.fromEmail,
          toEmail: eachItem.toEmail
        }))
        storeEmailData([...email,...changeCase])
      }
    }

    getMailData()
  },[])


  return (
    <div className='home-container'>
      <div className='inbox-container'>
        <h1 className='inbox-heading'>All Inbox</h1>
        <IoMdRefresh className='refresh-icon'/>
      </div>
      <p className='inboxes-selected'><span className='number-style'>25/25</span> Inboxes selected</p>
      <div className='search-container'>
        <CiSearch className='icon-style'/>
        <input type = "search" className='search-box'/>
      </div>
      {email.map((eachItem) => (
        <MailCard data = {eachItem} />
      ))}
    </div>
  )
}

export default Home
