function solve(params) {
  let n = Number(params.shift());
  const regex = /@#+[A-Z][A-Za-z0-9]{4,}[A-Z]@#+/g;

  for (let i = 0; i < n; i++) {
    let barcode = params[i];
    let match = barcode.match(regex);

    if (match) {
      let barcodeMatch = match[0].match(/\d/g);
      let productGroup = "";

      if (barcodeMatch) {
        barcodeMatch.forEach((bc) => (productGroup += bc));
      } else {
        productGroup = "00";
      }

      console.log(`Product group: ${productGroup}`);
    } else {
      console.log("Invalid barcode");
    }
  }
}

console.log(
  solve(["3", "@#FreshFisH@# ", "@###Brea0D@### ", "@##Che46sE@## "])
);

console.log("_".repeat(40));

console.log(
  solve([
    "6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#",
  ])
);
