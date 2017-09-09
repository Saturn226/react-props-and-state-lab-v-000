import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {
  render() {
  
   const pets = this.props.pets.map(pet =>{
      return <Pet key={pet.id} 
      pet={pet}
      onAdoptPet={this.props.onAdoptPet}
      isAdopted={this.props.adoptedPets.includes(pet.id)}
      />
    })
   // console.log(this.props.pets)

    return (
      <div className="ui cards" >
        <ul>
         {pets}
        </ul> 
      </div>
    );
  }
}

export default PetBrowser;