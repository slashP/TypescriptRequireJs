import ko = require("knockout");
class OverViewTrain {
    id: string;
    dir: string;
    nextStation: KnockoutObservable<string>;
    etaNextStation: KnockoutObservable<number>;
    etaPlanned: KnockoutObservable<string>;
    etaExpected: KnockoutObservable<string>;
    etaDelay: KnockoutObservable<number>;
    etdPlanned: KnockoutObservable<string>;
    etdExpected: KnockoutObservable<string>;
    etdDelay: KnockoutObservable<number>;
    trackPlanned: KnockoutObservable<string>;
    trackActual: KnockoutObservable<string>;
    material: KnockoutObservable<Array<string>>;
    ttr: KnockoutObservable<string>;
    etaNextStationText: KnockoutComputed<string>;
    etaNoDelay: KnockoutComputed<boolean>;
    etaMinorDelay: KnockoutComputed<boolean>;
    etaMajorDelay: KnockoutComputed<boolean>;
    etaExpectedText: KnockoutComputed<string>;
    etaDelayText: KnockoutComputed<string>;
    etdNoDelay: KnockoutComputed<boolean>;
    etdMinorDelay: KnockoutComputed<boolean>;
    etdMajorDelay: KnockoutComputed<boolean>;
    etdExpectedText: KnockoutComputed<string>;
    etdDelayText: KnockoutComputed<string>;
    directTrain: KnockoutComputed<boolean>;
    isToGardermoen: KnockoutComputed<boolean>;
    newRoute: KnockoutComputed<boolean>;
    trackNew: KnockoutComputed<string>;
    directlyToDrammen: KnockoutComputed<boolean>;
    indirectToDrammen: KnockoutComputed<boolean>;
    newRouteToDrammen: KnockoutComputed<boolean>;
    directlyToGardermoen: KnockoutComputed<boolean>;
    indirectToGardermoen: KnockoutComputed<boolean>;
    newRouteToGardermoen: KnockoutComputed<boolean>;

    constructor(model) {
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

        this.etaNextStationText = ko.computed(() => {
            var etaNextStation = this.etaNextStation();
            return etaNextStation > 0 ? etaNextStation + " min" : "-";
        });

        //eta delay
        this.etaNoDelay = ko.computed(() =>this.etaDelay() == 0);
        this.etaMinorDelay = ko.computed(() => this.etaDelay() > 0 && this.etaDelay() < 10);
        this.etaMajorDelay = ko.computed(() => this.etaDelay() > 9);
        this.etaExpectedText = ko.computed(() => this.etaDelay() == 0 ? emptyTime : this.etaExpected());
        this.etaDelayText = ko.computed(() => this.etaDelay() == 0 ? emptyTime : this.etaDelay() + " min");

        //etd delay
        this.etdNoDelay = ko.computed(() => this.etdDelay() == 0);
        this.etdMinorDelay = ko.computed(() => this.etdDelay() > 0 && this.etdDelay() < 10);
        this.etdMajorDelay = ko.computed(() => this.etdDelay() > 9);
        this.etdExpectedText = ko.computed(() => this.etdDelay() == 0 ? emptyTime : this.etdExpected());
        this.etdDelayText = ko.computed(() => this.etdDelay() == 0 ? emptyTime : this.etdDelay() + " min");

        //info
        this.directTrain = ko.computed(() => (this.id + "").match(/^35\d\d$|^36\d\d$/) != null);
        this.isToGardermoen = ko.computed(() => this.dir == "ToGardermoen");
        this.newRoute = ko.computed(() => this.trackPlanned() != this.trackActual());
        this.trackNew = ko.computed(() => this.trackPlanned() != this.trackActual() ? this.trackActual() : "");

        //symbols
        this.directlyToDrammen = ko.computed(() => this.directTrain() && !this.isToGardermoen());
        this.indirectToDrammen = ko.computed(() => !this.directTrain() && !this.isToGardermoen());
        this.newRouteToDrammen = ko.computed(() => !this.isToGardermoen() && this.newRoute());
        this.directlyToGardermoen = ko.computed(() => this.directTrain() && this.isToGardermoen());
        this.indirectToGardermoen = ko.computed(() => !this.directTrain() && this.isToGardermoen());
        this.newRouteToGardermoen = ko.computed(() => this.isToGardermoen() && this.newRoute());
    }

    static Create(model): OverViewTrain {
        return new OverViewTrain(model);
    }
}