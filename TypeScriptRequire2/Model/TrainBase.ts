import ko = require("knockout");

class TrainBase {
    constructor(public trainNumber: string) { }

    public platform = ko.observable("");
}

export = TrainBase;