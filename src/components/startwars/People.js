import React from 'react'  
import Peoples  from '../../actions/GetPeople'  

const People = () => {
  return (
    <div className='mycontainer'> 
      <h2 className='title-components'>Peoples</h2>
      <Peoples />
    </div>
  );
}

export default People
