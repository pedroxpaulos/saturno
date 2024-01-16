const episodeList = [
	{
		number: 'Saturno 001',
		day: '13-10-2023',
		link: 'https://ia600503.us.archive.org/20/items/saturno-005-10-11-2023/Saturno%20001%20-%2013-10-2023.mp3',
		tracklist: [
			'Karen Dalton - Something on Your Mind',
			"Muddy Monk - L'aventura",
			'Warehouse - Super Low',
			'Ruth Orhiunu - Loving Goes Down',
			'Daniela Andrade - Ayaya',
			'Noname - Reality Check',
			'Ari Lennox - Whipped Cream',
			"Father's Children - Dirt and Grime",
			'Prins Thomas - Feel The Love',
			'Jaako Eino Kalevi - Sensaatio',
			'Squid - The Dial',
			'The Undertones - When Saturday Comes',
			"Zzzahara - Cupid's Out Tonight",
			'Curfew - Lazy',
			'Joe Unknown - Ride',
			'Tlim Shug - dk001',
			'Everything But The Girl - Night and Day',
		],
		startTimes: [
			12, 265, 445, 658, 915, 1191, 1448, 1685, 1905, 1969, 2089, 2447, 2789,
			3005, 3134,
		],
		endTimes: [
			213,
			265 + 240,
			445 + 180,
			658 + 213,
			915 + 255,
			1191 + 267,
			1448 + 243,
			1685 + 200,
			1905 + 240,
			1969 + 244,
			2089 + 240,
			2447 + 200,
			2789 + 162,
			3005 + 128,
			3599, // Last song ends at 59:59
		],
	},
	{
		number: 'Saturno 002',
		day: '20-10-2023',
		link: 'https://archive.org/download/saturno-005-10-11-2023/Saturno%20002%20-%2020-10-2023.mp3',
		tracklist: [
			'Irma Thomas - Anyone Who Knows What Love Is (Will Understand)',
			'Ruthven - Have You Decided?',
			'Gordi - Nothing as It Seems',
			'Mauv + Pixx - Change Will Come Anyway',
			'Blood Orange - I Am Sorry We Lied',
			'Santigold - Light’s Out',
			'CloeTheGod - Outta My Mind',
			'Gabby’s World - I Admit I’m Scared',
			'Noah Slee - With Off',
			'Moxie - Oh! Frency',
			'Teyana Taylor - Gonna Love Me',
			"Todd Rundgren - Hello, it's me",
			'Men I Trust - Ring of Past',
			'Kate Tempest - Theme From Becky',
			'Dean + Wesley Joseph - Sugar Dive',
			'Cybertrash - Play Pretend',
			'Wu-Lu - Times',
			'Hole - Violet',
		],
		startTimes: [
			12, 265, 464, 672, 850, 1062, 1250, 1413, 1671, 1825, 2047, 2212, 1831,
			2627, 2850, 3039, 3150, 3475,
		],
		endTimes: [
			265,
			464 + 240,
			672 + 180,
			672 + 240,
			850 + 120,
			1062 + 180,
			1250 + 180,
			1413 + 200,
			1671 + 200,
			1825 + 200,
			2047 + 200,
			2212 + 180,
			1831 + 760,
			2627 + 223,
			2850 + 189,
			3039 + 200,
			3150 + 180,
			3599, // Last song ends at 59:59
		],
	},
	{
		number: 'Saturno 003',
		day: '27-10-2023',
		link: 'https://archive.org/download/saturno-005-10-11-2023/saturno%203.mp3',
		tracklist: [
			'Rolling Stones - Heaven',
			'Benny Sings - Beach House',
			'Natalie Prass - Short Court Style',
			'Lil Yatchy - Running Out Of Time',
			'Alberto Radius - Celebrai',
			'Corto.alto - Mechanisms',
			'Lex Amor, DIPS, Lo-Wu - Moesh',
			'Nation of Language - I Will Never Learn',
			'Fag Gadget - Collapsing New People',
			'Petite Noir - Blame Fire',
			'Jorge Elbrecht - No Real Friend',
			'Queen - Cool Cat',
			'Born at Midnite -Y o Y',
			'Sonns - On My Mind',
			'Daniel Byrd - Places and Spaces',
		],
		startTimes: [
			12, 265, 445, 658, 915, 1191, 1448, 1685, 1905, 1969, 2089, 2447, 2789,
			3005, 3134,
		],
		endTimes: [
			213,
			265 + 240,
			445 + 180,
			658 + 213,
			915 + 255,
			1191 + 267,
			1448 + 243,
			1685 + 200,
			1905 + 240,
			1969 + 244,
			2089 + 240,
			2447 + 200,
			2789 + 162,
			3005 + 128,
			3599, // Last song ends at 59:59
		],
	},
	{
		number: 'Saturno 004',
		day: '3-11-2023',
		link: 'https://archive.org/download/saturno-005-10-11-2023/saturno%20004%20-%2003-11-2023.mp3',
		tracklist: [
			"The West Coast Pop Art Experimental Band - I Won't Hurt You",
			'Moby - Shot In The Back Of The Head',
			'Eartheater - Bringing Me Back',
			'The Kinks - I Go To Sleep (Demo Version)',
			'Eddie Brickell - Circle',
			'Rhye - Major Minor Love',
			'Amber Mark - Love Me Right',
			'Pinty - City Limits',
			'Pale Blue - Dive',
			'Isolée - Clap Gently',
			'Teleman - Cactus',
			'JJ & The Mood - How Many Times?',
			'The Dbs - Black and White',
			"13th Floor Elevators - You're Gonna Want Me",
			'The Obsessives - Surfer Rosa',
			'Pom Pom Square - Popular (feat. Matthew Caws of Nada Surf).mp3',
		],
		startTimes: [
			12, 152, 296, 347, 647, 805, 1013, 1226, 1508, 1730, 2132, 2572, 2886,
			3052, 3232, 3312,
		],
		endTimes: [
			152,
			296 + 180,
			347 + 231,
			647 + 120,
			805 + 242,
			1013 + 208,
			1226 + 282,
			1508 + 222,
			1730 + 302,
			2132 + 442,
			2572 + 314,
			2886 + 166,
			3052 + 180,
			3232 + 80,
			3312,
			3599, // Last song ends at 59:59
		],
	},
	{
		number: 'Saturno 005',
		day: '10-11-2023',
		link: 'https://archive.org/download/saturno-005-10-11-2023/saturno%20005%20-%2010-11-2023.mp3',
		tracklist: [
			"The Kahil El'Zabar Quartet - We'll Get Through This",
			'J.O.B. Orquestra - Govinda',
			'ZAN - Tu',
			'Pale Jay - For James',
			'Julianna Riolino - Sacred Heart',
			'La Villana - Juramentos',
			"Cleo Sol - Don't Let It Go To Your Head",
			'Sirens Of Lesbos - Sweet Harmony',
			'Pearl & The Oysters - Pacific Ave',
			'Lady Wray - Through It All',
			'CARRTOONS/Floyd Fuji - Read My Lips',
			'Domi & JD Beck - TWO SHRiMPS (feat. Mac DeMarco)',
			'Moodyman - Lyk U Use 2 (feat. Andres)',
			'TRAAMS - A House On Fire',
			'Snail Mail - Pristine',
		],
		startTimes: [
			12, 368, 695, 942, 1019, 1232, 1435, 1675, 1850, 2046, 2249, 2398, 2558,
			2860, 3382,
		],
		endTimes: [
			368,
			695,
			942,
			1019,
			1232,
			1435,
			1675,
			1850,
			2046,
			2249,
			2398,
			2558,
			2860,
			3382,
			3382 + 462, // Last song ends at 59:59
		],
	},
	{
		number: 'Saturno 006',
		day: '17-11-2023',
		link: 'https://archive.org/download/saturno-005-10-11-2023/Saturno%20006%20-%2017-11-2023.mp3',
		tracklist: [
			'Diana Ross & The Supremes - Stormy',
			'Gwen McRae - 90% Of Me Is You',
			"Cass McCombs - What Isn't Nature?",
			'Nia Archives - Conveniency',
			'Jorja Smith - Lifeboats (Freestyle)',
			'Drugdealer - Someone To Love',
			'Anri - Last Summer Whisper',
			'The Alchemist - Ocean Prime (Feat. Boldy James)',
			'Ezra Colective - No Confusion (Feat. Kojey Radical)',
			'Shabazz Palaces - Bad Bitch Walking',
			'Sampology - Constant Call (Feat. Charlie Hill & Tiana Khasi)',
			'Thom Yorke - All For The Best',
			'Cande Y Paulo - Limite En Tu Amor',
			'Lou Reed - Perfect Day',
			'Charles Bradley - Changes',
			'The Brian Jonestown Massacre - Anemone',
		],
		startTimes: [
			14,
			193,
			364,
			364 + 281,
			1001,
			1123,
			1346,
			1446,
			1487,
			1711,
			1788,
			2169,
			2210,
			2657,
			2718,
			2718 + 243,
		],
		endTimes: [
			193,
			364,
			364 + 281,
			364 + 281 + 137,
			1001 + 122,
			1123 + 223,
			1346 + 100,
			1446 + 41,
			1487 + 224,
			1711 + 77,
			1788 + 381,
			2169 + 41,
			2210 + 447,
			2657 + 61,
			2718 + 243,
			3599, // Last song ends at 59:59
		],
	},
	{
		number: 'Saturno 007',
		day: '24-11-2023',
		link: 'https://archive.org/download/saturno-8-01-11-2023/Saturno%20007%20-%2024-11-2023.mp3', // Updated link
		tracklist: [
			'The Beatles - Because',
			'Tammy Payne - Same',
			'Skeleten - Walking On Your Name',
			'A. R. Kane - A Love From Outer Space',
			'Sofie + Miss World - Melody',
			'Dreamcastmoe - L foot, Right',
			'The Gossip - Crazy Again',
			'Gnawa Njoum Experience - Marhaba',
			'The Jam - That´s Entertainment',
			'Fleetwood Mac - Over My Head',
			'The Circling Sun - Spirits (Part 2)',
			'Tom Yorke - Dawn Chorus',
			'Ioji - Potion',
		],
		startTimes: [
			12, 173, 405, 681, 982, 1211, 1519, 1723, 2013, 2217, 2410, 2817, 3120,
		],
		endTimes: [
			173,
			405,
			681,
			982,
			1211,
			1519,
			1723,
			2013,
			2217,
			2410,
			2817,
			3120,
			3599, // Last song ends at 59:59
		],
	},
	{
		number: 'Saturno 008',
		day: '01-12-2023',
		link: 'https://archive.org/download/saturno-8-01-11-2023/Saturno%208%20-%2001-11-2023.mp3', // Replace with the actual link
		tracklist: [
			'Shuggie Otis - Strawberry Letter 23',
			'Alexander IV - Rue',
			'Mystic Moods Orchestra - Cosmic Sea',
			'COIO3, Kate NV - I Knew It',
			'Monophonics - Lying Eyes',
			'Vanessa Zamora - Malas Amistades',
			'The Juan McLean - Running Back to You',
			'Poolside - Harvest Moon',
			'Gorillaz - Lake Zurich',
			'Tapioca - África Brasil',
			"Paul Johnson - Better Than This (Dego & Kaidi's 2000 Black Mix)",
			'Bell X1 Flame (Chicken Lips Version)',
			'Jacana People + Antony Szmierek - Twist Forever',
			'Donna Summer - Spring Love Affair',
		],
		startTimes: [
			12, 246, 476, 644, 874, 1042, 1284, 1699, 2060, 2312, 2556, 2795, 3163,
			3335,
		],
		endTimes: [
			246,
			476,
			644,
			874,
			1042,
			1284,
			1699,
			2060,
			2312,
			2556,
			2795,
			3163,
			3335,
			3599, // Last song ends at 59:59
		],
	},
	{
		number: 'Saturno 009',
		day: '8-12-2023',
		link: 'https://archive.org/download/saturno-10-15-12-2023/Saturno%20009%20-%2008-11-2023.mp3', // Replace with the actual link
		tracklist: [
			'French 79 - Hometown (Intro)',
			'Chanel Beads - Ef',
			'Jeff Phelps - Wrong Space, Wrong Time',
			'Jack J - Foolish Man',
			'Liz Phair - Baby Got Going',
			'The Electric Prunes - I Had Too Much to Dream (Last Night)',
			'Tyler, The Creator - IFHY (feat. Pharrell)',
			'Malik Djoudi - Sous Garantie',
			'Turnstile + BADBADNOTGOOD - Alien Love Call',
			'Oko Ebombo - Nalingi Yo',
			'PawPaw Rod - Hit Em Where It Hurts',
			'Vegyn - B...Arp Forever V3 (109.613 BPM)',
			'Postal Service - Sleeping In',
			'audiobooks - The Doll',
			'Black Sabbath - Orchid',
			'Amber Mark - Love Me Right',
			'Marco Luka - Protect',
			'Artur Nunes - Kisua Ki Ngui Fuá',
			'The Softies - Hello Rain',
		],
		startTimes: [
			12, 112, 282, 522, 764, 884, 1052, 1349, 1546, 1691, 1960, 2123, 2171,
			2424, 2655, 2673, 3024, 3224, 3368,
		],
		endTimes: [
			112,
			282,
			522,
			764,
			884,
			1052,
			1349,
			1546,
			1691,
			1960,
			2123,
			2171,
			2424,
			2655,
			2673,
			3024,
			3224,
			3368,
			3599, // Last song ends at 59:59
		],
	},

	// Saturno 010
	{
		number: 'Saturno 010',
		day: '15-12-2023',
		link: 'https://archive.org/download/saturno-10-15-12-2023/Saturno%2010%20-%2015-12-2023.mp3', // Replace with the actual link
		tracklist: [
			'Eli Keszler - Dawn (Duendita Remix)',
			"Beastie Boys - I Don't Know",
			'Bruno Berle - É Preciso Ter Amor',
			'The Motifs - Take Mine',
			'Blue Gas - Shadows From Nowhere',
			'Ah-Mer-Ah-Su - Temperamental',
			'De La Soul - Snoopies (Feat. David Byrne )',
			'Leisure - Money',
			'Oscar Jerome - Subdued',
			'James Holden + The Animal Spirits - Each Moment Like the First',
			'Spellling - Turning Wheel',
			'Hand Habits - Something Wrong',
			"Andrea Chahayed - Heaven Can't Wait",
			'Roses Gabor + Sampha - Illusions',
			'Cuco - Amor de Siempre',
			'Yard Act - 100% Endurance',
			'Female Species - Stop and Think it Over',
		],
		startTimes: [
			12, 168, 346, 528, 666, 985, 1200, 1454, 1690, 1917, 2213, 2420, 2597,
			2778, 2992, 3231, 3446,
		],
		endTimes: [
			168,
			346,
			528,
			666,
			985,
			1200,
			1454,
			1690,
			1917,
			2213,
			2420,
			2597,
			2778,
			2992,
			3231,
			3446,
			3599, // Last song ends at 59:59
		],
	},
	{
		number: 'Saturno 011',
		day: '22-12-2023',
		link: 'https://archive.org/download/saturno-013-05-01-2024/Saturno%20011%20-%2022-12-2023%20.mp3', // Replace with the actual link
		tracklist: [
			'Harmonia & Eno - Tracks and Traces',
			'Kokoroko - Home',
			'Frank Ocean feat. Earl Sweatshirt - Super Rich Kids',
			'Kelsey Lu - Kindred I',
			'Sven Wunder - Ultramarine',
			'Orion Sun - Mirage',
			'Only Girl - Stone',
			'John Cooper Clarke - Night People',
			'Chris Speeding - Video Life',
			'Poni Hoax - Cheerleader in My Dreams',
			'Mourn - Otitis',
			"Flamin' Groovies - Shake Some Action",
			"The Go - Summer's Gonna Be My Girls",
			'Mattias Alkberg - Ragnar',
			"Kim Carnes - When I'm Away From You",
			'The Cry - Alone',
			'Midlife - The Magnificent Moon',
		],
		startTimes: [
			12, 186, 304, 596, 686, 869, 922, 1129, 1360, 1549, 1980, 2130, 2396,
			2608, 2819, 3016, 3237,
		],
		endTimes: [
			186,
			304,
			596,
			686,
			869,
			922,
			1129,
			1360,
			1549,
			1980,
			2130,
			2396,
			2608,
			2819,
			3016,
			3237,
			3599, // Last song ends at 59:59
		],
	},
	{
		number: 'Saturno 012',
		day: '29-12-2023',
		link: 'https://archive.org/download/saturno-013-05-01-2024/saturno%2012%20%2029-12-2023.mp3', // Replace with the actual link
		tracklist: [
			'Paco de Lucia - Entre Dos Aguas',
			'Kelsey Lu - Kindred I',
			'Terno Rei - Trem Leva Minhas Pernas',
			'Marialluïsa - La Vida és Curta Però Ampla',
			'Juana Molina - ¿Quién?',
			'Jeff Parker - Gnarciss',
			'Deerhof - Flower',
			'Mia Doi Todd - Music Life',
			'The Cry - Alone',
			'Chris Spedding - Video Life',
			"Kim Carnes - When I'm Away From You",
			"Kate Fagan - I Don't Want To Be Too Cool",
			'Deux - Gam and Performance',
			"Kym Amps - You Don't Know My Name",
			'AZUR - Hundred and Five',
			'Grace Ives - Icing On The Cake',
			'Cansei De Ser Sexy - This Month, Day 10',
			"Au Pairs - It's Obvious",
		],
		startTimes: [
			12, 360, 451, 626, 830, 980, 1149, 1248, 1630, 1852, 2042, 2245, 2390,
			2603, 2765, 3019, 3124, 3357,
		],
		endTimes: [
			360,
			451,
			626,
			830,
			980,
			1149,
			1248,
			1630,
			1852,
			2042,
			2245,
			2390,
			2603,
			2765,
			3019,
			3124,
			3357,
			3599, // Last song ends at 59:59
		],
	},
	{
		number: 'Saturno 013',
		day: '05-01-2024',
		link: 'https://archive.org/download/saturno-013-05-01-2024/Saturno%20013%20-%2005-01-2024.mp3', // Replace with the actual link
		tracklist: [
			'Tara Clerkin Trio - In Spring',
			'Mark Prichard - Give It To Your Choir',
			'Fleetwood Mac - Prove Your Love',
			'EOLA - B and O Blues',
			"The Field - Everybody's Gotta Learn Sometime",
			'Beach House - Master of None',
			'Teleman - Cristina',
			'Novelty Island - Jangleheart',
			'April March Meets Staplin - Parti avec le soleil',
			'Prinzorn Dance School - Let Me Go',
			'Fall of Saigon - Visions',
			'Miss Kittin - Grace',
			"Galaxie 500 - Don't Let Your Youth Go To Waste",
			'Leon Lowman - Morning Song',
			'Judie Tzuke - Shoot From The Heart',
			'Jim Spencer. - Wrap Myself In Your Love',
		],
		startTimes: [
			12, 312, 527, 689, 1004, 1407, 1605, 1823, 1981, 2137, 2345, 2480, 2671,
			3066, 3247, 3490,
		],
		endTimes: [
			312,
			527,
			689,
			1004,
			1407,
			1605,
			1823,
			1981,
			2137,
			2345,
			2480,
			2671,
			3066,
			3247,
			3490,
			3599, // Last song ends at 59:59
		],
	},
	{
		number: 'Saturno 014',
		day: '12-01-2024',
		link: 'https://archive.org/download/saturno-014-12-01-2024/saturno%20014%20%20-%2012-01-2024.mp3', // Replace with the actual link
		tracklist: [
			'Sally Oldfield - Blue Water',
			'Brhany - Bloom',
			'Lynda Dawn - Move',
			'Madonna - Justify My Love',
			'Shintaro Sakamoto - Like an Obligation',
			'Steve Lacy - Looks',
			'The Lazy Eyes - Imaginary Girl',
			'Jim Sullivan - U.F.O.',
			'X - I Must Not Think Bad Thoughts',
			'Squeeze - Up The Junction',
			'The Records - Starry Eyes',
			"Sabina - Viva l'amour",
			'Yumi Zouma - Cool For A Second',
			'Curtis Water - Manic Man',
			'Dinosaur Jr - Knocked Around',
		],
		startTimes: [
			12, 480, 710, 932, 1212, 1573, 1664, 2067, 2278, 2638, 2922, 3145, 3320,
			3615, 3879,
		],
		endTimes: [
			480,
			710,
			932,
			1212,
			1573,
			1664,
			2067,
			2278,
			2638,
			2922,
			3145,
			3320,
			3615,
			3879,
			4199, // Last song ends at 59:59
		],
	},
];

module.exports = episodeList;
