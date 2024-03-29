var means = [
	"Alcohol",
	"Axe",
	"Bamboo Tip",
	"Bat",
	"Belt",
	"Bite And Tear",
	"Blender",
	"Blood Release",
	"Box Cutter",
	"Brick",
	"Bury",
	"Banana",
	"Bicycle",
	"Badminton Racket",
	"Chainsaw",
	"Chemicals",
	"Dagger",
	"Dirty Water",
	"Dumbbell",
	"Electric Current",
	"Exam Paper",
	"Explosives",
	"Folding Chair",
	"Gunpowder",
	"Hammer",
	"Hook",
	"Ice",
	"Ice Skates",
	"Illegal Drug",
	"Injection",
	"Kick",
	"Knife And Fork",
	"Keyboard",
	"Lighter",
	"Liquid Drug",
	"Locked Room",
	"Machine",
	"Mad Dog",
	"Match",
	"Mercury",
	"Metal Chain",
	"Metal Wire",
	"Overdose",
	"Pill",
	"Pillow",
	"Pistol",
	"Plastic Bag",
	"Poisonous Gas",
	"Poisonous Needle",
	"Potted Plant",
	"Powder Drug",
	"Punch",
	"Push",
	"Radiation",
	"Rope",
	"Scarf",
	"Scissors",
	"Sculpture",
	"Smoke",
	"Lay's Snack",
	"Sniper",
	"Starvation",
	"Stone",
	"Sulfuric Acid",
	"Surgery",
	"Towel",
	"Trophy",
	"Tissue Roll",
	"Unarmed",
	"Venomous Scorpion",
	"Venomous Snake",
	"Video Game Console",
	"Virus",
	"Whip",
	"Wine",
	"Wire",
	"Work",
	"Yoga Mat"
];
var evidence = [
	"Air Conditioning",
	"Ants",
	"Apple",
	"Badge",
	"Banknote",
	"Bell",
	"Betting Chips",
	"Blood",
	"Bone",
	"Book",
	"Bracelet",
	"Bread",
	"Briefs",
	"Broom",
	"Bullet",
	"Button",
	"Car",
	"Cake",
	"Calender",
	"Candy",
	"Cassette Tape",
	"Cat",
	"Certificate",
	"Chalk",
	"Cigar",
	"Cigarette Ash",
	"Cigarette Butt",
	"Cleaning Cloth",
	"Cockroach",
	"Coffee",
	"Coins",
	"Comics",
	"Computer",
	"Computer Disk",
	"Computer Mouse",
	"Confidential Letter",
	"Cosmetic Mask",
	"Cotton",
	"Cup",
	"Curtains",
	"Diamond",
	"Diary",
	"Dice",
	"Dictionary",
	"Dirt",
	"Documents",
	"Dog Fur",
	"Dust",
	"Earrings",
	"Eggs",
	"Electric Circuit",
	"Envelope",
	"Exam Paper",
	"Express Courier",
	"Fan",
	"Fax",
	"Fingernails",
	"Flashlight",
	"Flip-Flop",
	"Flute ",
	"Flyer",
	"Food Ingredients",
	"Gear",
	"Gift",
	"Gloves",
	"Glue",
	"Hair",
	"Hairpin",
	"Handcuffs",
	"Hanger",
	"Hat",
	"Headset",
	"Helmet",
	"Herbal Medicine",
	"High Heel",
	"Hourglass",
	"Ice",
	"iPhone",
	"IC Card",
	"Ink",
	"Insect",
	"Internet Cable",
	"Invitation Card",
	"Iron",
	"LV Bag",
	"Jacket",
	"Jewelry",
	"Juice",
	"Key",
	"Kick",
	"Leaf",
	"Leather Bag",
	"Leather Shoe",
	"Lens",
	"Light Bulb",
	"Lipstick",
	"Lock",
	"Lottery Ticket",
	"Love Letter",
	"Luggage",
	"Lunch Box",
	"Magazine",
	"Mahjong Tiles",
	"Map",
	"Mask",
	"Maze",
	"Menu",
	"Mirror",
	"Mobile Phone",
	"Model",
	"Mosquito",
	"Nail",
	"Name Card",
	"Necklace",
	"Newspaper",
	"Note",
	"Notebook",
	"Numbers",
	"Office Supplies",
	"Oil Painting",
	"Paint",
	"Panties",
	"Peanut",
	"Perfume",
	"Photograph",
	"Plant",
	"Plastic",
	"Playing Cards",
	"Pocket Watch",
	"Powder",
	"Puppet",
	"Push",
	"Puzzle",
	"Raincoat",
	"Rat",
	"Receipt",
	"Red Wine",
	"Ring",
	"Rose",
	"Rubber Stamp",
	"Sand",
	"Sawdust",
	"Seasoning",
	"Signature",
	"Skull",
	"Snacks",
	"Soap",
	"Sock",
	"Soft Drink",
	"Speaker",
	"Spider",
	"Sponge",
	"Steamed Buns",
	"Stockings",
	"Stuffed Toy",
	"Suit",
	"Sunglasses",
	"Surgical Mask",
	"Surveillance Camera",
	"Table Lamp",
	"Tattoo",
	"Tea Leaves",
	"Telephone",
	"Tie",
	"Tissue",
	"Tool Box",
	"Toothpicks",
	"Toy",
	"Toy Blocks",
	"Umbrella",
	"Uniform",
	"USB Flash Drive",
	"Vegetables",
	"Video Camera",
	"Violin",
	"Wallet",
	"Watch",
	"Work"
];
var locations = [
	[
		"Living Room",
		"Bedroom",
		"Storeroom",
		"Bathroom",
		"Kitchen",
		"Balcony"
	],
	[
		"Vacation Home",
		"Park",
		"Supermarket",
		"School",
		"Woods",
		"Bank"
	], [
		"Pub",
		"Bookstore",
		"Restaurant",
		"Hotel",
		"Hospital",
		"Building Site"
	], [
		"Playground",
		"Classroom",
		"Dormitory",
		"Cafeteria",
		"Elevator",
		"Toilet"
	]
]
var causeOfDeathTile = [
	"Suffocation",
	"Severe Injury",
	"Loss of Blood",
	"Illness/ Disease",
	"Poisoning",
	"Accident"
];
var eventTiles = [
	[
	"Brown",
	"Motive of Crime",
	"Hatred",
	"Power",
	"Money",
	"Love",
	"Jealousy",
	"Justice"
	],[
	"Brown",
	"Weather",
	"Sunny",
	"Stormy",
	"Dry",
	"Humid",
	"Cold",
	"Hot"
	],[
	"Brown",
	"Hint on Corpse",
	"Head",
	"Chest",
	"Hand",
	"Leg",
	"Partial",
	"All-over"
	],[
	"Brown",
	"General Impression",
	"Common",
	"Creative",
	"Fishy",
	"Cruel",
	"Horrible",
	"Suspenseful"
	],[
	"Brown",
	"Corpse Condition",
	"Still Warm",
	"Stiff",
	"Decayed",
	"Incomplete",
	"Intact/Complete",
	"Twisted"
	],[
	"Brown",
	"Victim's Identity",
	"Child",
	"Young Adult",
	"Middle-Aged",
	"Senior",
	"Male",
	"Female"
	],[
	"Brown",
	"Murderer's Personality",
	"Arrogant",
	"Despicable",
	"Furious",
	"Greedy",
	"Forceful",
	"Perverted"
	],[
	"Brown",
	"State of The Scene",
	"Bits and Pieces",
	"Ashes",
	"Water Stain",
	"Cracked",
	"Disorderly",
	"Tidy"
	],[
	"Brown",
	"Victim's Build",
	"Large",
	"Thin",
	"Tall",
	"Short",
	"Disfigured",
	"Fit"
	],[
	"Brown",
	"Evidence Left Behind",
	"Natural",
	"Artistic",
	"Written",
	"Synthetic",
	"Personal",
	"Unrelated"
	],[
	"Brown",
	"Victim's Expression",
	"Peaceful",
	"Struggling",
	"Frightened",
	"In Pain",
	"Blank",
	"Angry"
	],[
	"Brown",
	"Time of Death",
	"Dawn",
	"Morning",
	"Noon",
	"Afternoon",
	"Evening",
	"Midnight"
	],[
	"Brown",
	"Duration of Crime",
	"Instanteous",
	"Brief",
	"Gradual",
	"Prolonged",
	"Few Days",
	"Unclear"
	],[
	"Brown",
	"Trace at the Scene",
	"Fingerprint",
	"Footprint",
	"Bruise",
	"Blood Stain",
	"Body Fluid",
	"Scar"
	],[
	"Brown",
	"Noticed by Bystander",
	"Sudden sound",
	"Prolonged sound",
	"Smell",
	"Visual",
	"Action",
	"Nothing"
	],[
	"Brown",
	"Victim's Hobbies",
	"Science",
	"Games",
	"Adventure",
	"Food",
	"Arts",
	"Fashion"
	],[
	"Brown",
	"Victim's Personality",
	"Public",
	"Wild",
	"Reserved",
	"Healthy",
	"Lazy",
	"Average"
	],[
	"Brown",
	"Ambient Noise",
	"Nature",
	"Traffic",
	"People",
	"Machines",
	"Energy",
	"Silent"
	],[
	"Brown",
	"Smell in The Air",
	"Chemical",
	"Perfume",
	"Human Waste",
	"Flowers",
	"Garbage",
	"Food"
	],[
	"Brown",
	"Social Relationship",
	"Relatives",
	"Friends",
	"Colleagues",
	"Employer/Employee",
	"Lovers",
	"Strangers"
	],[
	"Brown",
	"Victim's Occupation",
	"Boss",
	"Professional",
	"Worker",
	"Student",
	"Unemployed",
	"Retired"
	],[
	"Brown",
	"In Progress",
	"Entertainment",
	"Relaxation",
	"Assembly",
	"Trading",
	"Visit",
	"Dining"
	],[
	"Brown",
	"Sudden Incident",
	"Power Failure",
	"Fire",
	"Conflict",
	"Loss of Valuables",
	"Scream",
	"Nothing"
	],[
	"Brown",
	"Day of Crime",
	"Weekday",
	"Weekend",
	"Spring",
	"Summer",
	"Autumn",
	"Winter"
	],[
	"Special",
	"Countdown",
	"The Forensic Scientist draws 2 scene tiles and substitutes them for any 2 scene tiles in the display.  The game ends after the following PRESENTATION is finished."
	],[
	"Special",
	"Erroneous Information",
	"The Forensic Scientist chooses 1 of the scene tiles on display, and moves its marker to new item on the same tile.  Discard this event tile."
	],[
	"Special",
	"A Good Twist",
	"The player who correctly solved the crime last game immediately receives a chance to do so. This does not count toward their 1 chance this game. If no player is entitled to this advantage, the Forensic Scientist discards this tile and draws another.  Discard this event tile."
	],[
	"Special",
	"A Useful Clue",
	"The Forensic Scientist draws 5 Scene tiles, from which they choose 1 to replace any existing tile in the display. The selected tile cannot be another event. Discard this event tile."
	],[
	"Special",
	"Ruled Out Evidence",
	"Each player must flip over 1 of their own Clue Cards, removing it from consideration. This must be done without discussion. The murderer may not flip over the Key Evidence. (Take this action in counterclockwise order from the Forensic Scientist.) Discard this event tile."
	],[
	"Special",
	"The Perfect Crime",
	"Flip a coin secretly. If it is a HEAD, you now win with the Murderer. If it is a TAIL, you win with the Investigators as normal. In either case, draw another tile for this round of Evidence Collection."
	]
];
var eventTilesCopy = eventTiles.slice();
var playerNum = $("#playerNum option:selected").text() - 1;
var clueNum = $("#clueNum option:selected").text();
$('#seed').val(Math.floor(Math.random() * 1000));
// console.log(means[Math.floor(Math.random() * means.length)]);

$("#playReset").click(function() {
	if (confirm("Are you sure?")) {
		$("table").empty();	
		reset();
	}
});

function reset() {
	Math.seedrandom($('#seed').val());
	playerNum = $("#playerNum option:selected").text() - 1;
	clueNum = $("#clueNum option:selected").text();
	eventTilesCopy = eventTiles.slice();
	resetSetup();
	eventSetup();
}
reset();
function eventSetup(){
	var eventsSetup = $("#permEvents");
	eventsSetup.empty();


	//add hidden cause of DEATH
	var cat = '<tr id="cod" class="hideOnLoad purple"><th>Cause of Death</th>';
	for (var i = 0; i < causeOfDeathTile.length; i++) {
		cat+= '<td>'+ causeOfDeathTile[i] +'</td>';
	}
	eventsSetup.append(cat + '</tr>');

	//add locations
	for (var i = 0; i < locations.length; i++) {
		var cat = '<tr class="deleteMe"><th>Locations</th>';
		for (var j = 0; j < locations[i].length; j++) {
			cat+= '<td>'+ locations[i][j] +'</td>';
		}
		eventsSetup.append(cat + '</tr>');
	}
	$("#permEvents tr").click(function(){
		$(this).removeClass('deleteMe').unbind();
		$("tr").removeClass("hideOnLoad");
		$("#addEvent").removeClass("hideOnLoad");
		$("#permEvents tr").each(function(){
			if($(this).hasClass('deleteMe')){
				$(this).remove();
			}
		});
		addEvent();
		addEvent();
		addEvent();
		addEvent();
		addEvent();
		$("#permEvents tr").unbind();
	});
	
}

function addEvent(){
	var eventsSetup = $("#events");
	var specialEventsSetup = $("#specialEvents");
	var tempEvent = eventTilesCopy.splice(Math.floor(Math.random() * eventTilesCopy.length),1)[0];
	if(tempEvent[0] === "Brown"){
		var cat = '<tr><th>'+ tempEvent[1] +'</th>/tr>';
		for (var i = 2; i < tempEvent.length; i++) {
			cat+= '<td>'+ tempEvent[i] +'</td>';
		}
		eventsSetup.append(cat + '<td class="remover">X</td></tr>');
	}
	if(tempEvent[0] === "Special" && $('#eventsCheck').is(':checked')){
		var cat = '';
		$("#specialEvents").append('<tr><th>'+ tempEvent[1] + '</th><td>'+ tempEvent[2] +'</td></tr>');
	}
	$('td').unbind().click(function() {
		if ($(this).hasClass('red')) {
			$(this).removeClass('red');
		} else {
			$(this).addClass('red');
		}
	});
	$('.remover').click(function(){
		$(this).parent('tr').remove();
	});
}
function resetSetup(){
	var playerTab = $("#playerTab");
	playerTab.empty();

	//add means/evidence
	var selectedEvidence = [];
	var selectedMeans = [];

	function selectedSetup(arr, data) {
		while (arr.length < playerNum * clueNum) {
			var temp = data[Math.floor(Math.random() * data.length)]
			var dupe = false;
			for (var i = 0; i < arr.length; i++) {
				if (arr[i] === temp) {
					dupe = true;
				}
			}
			if (!dupe) {
				arr.push(temp);
			}
		};
	};
	selectedSetup(selectedMeans, means);
	selectedSetup(selectedEvidence, evidence);

	//add header for each player
	for (var i = 0; i < playerNum; i++) {
		var cat = '<tr><th rowspan="2"><input type="checkbox"><input placeholder="Player ' + (i + 1) + '" style="width:auto" type="text" name="fname"><br></th>';
		for (var j = 0; j < clueNum; j++) {
			cat+= '<td>'+ selectedMeans[(i * clueNum) + j] +'</td>';
		}
		cat+= '</tr><tr>';
		for (var j = 0; j < clueNum; j++) {
			cat+= '<td>'+ selectedEvidence[(i * clueNum) + j] +'</td>';
		}
		playerTab.append(cat + '</tr>');
	}

	console.log('evi' + selectedEvidence);
	console.log('means' + selectedMeans);
}

