import React, { Component } from 'react';
import PetList from './components/PetList';
import PetCard from './components/PetCard'
import PetDetails from './components/PetDetails';
import SearchBar from './components/SearchBar';
import NewPetForm from './components/NewPetForm';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { pets } from './data/pets.json';
// const pets = importData.pets;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // petList: pets,
      currentPet: undefined,
      activePets: pets,
    };
    // console.log(pets);
  }

  selectPet = (id) => {
    this.state.activePets.forEach( (pet) => {
      if (pet.id === id) {
        this.setState ({currentPet: pet})
      }
    });
  }

  hidePet = (id) => {
    const allPets = this.state.activePets
    let filtered = []
    allPets.forEach( (pet) => {
      if (pet.id != id) {
        filtered.push(pet)
      }
      else this.setState({currentPet: undefined})
    })

    this.setState ({activePets: filtered })
    
  }

  render () {
    const { currentPet } = this.state;

    return (
      <main className="App">
        <header className="app-header">
          <h1>Ada Pets</h1>
        </header>

        <section className="search-bar-wrapper">
          { /* Wave 4:  Place to add the SearchBar component */}
          <SearchBar />
        </section>

        { /* Wave 1:  Where Pet Details should appear */}
       {currentPet ? <PetDetails currentPet= {this.state.currentPet}/> : ''}


        <section className="pet-list-wrapper">
          <PetList 
            pets= {this.state.activePets} 
            /* TODO Add callback props */
            onSelectPetCallback={this.selectPet}
            onHidePetCallback={this.hidePet}
          />
        </section>


        <section className="new-pet-form-wrapper">
          { /* Wave 3:  Where NewPetForm should appear */}
        </section>


      </main>
    );
  }
}

export default App;
