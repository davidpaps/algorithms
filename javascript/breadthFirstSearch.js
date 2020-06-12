"use strict";

const friends = {};
friends.me = ["tom", "dick", "harry"];
friends.tom = ["me", "dick"];
friends.dick = ["me", "tom"];
friends.harry = ["me"];

console.log(friends);

const friendHasM = (name) => name[name.length - 1] === "m";

const bfs = (name) => {
  let searchFriends = [];
  searchFriends = searchFriends.concat(friends[name]);
  const searched = [];
  while (searchFriends.length) {
    const friend = searchFriends.shift();
    if (searched.indexOf(friend) === -1) {
      if (friendHasM(friend)) {
        console.log(`${friend}'s name ends in the letter 'm'`);
        return true;
      }
      searchFriends = searchFriends.concat(friends[friend]);
      searched.push(friend);
    }
  }
  return false;
};

bfs("me");
