import React from 'react'
import { useState } from 'react'
import styles from './navbar.module.css'
import { Link } from 'react-router-dom'
 import './navbar.css'
function Navbar() {
   const [sidebar, setSidebar] = useState(false)

   const showSidebar = () => setSidebar(!sidebar)

   return (
      <nav className="navbar fixed-top">
            <div className={styles.forMobileDiv}><h1 className={styles.forMobile}>Chata Jílovanka</h1></div>
         <div className={styles.menuIcon}>
            <i
               className={sidebar ? 'fas fa-times' : 'fas fa-bars'}
               onClick={showSidebar}
            ></i>
         </div>
    {/*      <div className={styles.brand}>
            <img src="../../logo.svg" alt="logo" className={styles.logo} />
         </div> */}
         <ul className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className={styles.list} onClick={showSidebar}>
            <li className="nav-item"> <Link className="nav-link link" to="/">
                <div className={styles.brand}>
            <img src="../../chata.svg" alt="logo" className={styles.logo} />
                  
         </div></Link></li>
               <li className="nav-item">
                  <Link className="nav-link link" to="/">
                     ÚVOD
                  </Link>
               </li>
               <li className="nav-item">
                  <Link className="nav-link link" to="/aktivity">
                     AKTIVITY
                  </Link>
               </li>
               <li className="nav-item">
                  <Link className="nav-link link" to="/galerie">
                     FOTOGALERIE
                  </Link>
               </li>
               <li className="nav-item">
                  <Link className="link nav-link" to="/cenik">
                     CENÍK
                  </Link>
               </li>
                <li className="nav-item">
                  <Link className="link nav-link" to="/obsazenost">
                     OBSAZENOST
                  </Link>
               </li> 
               <li className="nav-item">
                  <Link className="link nav-link" to="/vybaveni">
                     VYBAVENÍ
                  </Link>
               </li>
               <li className="nav-item">
                  <Link className="nav-link link" to="/kontakt">
                     KONTAKT
                  </Link>
               </li>
            </ul>
         </ul>
      </nav>
   )
}

export default Navbar
