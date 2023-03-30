import { Link, useLocation } from 'react-router-dom'
import profileImage from '../assets/png/samantha.png'
import sideBarStyles from './Sidebar.module.scss'


const sideBarRoutes = [
  "dashboard","expenses","wallet","summary","account","settings"
]

function SideBar() {
  const location = useLocation();
  return (
    <>
    <aside className={sideBarStyles.sideBar}>
      <div className={sideBarStyles.sideBarContent}>
      <div className={sideBarStyles.profileDetails}>
        <div className={sideBarStyles.profileImageDiv}>
          <img src={profileImage} alt='profile image'/>
          <p className={sideBarStyles.notifications}>4</p>
        </div>
      <p className={sideBarStyles.userName}>Samantha</p>
      <p className={sideBarStyles.userEmail}>samantha@gmail.com</p>
      </div>
      <nav className={sideBarStyles.sideBarNav}>
        <ul>
         {
          sideBarRoutes.map((el,index)=>
            <li className={sideBarStyles.sideBarNavItem} key={index}>
            <Link  className={
              location.pathname === `/${el}`?
              sideBarStyles.sideBarNavLinkActive :
              sideBarStyles.sideBarNavLink
            } to={`/${el}`}>{el.toUpperCase()}</Link>
          </li>
          )
         }
        </ul>
      </nav>
      </div>
    </aside>
    </>
  )
}

export default SideBar
