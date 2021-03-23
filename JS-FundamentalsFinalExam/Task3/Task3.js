function solve(params) {
  params.pop();
  let n = Number(params.shift());
  let heroes = params.slice(0, n).reduce((a, b) => {
    let tokens = b.split(" ");
    let heroName = tokens[0];
    let hp = Number(tokens[1]);
    let mp = Number(tokens[2]);

    a[heroName] = {
      hp: hp,
      mp: mp,
    };

    return a;
  }, {});

  let result = "";

  for (let i = n; i < params.length; i++) {
    let tokens = params[i].split(" - ");
    let command = tokens[0];
    let heroName = tokens[1];

    if (command === "CastSpell") {
      let mpNeeded = Number(tokens[2]);
      let spellName = tokens[3];

      if (heroes[heroName].mp >= mpNeeded) {
        heroes[heroName].mp -= mpNeeded;
        result += `${heroName} has successfully cast ${spellName} and now has ${heroes[heroName].mp} MP!\n`;
      } else {
        result += `${heroName} does not have enough MP to cast ${spellName}!\n`;
      }
    } else if (command === "TakeDamage") {
      let damage = Number(tokens[2]);
      let attacker = tokens[3];

      heroes[heroName].hp -= damage;

      if (heroes[heroName].hp > 0) {
        result += `${heroName} was hit for ${damage} HP by ${attacker} and now has ${heroes[heroName].hp} HP left!\n`;
      } else {
        delete heroes[heroName];
        result += `${heroName} has been killed by ${attacker}!\n`;
      }
    } else if (command === "Recharge") {
      let amount = Number(tokens[2]);

      heroes[heroName].mp += amount;

      if (heroes[heroName].mp >= 200) {
        amount = Math.abs(heroes[heroName].mp - 200 - amount);
        heroes[heroName].mp = 200;
      }

      result += `${heroName} recharged for ${amount} MP!\n`;
    } else if (command === "Heal") {
      let amount = Number(tokens[2]);

      heroes[heroName].hp += amount;

      if (heroes[heroName].hp >= 100) {
        amount = Math.abs(heroes[heroName].hp - 100 - amount);
        heroes[heroName].hp = 100;
      }

      result += `${heroName} healed for ${amount} HP!\n`;
    }
  }

  Object.entries(heroes)
    .sort((a, b) => b[1].hp - a[1].hp || a[0].localeCompare(b[0]))
    .forEach((hero) => {
      result += `${hero[0]}\n`;
      result += ` HP: ${hero[1].hp}\n MP: ${hero[1].mp}\n`;
    });

  return result;
}

console.log(
  solve([
    "2",
    "Solmyr 85 120",
    "Kyrre 99 50",
    "Heal - Solmyr - 10",
    "Recharge - Solmyr - 50",
    "TakeDamage - Kyrre - 66 - Orc",
    "CastSpell - Kyrre - 15 - ViewEarth",
    "End",
  ])
);

console.log("_".repeat(40));

console.log(
  solve([
    "4",
    "Adela 90 150",
    "SirMullich 70 40",
    "Ivor 1 111",
    "Tyris 94 61",
    "Heal - SirMullich - 50",
    "Recharge - Adela - 100",
    "CastSpell - Tyris - 1000 - Fireball",
    "TakeDamage - Tyris - 99 - Fireball",
    "TakeDamage - Ivor - 3 - Mosquito",
    "End",
  ])
);
