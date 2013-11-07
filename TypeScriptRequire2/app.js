define(["require", "exports", "Model/Train"], function(require, exports, __Train__) {
    var Train = __Train__;

    var train = new Train({ trainNumber: "3737" });

    train.platform("4");
    console.log(train.platform());
});
//# sourceMappingURL=app.js.map
