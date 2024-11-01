const users = [
  { name: "Temo", age: 25 },
  { name: "Lasha", age: 21 },
  { name: "Ana", age: 29 },
];

const findYoungUser = function (users) {
  let youngest = users[0];

  for (let user of users) {
    if (user.age < youngest.age) {
      youngest = user;
    }
  }

  return youngest.name;
};

console.log(findYoungUser(users));

////////////////////////////////////////////////////////////

const newObj = function (users) {
  let newObjects = users.map((user) => ({ ...user }));
  return newObjects;
};

console.log(newObj(users));

///////////////////////////////////////////////////////////

function roll() {
  return Math.floor(Math.random() * 6) + 1;
}

function playDice() {
  let aCount = 0;
  let bCount = 0;
  let aScore = 0;
  let bScore = 0;

  while (true) {
    aScore = roll();
    aCount++;
    console.log(`A მომხმარებლის კამათლი: ${aScore}`);

    if (aScore === 3) {
      console.log(` A მომხმარებელმა მოიგო ${aCount} ცდაში`);
      break;
    }

    bScore = roll();
    bCount++;
    console.log(`B მომხმარებლის კამათლი: ${bScore}`);

    if (bScore === 3) {
      console.log(`B მომხმარებელმა მოიგო: ${bCount} ცდაში!`);
      break;
    }
  }
}

playDice();
