//Randomize & cycle tagline:
var taglines = [
	"A specimen of human life.",
	"Certainy a person.",
	"Probably a person.",
	"Can anyone ever really define person?",
	"A person.  There, I said it.",
	"A gloriously humble man.",
	"A man fueled by burritos, preferably.",
	'A website you can "trust".',
	"Apparently capable.",
	"thinks he thinks.",
	"Still kicking, despite things.",
	"The man, the website.",
	'"Meh."',
	"Precisely vague.",
	"Deceptively honest.",
	"is what he ate.",
	"may be immortal.",
	"has a variety of reputations."
	]
var tagNumber = Math.round((Math.random()*100))%taglines.length;

function readyFunction(){
	$('.tagline').text(taglines[tagNumber]);
	var newTagline = window.setInterval(function(){
		if(++tagNumber>=taglines.length){tagNumber=0;}
		// console.log("Starting transition")

    	// $('.tagline').text(taglines[tagNumber]);
		$('.tagline').fadeOut('slow',
	        function(){
	        	$('.tagline').text(taglines[tagNumber]);
			    // console.log("Completed")
				$('.tagline').fadeIn('slow');
			})
	}, 3500);
}