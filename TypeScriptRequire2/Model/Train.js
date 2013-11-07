var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "knockout", "./Trainbase", "./Direction"], function(require, exports, __ko__, __TrainBase__, __Direction__) {
    var ko = __ko__;
    var TrainBase = __TrainBase__;
    
    var Direction = __Direction__;

    var Train = (function (_super) {
        __extends(Train, _super);
        function Train(model) {
            _super.call(this, model.trainNumber);
            this.arrivalTime = ko.observable(new Date());
            this.direction = ko.observable(Direction.South);
            this.platform(model.platform || "-");
        }
        return Train;
    })(TrainBase);

    
    return Train;
});
//# sourceMappingURL=Train.js.map
