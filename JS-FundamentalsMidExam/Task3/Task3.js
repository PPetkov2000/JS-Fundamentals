function solve(params) {
  params.pop();
  const integers = params
    .shift()
    .split("@")
    .map(Number);
  let startIndex = 0;
  let lastPositionIndex = 0;
  let failedIntegers = 0;

  for (let param of params) {
    let tokens = param.split(" ");
    let length = Number(tokens[1]);
    startIndex += length;

    if (startIndex >= integers.length) {
      startIndex = 0;
    }

    if (integers[startIndex] === 0) {
      console.log(`Place ${startIndex} already had Valentine's day.`);
    } else if (integers[startIndex] > 2) {
      integers[startIndex] -= 2;
    } else {
      integers[startIndex] = 0;
      console.log(`Place ${startIndex} has Valentine's day.`);
    }

    lastPositionIndex = startIndex;
  }

  for (let int of integers) {
    if (int > 0) {
      failedIntegers++;
    }
  }

  console.log(`Cupid's last position was ${lastPositionIndex}.`);
  if (failedIntegers > 0) {
    console.log(`Cupid has failed ${failedIntegers} places.`);
  } else {
    console.log("Mission was successful.");
  }
}

console.log(solve(["10@10@10@2", "Jump 1", "Jump 2", "Love!"]));

console.log("____________________________________");

console.log(
  solve(["2@4@2", "Jump 2", "Jump 2", "Jump 8", "Jump 3", "Jump 1", "Love!"])
);
