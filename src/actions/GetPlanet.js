import React from 'react';
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import imgs from './../assets/img/eart.jpg'
import './../assets/css/tarjetas.css'


export const GET_PLANET = gql`
{
    allPlanets {
        edges {
          node {
            id  
            name
            population
            gravity  
          }
        }
      }
}`;

const Planet = () => {
    const { loading, error, data } = useQuery(GET_PLANET);
    if (loading) return <p className='parrafo'>Loading Planets...</p>;
    if (error) {
        return <p className='parrafo'>Error</p>;
    }
    return (
        <div className='cartas'>
            {
                data.allPlanets.edges.map(({ node }, index) =>
                (
                    <div className='tarjetaP' key={node.id}>
                        <h2 className='title-name'>Planet <strong>- {index + 1}</strong></h2>
                        <img src={imgs} alt="img profile" />
                        <div className='item'>
                            <h3>Name: </h3>&nbsp;&nbsp;
                            <h3>{node.name}</h3>
                        </div> 
                        <div className='item'>
                            <h3>Population: </h3>&nbsp;&nbsp;
                            <h3>{node.population}</h3>
                        </div> 
                        <div className='item'>
                            <h3>Gravity: </h3>&nbsp;&nbsp;
                            <h3>{node.gravity}</h3>
                        </div>  <br/><br/><br/>
                    </div>
                )
                )}
        </div>
    );
}

export default Planet