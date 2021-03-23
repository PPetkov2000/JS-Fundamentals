function solve(params) {
  params.pop();
  const initialList = params.shift().split("!");

  for (let param of params) {
    let tokens = param.split(" ");
    let command = tokens[0];

    if (command === "Urgent") {
      let item = tokens[1];

      if (!initialList.includes(item)) {
        initialList.unshift(item);
      }
    } else if (command === "Unnecessary") {
      let item = tokens[1];
      let index = initialList.indexOf(item);

      if (initialList.includes(item)) {
        initialList.splice(index, 1);
      }
    } else if (command === "Correct") {
      let oldItem = tokens[1];
      let newItem = tokens[2];
      let oldItemIndex = initialList.indexOf(oldItem);

      if (initialList.includes(oldItem)) {
        initialList[oldItemIndex] = newItem;
      }
    } else if (command === "Rearrange") {
      let item = tokens[1];
      let index = initialList.indexOf(item);

      if (initialList.includes(item)) {
        let removed = initialList.splice(index, 1);
        initialList.push(removed);
      }
    }
  }

  console.log(initialList.join(", "));
}

console.log(
  solve([
    "Tomatoes!Potatoes!Bread",
    "Unnecessary Milk",
    "Urgent Tomatoes",
    "Go Shopping!"
  ])
);

console.log("____________________________________");

console.log(
  solve([
    "Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes ",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"
  ])
);
