'use strict';

const raj   = require('raj-tools');

const uuid  = require('../../../libs/uuid');


let fakeDatabase = [
    {
        id : uuid(),
        name: "Rex",
        type: 'Dog',
        race: 'Buldog'
    },
    {
        id : uuid(),
        name: "Billy",
        type: 'Dog',
        race: 'Golden'
    },
    {
        id : uuid(),
        name: "Palmirinha",
        type: 'Cat',
        race: 'Vira-latas'
    }
];


module.exports.createPet = infos => {

    // Creation Mock
    return new Promise((resolve, reject) => {

        const data = {
            id : uuid()
        }
    
        const pet = raj.merge(infos, data);

        fakeDatabase.push(pet);
    
        resolve(pet)

    });
  
};

module.exports.updatePet = (id, infos) => {
    
    // Update mock
    return new Promise((resolve, reject) => {
        fakeDatabase.map(pet => {
            if (pet.id == id) {
                pet = raj.merge(pet, infos);
                resolve(pet);
            } else {
                reject(pet);
            }
        })

    });
};

module.exports.deletePet = id => {
    // Deletion mock
    return new Promise((resolve, reject) => {
        fakeDatabase = fakeDatabase.filter(data => data.id !== id)
        resolve(id);
    });
};

module.exports.findPetById = id => {

    // Find mock
    return new Promise((resolve, reject) => {
        const pet = fakeDatabase.filter(dog => dog.id === id);

        if (pet.length === 0) reject(pet);
        resolve(pet[0]);
    });
    
};

module.exports.listPets = () => {

    // List mock
    return new Promise((resolve, reject) => {
        resolve(fakeDatabase);
    });

};
