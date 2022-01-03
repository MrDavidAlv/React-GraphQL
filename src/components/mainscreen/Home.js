import React from 'react'
import imagen from './../../assets/gif/start_title.gif'
import imagen1 from './../../assets/gif/naves.gif'
import imagen2 from './../../assets/gif/nave_2.gif'
import imagen3 from './../../assets/gif/war_1.gif'
import './../../assets/css/home.css'

const Home = () => {
    return (
        <div className='mycontainer'>
            <div className='imagen-home'>
                <img src={imagen} alt='imagen de Start Wars' />
            </div>
            <br />  <br />
            <div className='frag_'>
                <h3 className='parrafo'>
                    Star Wars, conocida también en español como La guerra de las galaxias,
                    es una franquicia compuesta primordialmente de una serie de películas concebidas
                    por el cineasta estadounidense George Lucas en la década de 1970, y producidas y
                    distribuidas por The Walt Disney Company a partir de 2012. Su trama describe las
                    vivencias de un grupo de personajes que habitan en una galaxia ficticia e interactúan
                    con elementos como «la Fuerza», un campo de energía metafísico y omnipresente​ que posee
                    un «lado luminoso» impulsado por la sabiduría, la nobleza y la justicia y utilizado por los
                    Jedi, y un «lado oscuro» usado por los Sith y provocado por la ira, el miedo y el odio.
                </h3>
                <img src={imagen1} className='frag_img'/>
            </div>

            <div className='frag_'>
                <img src={imagen2} className='frag_img' />
                <h3 className='parrafo'>
                    La primera película de la serie, Star Wars: Episodio IV - Una nueva esperanza (1977),
                    contó con actores como Mark Hamill, Harrison Ford, Carrie Fisher, Peter Cushing, Alec
                    Guinness, Anthony Daniels, Kenny Baker, Peter Mayhew y David Prowse. Aunque tuvo numerosas
                    dificultades durante la producción, 20th Century Fox se encargó de su distribución y fue
                    estrenada el 25 de mayo de 1977. Se convirtió en un fenómeno de la cultura popular y su
                    influencia ha sido reconocida por numerosos cineastas. Su éxito hizo que Lucas financiara
                    dos secuelas más, Star Wars: Episodio V - El Imperio contraataca (1980) y Star Wars:
                    Episode VI - Return of the Jedi (1983), que completaron la denominada «trilogía original» y a
                    las que se incorporaron actores como Billy Dee Williams, Frank Oz e Ian McDiarmid.
                </h3>
            </div>

            <div className='frag_center'>
                <img src={imagen3} className='frag_img'/>
                <h3 className='parrafo'>
                    Casi dos décadas después se estrenó Star Wars: Episodio I - La amenaza fantasma (1999), la
                    primera cinta de una nueva trilogía de precuelas, a la que siguieron Star Wars: Episodio
                    II - El ataque de los clones (2002) y Star Wars: Episodio III - La venganza de los Sith (2005).
                    Esta saga de precuelas se centra en los años previos a la anterior trilogía. Liam Neeson, Ewan
                    McGregor, Natalie Portman, Hayden Christensen, Samuel L. Jackson y Christopher Lee fueron algunos
                    de los actores que se sumaron al reparto, en el que también participaron algunos actores de la
                    trilogía original. A finales de 2012 Disney adquirió Lucasfilm, productora de las seis películas
                    anteriores,​ y anunció la realización de una tercera trilogía cinematográfica integrada por Star
                    Wars: Episodio VII - El despertar de la Fuerza (2015), Star Wars: Episodio VIII - Los últimos
                    Jedi (2017) y Star Wars: Episodio IX - El ascenso de Skywalker (2019), en la que nuevamente
                    participó parte del elenco original junto con actores como Daisy Ridley, John Boyega y Oscar Isaac.
                    El estudio es responsable también de la producción de un par de películas derivadas que abordan
                    elementos del canon y se encargan de retratar el universo extendido de la franquicia como son Rogue
                    One (2016) y Han Solo (2018).
                </h3>
            </div>
 
            <div className='parrafo'>
                <p>Fuente: </p><a href="https://es.wikipedia.org/wiki/Star_Wars" target={'_blank'}>Tomado de Wikipedia.org</a>
            </div>
        </div>
    )
}

export default Home
