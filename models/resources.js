const resources = {
    normalRooms: 50,
    oxygenRooms: 50,
    icuRooms: 20,
    flatBeds: 80,
    reclinerBeds: 100,
    ventilators: 16,
    oxygenCylinders: 110,
    normalMasks: 200,
    nonRebreatherMasks: 120,

    reserve(roomType) {
        if (roomType === 'Normal Room' && this.normalRooms > 0 && this.flatBeds >= 1 && this.normalMasks >= 2) {
            this.normalRooms--;
            this.flatBeds--;
            this.normalMasks -= 2;
            return true;
        } else if (roomType === 'Oxygen Room' && this.oxygenRooms > 0 && this.oxygenCylinders >= 2 && this.reclinerBeds >= 1 && this.nonRebreatherMasks >= 2) {
            this.oxygenRooms--;
            this.oxygenCylinders -= 2;
            this.reclinerBeds--;
            this.nonRebreatherMasks -= 2;
            return true;
        } else if (roomType === 'ICU' && this.icuRooms > 0 && this.ventilators >= 1 && this.reclinerBeds >= 1 && this.oxygenCylinders >= 1) {
            this.icuRooms--;
            this.ventilators--;
            this.reclinerBeds--;
            this.oxygenCylinders--;
            return true;
        }
        return false;
    },

    getAvailability() {
        return {
            normalRooms: this.normalRooms,
            oxygenRooms: this.oxygenRooms,
            icuRooms: this.icuRooms
        };
    }
};

module.exports = resources;
