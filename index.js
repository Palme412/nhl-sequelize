const { Eastern_Conference, Western_Conference, Goal_Leaders, Career_Goals } = require("./models");

// Career_Goals.create({
//     name: 'Steve Yzerman',
//     gamesplayed: 1514,
//     goals: 692,
//     assists: 1063,
//     points: 1755
// })
//     .then(function (newTeam) {
//         console.log("New Player Added");
//         console.log(newTeam.toJSON());
//     })
//     .catch(function (error) {
//         console.log('Error creating team', error);
//     });

Eastern_Conference.findAll()
    .then(function (EasternConferenceArray) {
        console.log(EasternConferenceArray);
        for (let i = 0; i < EasternConferenceArray.length; i++) {
            let teamConference = EasternConferenceArray[i];
            console.log("Team Conference", i);
            console.log(teamConference.toJSON());
        }
    })
    .catch(function (err) {
        console.log('ERROR');
        console.log(err);
    });