'use strict';

const Joi = require('joi');

const crudService = require('../services/crud');

module.exports = [

    {
        method: "POST",
        path: "/pets",
        handler: (req, res) => {
            return crudService.createPet(req.payload)
                .then(newPet => res.response(newPet).code(201))
                .catch(err => res.response(err).code(500))
        },
        config: {
            validate: {
                payload: {
                    name: Joi.string().required(),
                    type: Joi.string().required(),
                    race: Joi.string().required()
                }
            }
        }
    },
    {
        method: "GET",
        path: "/pets",
        handler: (req, res) => {
            return crudService.listPets()
                .then(pets => res.response(pets))
        }
    },
    {
        method: "GET",
        path: "/pets/{id}",
        handler: (req, res) => {
            const id = req.params.id;
            return crudService.findPetById(id)
                .then(pet => res.response(pet))
                .catch(err => res.response({message: `pet ${id} not found`}).code(404))
        }
    },
    {
        method: "PUT",
        path: "/pets/{id}",
        handler: (req, res) => {}
    },
    {
        method: "DELETE",
        path: "/pets/{id}",
        handler: (req, res) => {
            const id = req.params.id;
            return crudService.deletePet(id)
                .then(success => res.response(id).code(204))
                .catch(err => {
                    console.log(err);
                    return res.response({message: `pet ${id} not found`}).code(500);
                });
        }
    }
    
]