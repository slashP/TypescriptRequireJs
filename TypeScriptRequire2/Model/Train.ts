import ko = require("knockout");
import TrainBase = require("./Trainbase");
import Dto = require("./Dto");
import Direction = require("./Direction");

class Train extends TrainBase {
    constructor(model: Dto.OverviewTrain) {
        super(model.trainNumber);
        this.platform(model.platform || "-");
    }

    arrivalTime = ko.observable(new Date());
    direction = ko.observable(Direction.South);
}

export = Train;