var newQuote;

	function newFallaciousArg() {

		var fallacious = [
		"<strong>Shifting the burden of proof</strong><br><br>'I need not prove my claim, you must prove it is false.'",
		"<strong>Divine fallacy</strong><br><br>Arguing that, because something is so incredible/amazing/ununderstandable, it must be the result of superior, divine, alien or paranormal agency.",
		"<strong>Ignoratio elenchi</strong><br><br>An argument that may in itself be valid, but does not address the issue in question",
		"<strong>Appeal to ridicule</strong><br><br>An argument is made by presenting the opponent's argument in a way that makes it appear ridiculous.",
		"<strong>Psychogenetic fallacy</strong><br><br>Inferring why an argument is being used, associating it to some psychological reason, then assuming it is invalid as a result. It is wrong to assume that if the origin of an idea comes from a biased mind, then the idea itself must also be a falsehood.",
		"<strong>Argument from incredulity (appeal to common sense)</strong><br><br>'I cannot imagine how this could be true; therefore, it must be false.'",
		"<strong>Argument from silence (argumentum ex silentio)</strong><br><br>Where the conclusion is based on the absence of evidence, rather than the existence of evidence",
		"<strong>Argument to moderation (false compromise, middle ground)</strong><br><br>Assuming that the compromise between two positions is always correct.",
		"<strong>Moving the goalposts</strong><br><br>Argument in which evidence presented in response to a specific claim is dismissed and some other (often greater) evidence is demanded.",
		"<strong>Appeal to tradition</strong><br><br>A conclusion supported solely because it has long been held to be true"
	];


		var randomNum = Math.floor(Math.random() * fallacious.length);
	newQuote = fallacious[randomNum];
		document.getElementById("afficher").innerHTML = newQuote;
	};


function retweet() {
	window.open("https://twitter.com/intent/tweet?text="+newQuote);
               };
