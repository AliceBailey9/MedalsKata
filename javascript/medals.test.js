function createMedalTable(medals) {
  // Parse the medal data to produce a medaltable
  // The winner gets 3 points, second place 2 points and third place 1 point
  let scores = {};

  for (let i = 0; i < medals.length; i++) {
    for (let j = 0; j < medals[i].podium.length; j++) {
      let country = medals[i].podium[j].slice(2);

      if (medals[i].podium[j][0] === "1") {
        scores.hasOwnProperty(country)
          ? (scores[country] += 3)
          : (scores[country] = 3);
      } else if (medals[i].podium[j][0] === "2") {
        scores.hasOwnProperty(country)
          ? (scores[country] += 2)
          : (scores[country] = 2);
      } else if (medals[i].podium[j][0] === "3") {
        scores.hasOwnProperty(country)
          ? (scores[country] += 1)
          : (scores[country] = 1);
      }
    }
  }
  console.log(scores);
  return scores;
}

describe("Medal Table Generator", () => {
  // Test function, please do not edit
  it("creates correct data structure ", () => {
    // Input data
    const medals = [
      {
        sport: "cycling",
        podium: ["1.China", "2.Germany", "3.ROC"],
      },
      {
        sport: "fencing",
        podium: ["1.ROC", "2.France", "3.Italy"],
      },
      {
        sport: "high jump",
        podium: ["1.Italy", "1.Qatar", "3.Belarus"],
      },
      {
        sport: "swimming",
        podium: ["1.USA", "2.France", "3.Brazil"],
      },
    ];

    // Expected output data
    const medalTable = {
      Italy: 4,
      France: 4,
      ROC: 4,
      USA: 3,
      Qatar: 3,
      China: 3,
      Germany: 2,
      Brazil: 1,
      Belarus: 1,
    };

    const actualResult = createMedalTable(medals);
    expect(actualResult).toMatchObject(medalTable);
  });
});
