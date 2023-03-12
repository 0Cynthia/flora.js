const Plant = require('../models/Plant.js');
const path = require('path');
const fs = require('fs');

const FILE_PLANTS = path.join(__dirname, '..', '/resources/plants.txt');

/**
 * the goddness Flora watches over the flowering plants...
 */
class Flora {
    // default constructor
    constructor() {
        this.plants = this.loadPlants();
    }

    /**
     * this method returns a random Plant object
     * @returns a Plant object
     */
    random() {
        const randomIndex = Math.ceil(Math.random() * this.plants.length);
        const plant = Math.ceil(Math.random() * this.plants.length);
        if (plant === undefined) {
            throw new Error('Flower Not Found');
        }
        return this.plants[randomIndex];
    }

    /**
     * this method returns a random Plant object within a specified Plant family
     * @param {String} family a plant family 
     * @returns a Plant object
     */
    randomByFamily(family) {
        // sanitize input
        family = family.toLowerCase();

        // create an array of Plant objects that belong to the specified family
        let plantsSortedByFamily = [];
        this.plants.forEach((plant) => {
            if (plant.getFamilyName() === family) {
                plantsSortedByFamily.push(plant);
            }
        });

        const randomIndex = Math.ceil(Math.random() * plantsSortedByFamily.length);
        const plant = plantsSortedByFamily[randomIndex];
        if (plant === undefined) {
            throw new Error('Flower Not Found');
        }

        return plantsSortedByFamily[randomIndex];
    }

    /**
     * this method reads plants.txt into this.plants
     * @returns an Object array of Plants
     */
    loadPlants() {
        let plantObjects = [];

        const plantsString = fs.readFileSync(FILE_PLANTS, 'utf-8');

        const plantsLinesArray = plantsString.split('\n');

        plantsLinesArray.forEach((plantLine) => {
            const [commonName, familyName] = plantLine.split(';');

            const plant = new Plant(commonName, familyName);

            plantObjects.push(plant);
        });

        return plantObjects;
    }
};

module.exports = Flora;
