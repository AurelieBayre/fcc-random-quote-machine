/*
updating with "let" and const instead of var. Have to test if it works. 24/11/17
*/
let newArg = "";
let newDef = "";
function newFallaciousArg() {

		const fallacious = [
		{fargument: "Shifting the burden of proof",
		example: "I need not prove my claim, you must prove it is false."},
		{fargument: "Divine fallacy",
		example: "Arguing that, because something is so incredible/amazing/ununderstandable, it must be the result of superior, divine, alien or paranormal agency."},
		{fargument: "Ignoratio elenchi",
		example: "An argument that may in itself be valid, but does not address the issue in question"},
		{fargument: "Appeal to ridicule",
		example: "An argument is made by presenting the opponent's argument in a way that makes it appear ridiculous."},
		{fargument: "Psychogenetic fallacy",
		example: "Inferring why an argument is being used, associating it to some psychological reason, then assuming it is invalid as a result. It is wrong to assume that if the origin of an idea comes from a biased mind, then the idea itself must also be a falsehood."},
		{fargument: "Argument from incredulity (appeal to common sense)",
		example: "I cannot imagine how this could be true; therefore, it must be false."},
		{fargument: "Argument from silence (argumentum ex silentio)",
		example: "Where the conclusion is based on the absence of evidence, rather than the existence of evidence"},
		{fargument: "Argument to moderation (false compromise, middle ground)",
		example: "Assuming that the compromise between two positions is always correct."},
		{fargument: "Moving the goalposts",
		example: "Argument in which evidence presented in response to a specific claim is dismissed and some other (often greater) evidence is demanded."},
		{fargument: "Appeal to tradition",
		example: "A conclusion supported solely because it has long been held to be true"},
	];


		let randomNum = Math.floor(Math.random() * fallacious.length);

		newArg = fallacious[randomNum].fargument;
		newDef = fallacious[randomNum].example;

		document.getElementById("afficherFarg").innerHTML = newArg;
		document.getElementById("afficherDef").innerHTML = newDef;
	};


function retweet() {
	window.open("https://twitter.com/intent/tweet?text="+ "Learning about: " + newArg + " http://bit.ly/2fhyiQS, via @aurelieBayre");
               };
