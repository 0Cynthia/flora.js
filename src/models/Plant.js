/**
 * this class represents a Plant!
 */
class Plant {
    /**
     * user generated constructor
     * @param {String} commonName a common name for this Plant
     * @param {String} familyName a family name for this Plant
     */
    constructor(commonName, familyName) {
        this.commonName = commonName;
        this.familyName = familyName;
    }

    /**
     * @returns this Plants common name
     */
    getCommonName() {
        return this.commonName;
    }

    /**
     * @returns this Plants family name
     */
    getFamilyName() {
        return this.familyName;
    }
};

module.exports = Plant;
