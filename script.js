var taglines = [
	//"A man of many hats.",
	"A specimen of human life.",
	"Certainy a person.",
	"A gloriously humble man.",
	"A man fueled by burritos, preferably.",
	'A website you can "trust".',
	"Apparently capable.",
	"He thinks he thinks.",
	"Still kicking, despite things.",
	"The man, the website."
	]

var randNum = Math.round((Math.random()*100))%taglines.length;
console.log("Chose "+randNum)
$('#tagline').text(taglines[randNum]);