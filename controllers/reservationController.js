const resources = require('../models/resources');

const reserveRoom = (req, res) => {
    const { roomType } = req.body;

    if (!roomType) {
        return res.status(400).json({ message: "Room type is required" });
    }

    let details = "";

    if (roomType === 'Normal Room') {
        details = "with 1 flat bed + 2 normal masks";
    } else if (roomType === 'Oxygen Room') {
        details = "with 2 oxygen cylinders + 1 recliner bed + 2 non rebreather masks";
    } else if (roomType === 'ICU') {
        details = "with 1 ventilator + 1 oxygen cylinder + 1 recliner bed";
    }

    if (resources.reserve(roomType)) {
        return res.status(200).json({
            message: `${roomType} (${details}) reserved successfully`,
            availability: resources.getAvailability()
        });
    } else {
        return res.status(400).json({
            message: `Sorry, no ${roomType} could be reserved`,
            availability: resources.getAvailability()
        });
    }
};

const getAvailability = (req, res) => {
    res.status(200).json(resources.getAvailability());
};

module.exports = {
    reserveRoom,
    getAvailability
};
