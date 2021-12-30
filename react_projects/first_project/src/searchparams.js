import React, { useState,useEffect } from 'react';
import pet, { ANIMALS } from '@frontendmasters/pet';
import Usedropdown from './useDropdown';

const SearchParams = () => {
    const [location, setLocation] = useState("Seattle ,WA");
    const [breeds, setBreeds] = useState([])
    const [animal, AnimalDropdown] = Usedropdown('name of pets','dog',ANIMALS);
    const [breed, BreedDropdown, setBreed] = Usedropdown("Breed",'',breeds)
    // console.log(ANIMALS)

    useEffect(() => {
        setBreeds([]);
        setBreed("");

        pet.breeds(animal).then(({ breeds }) => {
            const breedString = breeds.map(({ name}) => name);
            setBreeds(breedString)
        },console.error)
    },[animal,setBreeds,setBreed])

    return (
        <div className="search-params">
            <form>
                <label htmlFor="location">
                    location
                    <input id="location" value={location} onChange={e => setLocation(e.target.value)} placeholder="location" />
                </label>
                {/* <label htmlFor="animal">
                    animal */}
                {/* <select
                        id="animal"
                        value=" "
                        onChange={e => setAnimal(e.target.value)}
                        onBlur={e => setAnimal(e.target.value)}>
                        <option>All</option>
                        {ANIMALS.map(animal => (
                            <option key={animal} value={animal}>{animal}</option>
                        ))}
                    </select> */}
                    <AnimalDropdown/>
                    <BreedDropdown/>
                {/* </label> */}
                <button>Submit</button>
            </form>

        </div>
    )
}
export default SearchParams;