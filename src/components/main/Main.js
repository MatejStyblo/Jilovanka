import React from 'react'
import styles from './Main.module.css'
import interier from "./MainFotka.JPG"
 import exterier from '../album/exterier/4k2.jpg' 
 import   "../../App.css"
function Main() {
   return (
      <div className={styles.main}>
         <div
            id="carouselExampleFade"
            className="carousel slide carousel-fade"
            data-ride="carousel"
         >
            <div className="carousel-inner">
               <div className="carousel-item active">
               <div className={styles.centerText}><h1 className={styles.Chatka}>Chata Jílovanka</h1></div>
                  <img src={interier} className="d-block w-100 img image" alt="..." />
               </div>
               <div className="carousel-item">
              
                  <img src={exterier} className="d-block w-100 img image" alt="..." />
               </div>
            </div>
            <div className={styles.arrows}>

            <a
               className="carousel-control-prev"
               href="#carouselExampleFade"
               role="button"
               data-slide="prev"
               >
               <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                  ></span>
               <span className="sr-only">Previous</span>
            </a>
            <a
               className="carousel-control-next"
               href="#carouselExampleFade"
               role="button"
               data-slide="next"
               >
               <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                  ></span>
               <span className="sr-only">Next</span>
            </a>
                  </div>
         </div>
      </div>
   )
}

export default Main
