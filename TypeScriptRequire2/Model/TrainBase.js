define(["require", "exports", "knockout"], function(require, exports, __ko__) {
    var ko = __ko__;

    var TrainBase = (function () {
        function TrainBase(trainNumber) {
            this.trainNumber = trainNumber;
            this.platform = ko.observable("");
        }
        return TrainBase;
    })();

    
    return TrainBase;
});
//# sourceMappingURL=Trainbase.js.map
