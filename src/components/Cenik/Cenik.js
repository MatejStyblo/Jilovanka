import React from 'react'
import CenikNastenka from './CenikNastenka'
import style from "./Cenik.module.css"
function Cenik() {

    return (
        <div>
            <CenikNastenka/>
            <div className={style.aktivity} >
            <h1 className={style.nadpis}>
               <span className={style.first}>Sezóna</span> Léto  - červen, červenec, srpen, září
            </h1>
            <ul>
            <h3 className={style.h3}>V létě jsou preferovány týdenní pobyty od neděle do neděle. Pokud máte jiný požadavek, prosím kontaktujte majitele    <a class={style.mailto} href="tel:775112341">tel: (+420)775 112 341</a> nebo 
   <a class={style.mailto} href="mailto:info@penzionjilovanka.cz"> info@penzionjilovanka.cz</a>  </h3>
            <li>
            týden   59 500,-Kč

            </li>
            <li>
            6 nocí 52 500,-Kč

            </li>
            <li>
            5 nocí 45 000,-Kč

            </li>
            <li>
            4 noci 36 500,-Kč

            </li>
            <li>
            3 noci 28 000,-Kč

            </li>
            <li>
            2 noci 19 000,-Kč

            </li>

            </ul>


      <h1 className={style.nadpis}>
               <span className={style.first}>Sezóna</span> Zima - leden, únor, březen (topné období)
            </h1>
            <ul>
            <h3 className={style.h3}>V zimě jsou preferovány týdenní pobyty od neděle do neděle. Pokud máte jiný požadavek, prosím kontaktujte majitele   <a class={style.mailto} href="tel:775112341">tel: (+420)775 112 341</a> nebo 
            <a class={style.mailto} href="mailto:info@penzionjilovanka.cz"> info@penzionjilovanka.cz</a>  </h3>
            <li>
                            <li>týden 64 000,- Kč</li>  
  
                    </li> <li>
                    6 nocí 56 500,-Kč

                    </li> <li>
                   5 nocí 48 500,-Kč

                    </li>
                    <li>4 noci 39 500,-Kč
</li>
                    <li>3 noci 30 000,-Kč
</li>
                    <li>2 nocí 20 500,-Kč
</li>


            </ul>
            <h1 className={style.nadpis}>
               <span className={style.first}>Mimo</span> sezóna - duben, květen, říjen, listopad, prosinec (topné období)
            </h1>
            <ul>
               
        <li>
                              týden 62 000,-Kč
  
                    </li> <li>
                    6 nocí 55 000,-Kč

                    </li> <li>
                    5 nocí 47 000,-Kč

                    </li>
                   <li>
                    4 noci 38 500,-Kč

                    </li>
                    <li>3 noci 29 500,-Kč
</li>
                    <li>2 noci 20 000,-Kč
</li>

               

            </ul>


          
            <h1 className={style.nadpis}>
               <span className={style.first}>Ostatní</span> informace
            </h1>  

            <ul>                 <li>Nejsou účtovány žádné další poplatky za energie.
</li>               <li>V den příjezdu je vybírána kauce v hotovosti 5000,- vratná v den odjezdu po předaní nemovitosti.
</li>
<li>Oslavné víkendové akce - svatby, narozeniny, rozlučky se svobodou a jiné oslavy - příplatek 5000,-Kč.</li>
                          <li>V případě jiných požadavků nás neváhejte kontaktovat, pokusíme se Vám vyjít vstříc: <a class={style.mailto} href="tel:775112341">tel: (+420) 775 112 341</a>
</li>    
            


                <li>Vlastník bydlí v nemovitosti v oddělené sekci domu.</li>

                  <li>Možnost večeří po individualní domluvě.
</li>     <li>
                Zákaz vstupu domácím mazlíčkům.
</li>                                 <li>Poplatky obce dle vyhlášky. Pouze osoby 18+, 20,-Kč/osoba/noc.
</li><li>    Nekuřácký prostor.
                    
</li>       
                </ul> 

              
            </div>
            </div>
 
    )
}

export default Cenik
