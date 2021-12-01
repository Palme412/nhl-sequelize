const { Eastern_Conference, Western_Conference, Goal_Leaders, Career_Goals } = require("./models");

Career_Goals.create({
    name: 'Steve Yzerman',
    gamesplayed: 1514,
    goals: 692,
    assists: 1063,
    points: 1755
})
    .then(function (newTeam) {
        console.log("New Player Added");
        console.log(newTeam.toJSON());
    })
    .catch(function (error) {
        console.log('Error creating team', error);
    });