import React from 'react'
import Nastenka from './KontaktyNastenka'
import styles from './kontakty.module.css'
import Mapa from './Mapa'

function Kontakty() {



   return (
      <div>
         <Nastenka />

         <div className={styles.info}>
            <ul >
              

    <h3>Kontakt na Nás</h3>
               <li >  <a class={styles.mailto} href="tel:775112341">Telefon: (+420)775 112 341</a></li>
               <li><a class={styles.mailto} href="mailto:info@penzionjilovanka.cz">info@penzionjilovanka.cz</a>


</li>

            </ul>
            <ul>
               <h3>Adresa</h3>
               <li>Chata JÍLOVANKA</li>
               <li>Zdobnice 5</li>
               <li>516 01 Rychnov nad Kněžnou</li>
            </ul>
            <ul>
               <h3>Majitel a provozovatel</h3>
               <li>Ondřej Stýblo</li>
               <li>IČ: 10855408</li>

            </ul>
         </div>
         <div className={styles.mapa}>
            <Mapa />
         </div>
      </div>
   )
}

export default Kontakty
