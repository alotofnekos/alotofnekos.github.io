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

![Damage Thing](https://wikimedia.org/api/rest_v1/media/math/render/svg/262d19dec35d1c26e71e4482ecbc7361215849ed) "a title")

Planning to use [JWallys](https://github.com/JWally/jsLPSolver) jsLPSolver.
