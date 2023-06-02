document.getElementById("evsDef").addEventListener("input", function() {
  var evsDefElement = document.getElementById("evsDef");
  var evsDef = parseInt(evsDefElement.value);
  if (evsDef > 252) {
    evsDef = 252;
    evsDefElement.value = evsDef; // Update the input field with the clamped value
  } else if (evsDef < 0) {
    evsDef = 0;
    evsDefElement.value = evsDef; // Update the input field with the clamped value
  }
});

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

document.getElementById("evsHP").addEventListener("input", function() {
  var evsHPElement = document.getElementById("evsHP");
  var evsHP = parseInt(evsHPElement.value);
  if (evsHP > 252) {
    evsHP = 252;
    evsHPElement.value = evsHP; // Update the input field with the clamped value
  } else if (evsHP < 0) {
    evsHP = 0;
    evsHPElement.value = evsHP; // Update the input field with the clamped value
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
  var learningRate = 0.01;
  var numIterations = 100;

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

  // Perform gradient descent
  for (var i = 0; i < numIterations; i++) {
    // Calculate the damage using the current values of evsDef and evsHP
    var calculatedDamage = dmg(level, basePower, statCalc(baseDef, nature, evsDef, level), statCalc(baseAtk, natureAtk, evsAtk, level), stab, burn, effectiveness);

    // Calculate the loss (discrepancy between desired and calculated damage)
    var loss = Math.abs(calculatedDamage - desiredDamage);

    // Compute the gradients with respect to evsDef and evsHP
    var gradientEvsDef = computeGradientEvsDef(evsDef, evsHP, level, basePower, baseAtk, stab, burn, effectiveness, desiredDamage);
    var gradientEvsHP = computeGradientEvsHP(evsDef, evsHP, level, basePower, baseAtk, stab, burn, effectiveness, desiredDamage);

    // Update the values of evsDef and evsHP using gradient descent
    evsDef -= learningRate * gradientEvsDef;
    evsHP -= learningRate * gradientEvsHP;
  }

  var optimizedEvsDef = Math.round(evsDef); // The optimized value for EVs Def
  var optimizedEvsHP = Math.round(evsHP); // The optimized value for EVs HP
  var finalDamage = calculatedDamage; // The final computed damage

  // Call the displayResults() function to update the HTML with the results
  displayResults(optimizedEvsDef, optimizedEvsHP, finalDamage);

  function computeGradientEvsDef(evsDef, evsHP, level, basePower, baseAtk, stab, burn, effectiveness, desiredDamage) {
    var epsilon = 1e-6; // Small value for numerical approximation
    var loss1 = dmg(level, basePower, statCalc(baseDef, nature, evsDef + epsilon, level), statCalc(baseAtk, natureAtk, evsAtk, level), stab, burn, effectiveness);
    var loss2 = dmg(level, basePower, statCalc(baseDef, nature, evsDef - epsilon, level), statCalc(baseAtk, natureAtk, evsAtk, level), stab, burn, effectiveness);

    var gradient = (loss1 - loss2) / (2 * epsilon); // Numerical approximation of the gradient
    return gradient;
  }

  function computeGradientEvsHP(evsDef, evsHP, level, basePower, baseAtk, stab, burn, effectiveness, desiredDamage) {
    var epsilon = 1e-6; // Small value for numerical approximation
    var loss1 = dmg(level, basePower, statCalc(baseDef, nature, evsDef, level), statCalc(baseAtk, natureAtk, evsAtk, level), stab, burn, effectiveness);
    var loss2 = dmg(level, basePower, statCalc(baseDef, nature, evsDef, level), statCalc(baseAtk, natureAtk, evsAtk, level), stab, burn, effectiveness);

    var gradient = (loss1 - loss2) / (2 * epsilon); // Numerical approximation of the gradient

    return gradient;
  }

  function displayResults(evsDef, evsHP, finalDamage) {
    var resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "<p>Optimized EVs:</p>" +
      "<p>EVs Def: " + evsDef + "</p>" +
      "<p>EVs HP: " + evsHP + "</p>" +
      "<p>Final Damage: " + finalDamage + "</p>";
  }

});

