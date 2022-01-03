import React from 'react';
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import imgs from './../assets/gif/mask_1.gif'
import './../assets/css/tarjetas.css'


export const GET_PEOPLE = gql`
{
  allPeople{
    edges{
      node{
        id name mass height gender modified skinColor hairColor
      }
    }
  } 
}`;

const People = () => {
  const { loading, error, data } = useQuery(GET_PEOPLE);
  if (loading) return <p className='parrafo'>Loading Peoples...</p>;
  if (error) {
    return <p className='parrafo'>Error</p>;
  }
  return (
    <div className='cartas'>
      {
        data.allPeople.edges.map(({ node }, index) =>
        (
          <div className='tarjeta' key={node.id}>
            <h2 className='title-name'>Citizen <strong>- {index + 1}</strong></h2>
            <img src={imgs} alt="img profile" />
            <div className='data'>
              <div className='item'>
                <h3>Name: </h3>
                <h4>{node.name}</h4>
              </div>
              {/* <div className='item'>
                <h4>ID: </h4>&nbsp;&nbsp;
                <h4>{node.id}</h4>
              </div> */}
              <div className='item'>
                <h4>Mass: </h4>
                <h4>{node.mass}</h4>
              </div>
              <div className='item'>
                <h4>gender: </h4>
                <h4>{node.gender}</h4>
              </div>
            </div><br/><br/><br/>
          </div>
        )
        )}
    </div>
  );
}

export default People

