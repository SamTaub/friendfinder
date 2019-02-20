var friendData = require("../data/friends");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friendData);
    });

    app.post("/api/friends", function (req, res) {
        var userInput = req.body;
        var matchResult = {};
        

    
        var maxDifference = 100;
        var friendIndex = 0;
    
        for (i = 0; i < friendData.length; i++) {
    
            var difference = 0;
    
            for (j = 0; j < friendData[i].scores.length; j++) {
                var newDifference = Math.abs(friendData[i].scores[j] - userInput.scores[j]);
                difference += newDifference;
            };
    
            if (difference < maxDifference) {
                friendIndex = i;
                maxDifferences = difference;
            };
    
        };
        matchResult = friendData[friendIndex];

        res.json(matchResult);
        console.log(matchResult);
    });
};





    