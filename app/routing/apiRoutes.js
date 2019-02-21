var friendData = require("../data/friends");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friendData);
    });

    app.post("/api/friends", function (req, res) {
        var user = req.body;
        var matchResult = {};
        

    
        var maxDifference = 50;
        var index = 0;
    
        for (var i = 0; i < friendData.length; i++) {
    
            var difference = 0;
    
            for (var j = 0; j < friendData[i].scores.length; j++) {
                difference += Math.abs(friendData[i].scores[j] - user.scores[j]);
            };
    
            if (difference < maxDifference) {
                index = i;
                maxDifference = difference;
            };
    
        };

        
        matchResult = friendData[index];
        friendData.push(user);
        res.json(matchResult);
        
    });
};





    