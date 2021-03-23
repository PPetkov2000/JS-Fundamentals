function solve(params) {
  let employee1People = Number(params.shift());
  let employee2People = Number(params.shift());
  let employee3People = Number(params.shift());
  let peopleCount = Number(params.shift());
  let employeesSkills = employee1People + employee2People + employee3People;
  let hours = 0;
  let counter = 0;

  while (counter < peopleCount) {
    hours++;

    if (hours % 4 === 0) {
      hours++;
    }

    counter += employeesSkills;
  }

  return `Time needed: ${hours}h.`;
}

console.log(solve(["5", "6", "4", "20"]));

console.log("____________________________________");

console.log(solve(["1", "2", "3", "45"]));

console.log("____________________________________");

console.log(solve(["3", "2", "5", "40"]));
