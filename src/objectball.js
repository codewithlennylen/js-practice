function gameObject() {
  let game_object = {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5,
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1,
        },
      },
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 12,
          assists: 1,
          steals: 1,
          blocks: 2,
          slamDunks: 7,
        },
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10,
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0,
        },
        "Brendan Haywood": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12,
        },
      },
    },
  };

  return game_object;
}

function numPointsScored(player_name = "") {
  let game_object = gameObject();
  let player_points;

  for (let team in game_object) {
    let team_players = game_object[team]["players"];

    if (team_players[player_name]) {
      player_points = team_players[player_name].points;
      return player_points;
    } else {
      // ignore
    }
  }
}

function shoeSize(player_name = "") {
  let game_object = gameObject();
  let player_shoe;

  for (let team in game_object) {
    let team_players = game_object[team]["players"];

    if (team_players[player_name]) {
      player_shoe = team_players[player_name].shoe;
      return player_shoe;
    } else {
      // ignore
    }
  }
}

function teamColors(team_name = "") {
  let game_object = gameObject();

  for (let team in game_object) {
    if (game_object[team].teamName == team_name) {
      let team_color = game_object[team].colors;

      return team_color;
    }
  }
}

function teamNames() {
  let game_object = gameObject();

  let team_names = [];

  for (let team in game_object) {
    team_names.push(game_object[team].teamName);
  }

  return team_names;
}

function playerNumbers(team_name = "") {
  let game_object = gameObject();
  //   let team = game_object.team_name;
  let jersey_numbers = [];

  for (let team in game_object) {
    if (game_object[team].teamName == team_name) {
      let team_players = game_object[team].players;
      for (let player in team_players) {
        jersey_numbers.push(team_players[player].number);
      }
    }
  }

  return jersey_numbers;
}

function playerStats(player_name = "") {
  let game_object = gameObject();

  for (let team in game_object) {
    for (let player in game_object[team].players) {
      if (player == player_name) {
        return game_object[team].players[player];
      }
    }
  }
}
function bigShoeRebounds() {
  let game_object = gameObject();
  let large_shoe = 0;
  let large_shoe_rebounds = 0;
  debugger;

  for (let team in game_object) {
    debugger;
    for (let player in game_object[team].players) {
      debugger;
      player_object = game_object[team].players[player];
      let shoe_size = player_object.shoe;

      if (shoe_size > large_shoe) {
        debugger;
        large_shoe = shoe_size;
        large_shoe_rebounds = player_object.rebounds;
      }
    }
  }

  debugger;
  return large_shoe_rebounds;
}

console.log("console.log(gameObject());", gameObject());
console.log("numPointsScored", numPointsScored("Jeff Adrien")); // 10
console.log("shoeSize", shoeSize("Jeff Adrien")); // 18
console.log("teamColors", teamColors("Charlotte Hornets")); // ["Turquoise", "Purple"]
console.log("teamNames", teamNames()); // ["Brooklyn Nets", "Charlotte Hornets"]
console.log("playerNumbers", playerNumbers("Charlotte Hornets")); //
console.log("playerStats", playerStats("Jeff Adrien")); //{number: 4,shoe: 18,points: 10,rebounds: 12,assists: 1,steals: 1,blocks: 2,slamDunks: 7,},
console.log("bigShoeRebounds", bigShoeRebounds()); // Mason Plumlee	 -> 12
