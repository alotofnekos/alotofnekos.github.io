document.getElementById("evsAtk").addEventListener("input", function() {
  var evsAtkElement = document.getElementById("evsAtk");
  var evsAtk = parseInt(evsAtkElement.value);
  if (evsAtk > 252) {
    evsAtk = 252;
    evsAtkElement.value = evsAtk; // Update the input field with the clamped value
  } else if (evsAtk < 0) {
    evsAtk = 0;
    evsAtkElement.value = evsAtk; // Update the input field with the clamped value
  }
});

document.getElementById("battleForm").addEventListener("submit", function(event) {
  event.preventDefault();
  // Retrieve form values
  var baseDef = parseInt(document.getElementById("baseDef").value);
  var evsDef = 252;
  var natureElement = document.querySelector('input[name="nature"]:checked');
  var nature = parseFloat(natureElement.value);
  var baseHP = parseInt(document.getElementById("baseHP").value);
  var evsHP = 252;
  var baseAtk = parseInt(document.getElementById("baseAtk").value);
  var evsAtk = parseInt(document.getElementById("evsAtk").value);
  var natureAtkElement = document.querySelector('input[name="natureAtk"]:checked');
  var natureAtk = parseFloat(natureAtkElement.value);
  var stabElement = document.querySelector('input[name="stab"]:checked');
  var stab = parseInt(stabElement.value);
  var basePower = parseInt(document.getElementById("basePower").value);
  var effectiveness = parseFloat(document.querySelector('input[name="effectiveness"]:checked').value);
  var desiredDamage = parseFloat(document.getElementById("desiredPercentage").value);
  var burn = 1;
  var level = 100;
  var solver = require("./src/solver"),
      model = {
         "optimize": "EVs",
         "opType": "min",
         "constraints": {
           "DefEVs": {"max": 252},
           "DefEVs": {"min": 0},
           "HPEVs": {"max": 252},
           "HPEVs": {"min": 0},
           "TotalEVs": {"max": 508},
           "DamagePercent": {"max": desiredPercentage}
            },
         "variables": {
            "DefEVs": {"wood": 30, "labor": 5, "profit": 1200, "table": 1, "storage": 30},
            "HPEVs": {"wood": 20, "labor": 10, "profit": 1600, "dresser": 1, "storage": 50}
            },
         "ints": {"DefEVs": 4, "HPEVs": 4}
      }
      console.log(solver.Solve(model));
       // {feasible: true, result: 1440-0, table: 8, dresser: 3}
          */
      var output = JSON.stringify(solver.Solve(model), null, 2);
      var outputElement = document.createElement("pre");
      outputElement.textContent = output;
      document.body.appendChild(outputElement);

});
/*
  function statCalc(Base, Nature, EVs, level) {
    let Stat;
    let intStat;
    let temp;
    temp = Math.floor(((2 * Base + 31 + (EVs / 4)) * level) / 100);
    Stat = Math.floor((temp + 5) * ((Nature / 10) + 1));
    intStat = Math.floor(Stat);
    return intStat;
  }

  function statCalcHP(Base, EVs, level) {
    let Stat;
    let intStat;
    let temp;
    temp = Math.floor(((2 * Base + 31 + (EVs / 4)) * level) / 100);
    Stat = Math.floor((temp + 5) + level + 10);
    intStat = Math.floor(Stat);
    return intStat;
  }

  function dmg(level, Power, Defense, Attack, STAB, Burn, Effective) {
    let damage;
    damage = (((((2 * level / 5) + 2) * Power * (Attack / Defense)) / 50) + 2) * (1 + STAB / 2) * Burn * Effective;
    let intDamage;
    intDamage = Math.floor(damage);
    return intDamage;
  }

function displayResults(evsDef, evsHP, finalDamage) {
  var resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "<p>Optimized EVs:</p>" +
    "<p>EVs Def: " + evsDef + "</p>" +
    "<p>EVs HP: " + evsHP + "</p>" +
    "<p>Final Damage: " + finalDamage + "</p>";
}*/

