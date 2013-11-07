define(["require", "exports", "knockout"], function(require, exports, __ko__) {
    var ko = __ko__;
    var OverViewTrain = (function () {
        function OverViewTrain(model) {
            var _this = this;
            this.id = model.id;
            this.dir = model.dir || "ToGardermoen";

            //Posisjon
            this.nextStation = ko.observable(model.nextStation || "LODALEN");
            this.etaNextStation = ko.observable(model.etaNextStation || 0);

            //Ankomst
            var emptyTime = "-";
            this.etaPlanned = ko.observable(model.etaPlanned || emptyTime);
            this.etaExpected = ko.observable(model.etaExpected || emptyTime);
            this.etaDelay = ko.observable(model.etaDelay || 0);

            //Avgang
            this.etdPlanned = ko.observable(model.etdPlanned || emptyTime);
            this.etdExpected = ko.observable(model.etdExpected || emptyTime);
            this.etdDelay = ko.observable(model.etdDelay || 0);

            //Spor
            this.trackPlanned = ko.observable(model.trackPlanned || "");
            this.trackActual = ko.observable(model.trackActual || "");

            //Materiell
            this.material = ko.observableArray(model.material || []);
            this.ttr = ko.observable(model.ttr || "");

            this.etaNextStationText = ko.computed(function () {
                var etaNextStation = _this.etaNextStation();
                return etaNextStation > 0 ? etaNextStation + " min" : "-";
            });

            //eta delay
            this.etaNoDelay = ko.computed(function () {
                return _this.etaDelay() == 0;
            });
            this.etaMinorDelay = ko.computed(function () {
                return _this.etaDelay() > 0 && _this.etaDelay() < 10;
            });
            this.etaMajorDelay = ko.computed(function () {
                return _this.etaDelay() > 9;
            });
            this.etaExpectedText = ko.computed(function () {
                return _this.etaDelay() == 0 ? emptyTime : _this.etaExpected();
            });
            this.etaDelayText = ko.computed(function () {
                return _this.etaDelay() == 0 ? emptyTime : _this.etaDelay() + " min";
            });

            //etd delay
            this.etdNoDelay = ko.computed(function () {
                return _this.etdDelay() == 0;
            });
            this.etdMinorDelay = ko.computed(function () {
                return _this.etdDelay() > 0 && _this.etdDelay() < 10;
            });
            this.etdMajorDelay = ko.computed(function () {
                return _this.etdDelay() > 9;
            });
            this.etdExpectedText = ko.computed(function () {
                return _this.etdDelay() == 0 ? emptyTime : _this.etdExpected();
            });
            this.etdDelayText = ko.computed(function () {
                return _this.etdDelay() == 0 ? emptyTime : _this.etdDelay() + " min";
            });

            //info
            this.directTrain = ko.computed(function () {
                return (_this.id + "").match(/^35\d\d$|^36\d\d$/) != null;
            });
            this.isToGardermoen = ko.computed(function () {
                return _this.dir == "ToGardermoen";
            });
            this.newRoute = ko.computed(function () {
                return _this.trackPlanned() != _this.trackActual();
            });
            this.trackNew = ko.computed(function () {
                return _this.trackPlanned() != _this.trackActual() ? _this.trackActual() : "";
            });

            //symbols
            this.directlyToDrammen = ko.computed(function () {
                return _this.directTrain() && !_this.isToGardermoen();
            });
            this.indirectToDrammen = ko.computed(function () {
                return !_this.directTrain() && !_this.isToGardermoen();
            });
            this.newRouteToDrammen = ko.computed(function () {
                return !_this.isToGardermoen() && _this.newRoute();
            });
            this.directlyToGardermoen = ko.computed(function () {
                return _this.directTrain() && _this.isToGardermoen();
            });
            this.indirectToGardermoen = ko.computed(function () {
                return !_this.directTrain() && _this.isToGardermoen();
            });
            this.newRouteToGardermoen = ko.computed(function () {
                return _this.isToGardermoen() && _this.newRoute();
            });
        }
        OverViewTrain.Create = function (model) {
            return new OverViewTrain(model);
        };
        return OverViewTrain;
    })();
});
//# sourceMappingURL=OverViewTrain.js.map
