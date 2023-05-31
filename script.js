document.getElementById("battleForm").addEventListener("submit", function(event) {
      event.preventDefault();

      // Retrieve form values
      var baseDef = parseInt(document.getElementById("baseDef").value);
      var evsDef = parseInt(document.getElementById("evsDef").value);
      if (evsDef > 255) {
            evsDef = 255;
            document.getElementById("evsDef").value = evsDef;
      }
      var natureElement = document.querySelector('input[name="nature"]:checked');
      var nature = parseFloat(natureElement.value);
      var baseHP = parseInt(document.getElementById("baseHP").value);
      var evsHP = parseInt(document.getElementById("evsHP").value);
      var baseAtk = parseInt(document.getElementById("baseAtk").value);
      var evsAtk = parseInt(document.getElementById("evsAtk").value);
      var natureAtk = parseFloat(document.getElementById("natureAtk").value);
      var stab = parseInt(document.getElementById("stab").value);
      var basePower = parseInt(document.getElementById("basePower").value);
      var effectiveness = parseFloat(document.getElementById("effectiveness").value);
      var desiredPercentage = parseFloat(document.getElementById("desiredPercentage").value);

      // Perform calculations or further processing here
      // ...

      // Display or output the results
      // ...
    });
