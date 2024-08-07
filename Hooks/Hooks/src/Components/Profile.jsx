import React from 'react'
import Contact from './Contact'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Profile = () => {
    
  return (
    <div>
        <h2>Profile</h2>
        <Contact/>
    </div>
  )
}

export default Profile