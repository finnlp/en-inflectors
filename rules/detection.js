module.exports.singular = [
	/[^aehilnts]$/, // <= English plurals can not have those endings: bcdfgjkmruopquvxzw
	// Letter S
	/ss$/,
	/sis$/,
	/thos$/,
	/pus$/,
	/tis$/,
	/^[a-z][a-z]s$/,
	// letter A
	/[abefgjklpqywxyz]a$/,
	/[^i]ca$/,
	/[^n]da$/,
	/[^p]ha$/,
	/([^dvtlar])ia$/,
	/([^i]|(cteri|at|ul|at|asi|di|nd|ov|ri))a$/,
	/(z|h|g|b|r|l)eria$/,
	/[^ci]teria$/,
	/[^cb]ilia$/,
	/[^xi]lia$/,
	/[^e]ma$/,
	/[^aeu]na$/,
	/[^ciam][a-z]na$/,
	/[ifo]\w{2}na$/,
	/[^aip]ta$/,
	/[^rmpe][a-z]ta$/,
	/[^gart][a-z][a-z]ta$/,
	// Letter E
	/[^t][^t][^o][^i][^a]e$/,
	// Letter H
	/[^i][^t]h$/,
	// Letter I
	/[uacgzheimnot][a-z]i$/,
	/[^atvliopcbnmgfds][a-z]*i$/,
	/[a-z][^ertiopasl][a-z]+[a-z]i$/,
	// Letter L
	/[^e]l$/,
	// Letter N
	/[^e]n$/,
];

module.exports.plural = [
	/men$/,
	/sortia$/,
	/^media$/,
	/^cilia$/,
	/abilia$/,
	/trivia$/,
	/[^jtma](chi*|yn|ol|am|i|umn|os|an|ermin|omb|ul|eol|cle|on|un)i$/,
	/(um|pa|ro)ni$/,
	/(uo|io)si$/,
	/onchi$/,
	/(o|u|a)li$/,
	/(e|i)i$/,
	/ies$/,
	/ves$/,
	/es$/,
	/[aouiey]ys$/,
	/[tfg]ee[sth]{1,2}e*$/,
	/[^aouie][aoui]s$/,
	/[ea]s$/,
	/[^aouie]s$/,
];