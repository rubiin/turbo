import React from 'react'
import sideBarStyles from './Sidebar.module.css'
import profileImage from '../assets/png/samantha.png'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <>
    <aside className={sideBarStyles.sidebar}>
      <div className={sideBarStyles.content}>
      <div className={sideBarStyles.profileDetails}>
        <div className={sideBarStyles.profileImage}>
          <img src={profileImage} alt='profile image'/>
          <span className={sideBarStyles.notifications}>4</span>
        </div>
      </div>
      <p className={sideBarStyles.userName}>Samantha</p>
      <p className={sideBarStyles.userEmail}>samantha@gmail.com</p>
      </div>
      <nav className={sideBarStyles.sideBarNav}>
        <ul>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
        </ul>
      </nav>
    </aside>
    </>
  )
}

export default Sidebar
