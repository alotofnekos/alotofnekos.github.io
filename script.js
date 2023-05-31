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
            var evsDef = parseInt(document.getElementById("evsDef").value);
            var natureElement = document.querySelector('input[name="nature"]:checked');
            var nature = parseFloat(natureElement.value);
            var baseHP = parseInt(document.getElementById("baseHP").value);
            var evsHP = parseInt(document.getElementById("evsHP").value);
            var baseAtk = parseInt(document.getElementById("baseAtk").value);
            var evsAtk = parseInt(document.getElementById("evsAtk").value);
            var natureAtkElement = document.querySelector('input[name="natureAtk"]:checked');
            var natureAtk = parseFloat(natureAtkElement.value);
            var stabElement = document.querySelector('input[name="stab"]:checked');
            var stab = parseInt(stabElement.value);
            var basePower = parseInt(document.getElementById("basePower").value);
            var effectiveness = parseFloat(document.querySelector('input[name="effectiveness"]:checked').value);
            var desiredPercentage = parseFloat(document.getElementById("desiredPercentage").value);
            // Perform calculations or further processing here
            // ...
            // Display or output the results
            // ...
});

