
import Train = require("Model/Train");

var train = new Train({ trainNumber: "3737" });

train.platform("4");
console.log(train.platform());














//class Train {
//    constructor(public trainNumber: string) { }

//    isDirectTrain = () => this.trainNumber.substring(0, 2) === "35";

//    eqauls = (trainNumber: string) => trainNumber === this.trainNumber;
//}


//interface Savable {
//    apiEndpoint: string;
//    data: any;
//}

//declare var $;

//class Repository<T> {
//    post<T extends Savable>(x: T) {
//        $.post("api/" + x.apiEndpoint, x.data);
//    }
//}

//class Blog implements Savable {
//    constructor(public title: string, public text: string) { }
//    apiEndpoint = "blog";
//    data = () => {
//        return { title: this.title, text: this.text };
//    }
//}

//var repository = new Repository();
//repository.post(new Blog("learning typescript", "Super fun.."));
//repository.post({ apiEndpoint: "api/blabla", data: "asdasdf"});