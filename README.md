# alotofnekos.github.io
## EV optimizer using Linear Programming
### Concept
#### General form of the problem
Minimize: (HP_EVs) + (Def_EVs)

Subject to: (HP_EVs) + (Def_EVs) < 508

(HP_EVs) > 0
		
(Def_EVs) > 0 
		
(HP_EVs) <= 252
		
(Def_EVs) <= 252
		
f(Def)/f(HP_EVs) <= (Desired_HP_Percentage)

* where f(Def) is the Raw Damage and is f(Def_EVs)

 * f(Def_EVs) is the Def

 * f(HP_EVs) is the HP
