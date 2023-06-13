
'use strict';

const fs = require('fs');

fs.readFile('./problem-1.json', (err, data) => {
  if (err) throw err;

  // 1. Read the JSON in problem1.json
  let dataParsed = JSON.parse(data)

  // 2. Add height and weight to Fluffy
  dataParsed.height = "100"
  dataParsed.weight = "70"

  // 3. Fluffy name is spelled wrongly. Update it to Fluffyy
  dataParsed.name = "Fluffyy"

  // 4. List all the activities of Fluffyy’s catFriends.
  let activitiesOfFluffyysCatFriends = [];
  for(let i=0; i< dataParsed.catFriends.length; i++){
    activitiesOfFluffyysCatFriends.push(...dataParsed.catFriends[i].activities)
  }
  
  // 5. Print the catFriends names.
  let catFriendsNames = [];
  for(let i=0; i< dataParsed.catFriends.length; i++){
    catFriendsNames.push(dataParsed.catFriends[i].name)
  }

  //6. Print the total weight of catFriends
  let totalWeightOfCatFriends = 0;
  for(let i=0; i< dataParsed.catFriends.length; i++){
    totalWeightOfCatFriends = totalWeightOfCatFriends + dataParsed.catFriends[i].weight;
  }

  // 7. Print the total activities of all cats (op:6)
  let activitiesOfAllCats = [];
  for(let i=0; i< dataParsed.catFriends.length; i++){
    activitiesOfAllCats.push(...dataParsed.catFriends[i].activities)
  }
  activitiesOfAllCats.push(...dataParsed.activities)
 
  // 8. Add 2 more activities to bar & foo cats
  for(let i=0; i< dataParsed.catFriends.length; i++){
    if(dataParsed.catFriends[i].name == "bar"){
      dataParsed.catFriends[i].activities.push("swimming")
    }else if (dataParsed.catFriends[i].name == "foo"){
      dataParsed.catFriends[i].activities.push("eating")
    }
  }

  // 9.Update the fur color of bar
  for(let i=0; i< dataParsed.catFriends.length; i++){
    if(dataParsed.catFriends[i].name == "bar"){
      dataParsed.catFriends[i].furcolor = "red";
    }
  }
 
  console.log(dataParsed);
});

