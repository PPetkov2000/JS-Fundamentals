function solve(params) {
  let str = params.shift();
  let password = "";

  for (let param of params) {
    let tokens = param.split(" ");
    let command = tokens[0];

    if (command === "TakeOdd") {
      for (let i = 0; i < str.length; i++) {
        if (i % 2 !== 0) {
          password += str[i];
        }
      }

      str = password;

      console.log(str);
    } else if (command === "Cut") {
      let index = Number(tokens[1]);
      let length = Number(tokens[2]);
      let cutted = str.substr(index, length);

      str = str.replace(cutted, "");

      console.log(str);
    } else if (command === "Substitute") {
      let substring = tokens[1];
      let substitute = tokens[2];

      if (str.includes(substring)) {
        while (str.includes(substring)) {
          str = str.replace(substring, substitute);
        }
        console.log(str);
      } else {
        console.log("Nothing to replace!");
      }
    } else if (command === "Done") {
      console.log(`Your password is: ${str}`);
    }
  }
}

console.log(
  solve([
    "Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr ",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done",
  ])
);

console.log("_".repeat(40));

console.log(
  solve([
    "up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
    "TakeOdd",
    "Cut 18 2",
    "Substitute ! ***",
    "Substitute ? .!.",
    "Done",
  ])
);
