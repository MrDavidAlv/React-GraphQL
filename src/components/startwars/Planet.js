import React from 'react'
import Planet from '../../actions/GetPlanet' 

const Planets = () => { 
    return (
        <div className='mycontainer'>
            <h2 className='title-components'>Planets</h2>
            <Planet />
        </div>
    )
}

export default Planets
