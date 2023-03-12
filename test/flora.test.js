const assert = require('assert');
const Flora = require('../src/utilities/Flora');

const flora = new Flora();

describe('Flora', () => {
    // happy path
    describe('random()', () => {
        it('returns a random plant object', () => {
            const plant = flora.random();

            // never nesters are seething at this code block rn
            if (plant.getCommonName() !== undefined && plant.getFamilyName !== undefined) {
                if (plant.getCommonName() !== '' && plant.getFamilyName !== '') {
                    return;
                }
            }

            assert.fail('The plant object is corrupted');
        });
    });

    // happy path
    describe('random(family)', () => {
        it('returns a random plant object within a specified flower family  ', () => {
            const plantA = flora.randomByFamily('Asteraceae');
            const plantB = flora.randomByFamily('Orchidaceae');
            const plantC = flora.randomByFamily('Rosaceae');

            if (plantA.getFamilyName() === 'Asteraceae' &&
                plantB.getFamilyName() === 'Orchidaceae' &&
                plantC.getFamilyName() === 'Rosaceae') {
                return;
            }

            assert.fail('The plant object is corrupted');
        });
    });
});