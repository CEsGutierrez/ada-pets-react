import React from 'react';
import PropTypes from 'prop-types';
import PetCard from './PetCard';

import 'bootstrap/dist/css/bootstrap.min.css';

// Equivalent of Playlist

const PetList = (props) => {

// props is the json of pet information

  const pets = props.pets;

//pets is the array inside the json of all the pets, in which each pet is an object

  const petsCollection = pets.map((pet) => {
    return(
      <PetCard
        key = {pet.id}
        id = {pet.id}
        name = {pet.name}
        species = {pet.species}
        about = {pet.about}
        location = {pet.location}
      />
      )
    }
    )


  return (
    <div className="card-group">
      {petsCollection}
    </div>
  )
}

PetList.propTypes = {
  pets: PropTypes.array.isRequired,
  onSelectPet: PropTypes.func,
};

export default PetList;
